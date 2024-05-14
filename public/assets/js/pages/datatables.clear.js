$(document).ready(function () {
    $.fn.dataTable.ext.errMode = 'none';

    var table = $('#datatable-buttons')
    if (!$.fn.DataTable.isDataTable('#datatable-buttons')) {
       return;
    }
    else {
        var table = $('#datatable-buttons').DataTable();
        table.destroy();
    }
});
