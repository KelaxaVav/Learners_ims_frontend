import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import req from '../utils/req';
import loadScript from '../hooks/loadScript';
import { setIsLoading } from '../Redux/Slice/slice';
import { Outlet } from 'react-router-dom';
import DataTableSkeleton from '../utils/skeletons/DataTableSkeleton';
import useStylesheet from '../hooks/useStyleSheet';

import 'datatables.net';
import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-responsive';
import $ from 'jquery';

// // Import the DataTables CSS
// import 'datatables.net-dt/css/jquery.dataTables.min.css';

// // Import the DataTables Buttons CSS
// import 'datatables.net-buttons-dt/css/buttons.dataTables.min.css';


function TableView({ children, endpointName, setIsLoading, isLoading, setData, reload, fixedColNumber = undefined }) {
    useStylesheet("assets/custom/css/card.css");

    const dataTableRef = useRef(null);

    const [metaData, setMetaData] = useState({});

    const [page, setPage] = useState(1);
    const [size, setSize] = useState(5);

    const [isReloadTable, setIsReloadTable] = useState(false);
    const [isEnablePrevious, setIsEnablePrevious] = useState(false);
    const [isEnableNext, setIsEnableNext] = useState(true);

    // const pageSizeRef = useRef();

    const maxPage = useMemo(() => {
        // const total_pages = metaData?.meta?.total == 0 ? 0 : (metaData?.meta?.total - 1) / size + 1
        // console.log(metaData?.meta?.total, parseInt(total_pages));

        // console.log(Math.ceil(metaData?.meta?.total ?? 1 / size));
        // return Math.ceil(metaData?.meta?.total ?? 1 / size)
        const total = parseInt(metaData?.meta?.total) ?? 0;
        // console.log(total);
        return Math.ceil(total == 0 ? 0 : (total - 1) / size + 1) - 1
    }, [metaData?.meta?.total, size]);

    useLayoutEffect(() => {
        setIsLoading(true);
        // setIsReloadTable(false);

        // $.fn.dataTable.ext.errMode = 'none';
        // $(dataTableRef.current).DataTable().destroy();

        const params = new URLSearchParams();
        params.set("page", page);
        params.set("size", size);
        // console.log(params.toString());
        // console.log(`${endpointName}?${params.toString()}`);
        // children = [];
        // loadScript("assets/js/pages/datatables.clear.js");
        req().get(`${endpointName}?${params.toString()}`).then((res) => {

            if (res.data.status) {
                setData(res.data);
                setMetaData(res.data);
                // console.log("maxPage: ", maxPage);
                // console.log("page: ", Math.ceil(res.data?.meta?.total == 0 ? 0 : (res.data?.meta?.total - 1) / size + 1));
                if ((Math.ceil(res.data?.meta?.total == 0 ? 0 : (res.data?.meta?.total - 1) / size + 1) - 1) > 1) {
                    setIsEnableNext(true);
                }
            } else {
                console.log("transaction", res);
            }
        }).catch((err) => {
            console.log("transaction", err);
        }).finally(() => {
            setIsLoading(false);
            setIsReloadTable(true);
            // loadScript("assets/js/pages/datatables.init.js");

            // if (!$.fn.DataTable.isDataTable('#datatable-buttons')) {
            //     $(dataTableRef.current).DataTable({
            //         lengthChange: true,
            //         info: false,
            //         dom: 'Bfrtip',
            //         // ordering: false,
            //         searching: false,
            //         paging: false,
            //         buttons: ["copy", "excel", "pdf", "colvis"]
            //     });
            // }
        })
    }, [endpointName, maxPage, page, reload, setData, setIsLoading, size])

    // useEffect(() => {
    //     console.log("reload:  ", reload);

    // }, [reload])


    useLayoutEffect(() => {
        // console.log("dataTable", " $('.dataTables_length select')");
        $.fn.dataTable.ext.errMode = 'none';

        if ($.fn.DataTable.isDataTable('#datatable-buttons')) {
            $(dataTableRef.current).DataTable().destroy();
        }

        const cols = []
        cols.push({ responsivePriority: 1, targets: 1 });
        if (fixedColNumber && fixedColNumber.length > 0) {
            fixedColNumber?.map((col, i) => {
                cols.push({ responsivePriority: cols.length + 1, targets: col });
            })
        }
        cols.push({ responsivePriority: 1, targets: -1 });
        // console.log("cols", cols);

        const dataTable = $(dataTableRef.current).DataTable({
            lengthChange: true,
            info: false,
            dom: 'Bfrtip',
            searching: false,
            paging: false,
            // buttons: ['copy', 'excel', 'pdf', 'colvis'],
            buttons: [
                'copy',
                'excel',
                {
                    extend: 'pdfHtml5',
                    orientation: 'landscape',
                    pageSize: 'A4'
                },
                'colvis'
            ],
            // autoWidth: true,
            responsive: true,
            columnDefs: [
                // { responsivePriority: 1, targets: 0 },
                // { responsivePriority: 2, targets: 1 },
                // { responsivePriority: 3, targets: -1 }
                ...cols
            ],
        });


        // Apply Bootstrap classes to DataTables Buttons
        const buttonsContainer = $(dataTable.buttons().container());
        buttonsContainer.addClass('btn-group'); // Bootstrap class for button groups
        buttonsContainer.find('button').addClass('btn btn-primary waves-light waves-effect'); // Bootstrap button classes

        // // Find and style the colvis button separately
        const colvisButton = buttonsContainer.find('.buttons-colvis');
        colvisButton.addClass('btn btn-secondary'); // Add Bootstrap classes to colvis button


        // console.log(dataTable, " $('.dataTables_length select')");

        // // Event handling for buttons inside collapsed rows
        // $(dataTableRef.current).on('click', '.collapsed .btn', function (e) {
        //     e.stopPropagation(); // Prevent collapsing when buttons are clicked
        //     // Your button click logic here
        //     console.log("ddd");
        //     // For example, you might use $(this).closest('tr') to identify the row and perform actions
        // });


        dataTable.buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)");
        // $(".dataTables_length select").addClass("form-select form-select-sm");

        // setIsReloadTable(r => r + 1);
        setIsReloadTable(false);

        return () => {
            dataTable.destroy();
        };
    }, [isReloadTable]);

    const previousPage = (e) => {
        e.preventDefault();
        if (!isEnablePrevious) return;
        setPage((v) => {
            if (v - 1 <= 0) {
                setIsEnablePrevious(false);
                //     console.log("page: ", page);
                return 1;
            }
            setIsEnableNext(true);
            // console.log("page: ", page);
            // setIsEnableNext(true);
            return v - 1;
        })
    }

    const nextPage = (e) => {
        e.preventDefault();
        if (!isEnableNext) return;
        setPage((v) => {
            if (v + 1 >= maxPage) {
                setIsEnableNext(false);
                //     console.log("page: ", page);
                return maxPage;
            }
            setIsEnablePrevious(true);

            // setIsEnablePrevious(true);
            // console.log("page: ", page);
            return v + 1;
        })
    }

    const updatePageSize = (d) => {
        setSize(isNaN(parseInt(d?.target?.value)) ? 5 : parseInt(d?.target?.value));
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">

                            {isLoading && <div className='mt-4'>
                                <DataTableSkeleton />
                            </div>}

                            {!isLoading && <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="dataTables_length" id="datatable-buttons_length">
                                        <label className='d-inline-flex gap-1 justify-content-center align-items-center'>Show
                                            <select name="datatable-buttons_length" aria-controls="datatable-buttons" className="custom-select custom-select-sm form-control form-control-sm form-select form-select-sm" onChange={updatePageSize} value={size}>
                                                <option value={5}>5</option>
                                                <option value={10}>10</option>
                                                <option value={25}>25</option>
                                                <option value={50}>50</option>
                                                <option value={100}>100</option>
                                                <option value={500}>500</option>
                                            </select>
                                            entries
                                        </label>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6">
                                    <div id="datatable-buttons_filter" className="dataTables_filter">
                                        <label className='d-inline-flex gap-1 justify-content-center align-items-center float-end'>Search:<input type="search" className="form-control form-control-sm" aria-controls="datatable-buttons" /></label>
                                    </div>
                                </div>
                            </div>}

                        </div>
                        {!isLoading && <div className="card-body">
                            <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                                <div className='row table-responsive'>
                                    <table ref={dataTableRef} className="table table-bordered dt-responsive nowrap w-100" id="datatable-buttons">
                                        {children}
                                    </table>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12 col-md-5">
                                    <div className="dataTables_info" id="datatable_info" role="status" aria-live="polite">Showing {metaData?.length ?? 0} of {metaData?.meta?.total ?? 0} entries
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <div className="dataTables_paginate paging_simple_numbers float-end">
                                        <ul className="pagination">
                                            <li className={isEnablePrevious ? "paginate_button page-item previous" : "paginate_button page-item previous disabled"}>
                                                <button disabled={!isEnablePrevious} onClick={previousPage} aria-controls="datatable" data-dt-idx="previous" tabIndex={0} className="page-link">Previous</button>
                                            </li>
                                            <li className="paginate_button page-item active">
                                                <label aria-controls="datatable" data-dt-idx={0} tabIndex={0} className="page-link">{page}</label>
                                            </li>
                                            <li className={isEnableNext ? "paginate_button page-item next" : "paginate_button page-item next disabled"}>
                                                <button disabled={!isEnableNext} onClick={nextPage} aria-controls="datatable" data-dt-idx="next" tabIndex={1} className="page-link">Next</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}

TableView.propTypes = {
    children: PropTypes.node.isRequired,
    endpointName: PropTypes.string.isRequired,
    setIsLoading: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    setData: PropTypes.func.isRequired,
    reload: PropTypes.number.isRequired,
    fixedColNumber: PropTypes.array,
}

export default TableView

