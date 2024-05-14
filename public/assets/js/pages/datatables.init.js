$(document).ready(function () {
    $.fn.dataTable.ext.errMode = 'none';

    let dataTable = $("#datatable-buttons").DataTable({
        lengthChange: true,
        info: false,
        dom: 'Bfrtip',
        // ordering: false,
        searching: false,
        paging: false,
        buttons: ["copy", "excel", "pdf", "colvis"]
    });

    // if ($.fn.DataTable.isDataTable("#datatable-buttons")) {
    //     dataTable.destroy();
    // }

    dataTable = $("#datatable-buttons").DataTable({
        lengthChange: true,
        info: false,
        dom: 'Bfrtip',
        // ordering: false,
        searching: false,
        paging: false,
        buttons: ["copy", "excel", "pdf", "colvis"]
    });

    // const currentData = dataTable.rows().data().toArray();
    // console.log(currentData);

    dataTable.buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)");
    $(".dataTables_length select").addClass("form-select form-select-sm");
});
