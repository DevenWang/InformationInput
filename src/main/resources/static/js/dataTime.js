$('.start_datetime').datetimepicker({
    language: 'zh-CN',
    weekStart: 1,
    autoclose: 1,
    endDate: new Date(),
    todayHighlight: true,
    showMeridian: 1
}).on('hide', function (e) {
    $('#totalForm').data('bootstrapValidator')
        .updateStatus('start', 'NOT_VALIDATED', null)
        .validateField('start');
});
$('.end_datetime').datetimepicker({
    language: 'zh-CN',
    weekStart: 1,
    autoclose: 1,
    endDate: new Date(),
    todayHighlight: true,
    showMeridian: 1
}).on('hide', function (e) {
    $('#totalForm').data('bootstrapValidator')
        .updateStatus('end', 'NOT_VALIDATED', null)
        .validateField('end');
});