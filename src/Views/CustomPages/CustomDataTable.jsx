import { useEffect } from "react";
import { useState } from "react";
import DataTable, { createTheme } from 'react-data-table-component';
import React from "react";

const CustomDataTable = ({ columns, dataRows, setPage = undefined, currentPage = 1, sNoWidth = "70px", sNoPaddingLeft = "10px", selectableRows=false, onRowClicked = () => { } }) => {

  const [data, setData] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [offset, setOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(10);
  const [headers, setHeaders] = useState([
    {
      name: 'S.No',
      selector: (row, index) => offset + index + 1,
      //   width: sNoWidth,
      paddingLeft: sNoPaddingLeft,
    },
    // ...columns,
    ...columns.map(col => ({ ...col, style: { maxWidth: col.maxWidth || '150px' } })),
  ]);

  useEffect(() => {
    setOffset((currentPage - 1) * perPage);
    setEndOffset(((currentPage - 1) * perPage) + perPage);
  }, []);

  useEffect(() => {
    var paginatedData = Array.isArray(dataRows) && dataRows.slice(offset, endOffset);
    setData(paginatedData);
    setTotalRows(dataRows?.length ?? 1);
    setHeaders([
      {
        name: 'S.No',
        selector: (row, index) => offset + index + 1,
        width: '80px',
        style: { fontWeight: "bold" }
      },
      ...columns,
    ]);
  }, [perPage, offset, dataRows]);


  const handlePageChange = page => {
    setOffset((page - 1) * perPage);
    setEndOffset(((page - 1) * perPage) + perPage);
    setPage && setPage(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
    setOffset(0);
    setEndOffset(newPerPage);
    setPage && setPage(page);
  };



  const customStyles = {
    head: {
      style: {
        color: '#063750',
        fontSize: '15px',
        fontWeight: 'bold',
      },
    },
    rows: {
      style: {
        background: 'rgb(200, 220, 223)',
        fontSize: '14px',
        cursor: 'pointer',
      },
    },

  };

  return (
    <DataTable
      columns={headers}
      data={data}
      pagination
      paginationServer
      selectableRows = {selectableRows}
      paginationTotalRows={totalRows}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      className="custom-datatable custom-outline-border"
      customStyles={customStyles}
      paginationRowsPerPageOptions={[3, 5, 10, 15, 25, 30, 50, 75, 100]}
      striped={true}
      highlightOnHover={true}
      paginationDefaultPage={currentPage}
      persistTableHead={true}
      onRowClicked={onRowClicked}
    />
  );
};
export default CustomDataTable;