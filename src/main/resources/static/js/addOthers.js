$("#add_others").click(function () {
    var num = $("#others_num").val();
    num++;
    $("#others_num").val(num);

    var trId = "tr_" + num;

    var strHTML = "<button class='btn btn-default' onclick=delete_others('d" + trId + "')><span class='glyphicon glyphicon-remove'></span></button>";
    $("#others_ready").append("<tr id='" + trId + "'>" +
        "<td><input type='text' readonly id='othersDesc_" + num + "'></td> " +
        "<td><input type='text' readonly id='othersInfo_" + num + "'></td> " +
        "<td>" + strHTML + "</td>"
    );

    $("#othersDesc_" + num).val($("#othersDesc").val());
    $("#othersInfo_" + num).val($("#othersInfo").val());

    CKEDITOR.instances.othersDesc_edit1.setData("");
    CKEDITOR.instances.othersInfo_edit1.setData("");

    $("#othersDesc").val(" ");
    $("#othersInfo").val(" ");

});

function delete_others(others_id) {

    others_id = others_id.substring(1);
    $("#" + others_id).remove();
    var num = $("#others_num").val();
    num--;
    $("#others_num").val(num);

}