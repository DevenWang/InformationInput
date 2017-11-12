$("#submitAll").click(function () {
//        $('#totalForm').bootstrapValidator('validate');
    var bootstrapValidator = $("#totalForm").data('bootstrapValidator');
    bootstrapValidator.validate();
    if (bootstrapValidator.isValid()) {
        finalSubmit();
    } else {
        toastr.error("输入数据验证失败，请检验输入数据");
        console.log("失败了");
        return;
    }
});


function finalSubmit() {

    var placeId = $.trim($("#district").val());
    var title = $.trim($("#title").val());
    var baseDesc = $.trim($("#baseDesc").val());
    var start = $.trim($("#start").val());
    var end = $.trim($("#end").val());
    var type = $.trim($("#type").val());
    var baseLevel = $.trim($("#baseLevel").val());

    var loss = $.trim($("#loss").val());
    var injured = $.trim($("#injured").val());
    var death = $.trim($("#death").val());
    var environmental = $.trim($("#environmental").val());
    var social = $.trim($("#social").val());
    var disasterType = $.trim($("#disasterType").val());
    var hazards = $.trim($("#hazards").val());
    var bearing = $.trim($("#bearing").val());

    var expert = $.trim($("#expert").val());
    var rank = $.trim($("#rank").val());
    var evaluationDesc = $.trim($("#evaluationDesc").val());
    var control = $.trim($("#control").val());
    var response = $.trim($("#response").val());
    var prevention = $.trim($("#prevention").val());
    var rescue = $.trim($("#rescue").val());

    var othersNum = $.trim($("#others_num").val());
    var others = new Array();

    debugger
    for (var i = 1; i <= othersNum; i++) {
        var otherDesc = $.trim($("#othersDesc_" + i).val());
        var otherInfo = $.trim($("#othersInfo_" + i).val());
        others.push({"othersDesc": otherDesc, "othersInfo": otherInfo});
    }

    var subData = {
        "placeId": placeId,
        "title": title,
        "baseDesc": baseDesc,
        "start": start,
        "end": end,
        "type": type,
        "baseLevel": baseLevel,
        "loss": loss,
        "injured": injured,
        "death": death,
        "environmental": environmental,
        "social": social,
        "disasterType": disasterType,
        "hazards": hazards,
        "bearing": bearing,
        "expert": expert,
        "rank": rank,
        "evaluationDesc": evaluationDesc,
        "control": control,
        "response": response,
        "prevention": prevention,
        "rescue": rescue,
        "others": others
    };

    $.ajax({
        type: "POST",
        url: "/add",
        dataType: "json",
        data: JSON.stringify(subData),
        contentType: "application/json; charset=utf-8",
        success: function (resp) {
            if (resp.status == 200) {
                toastr.success("添加成功");
                var storage=window.localStorage;
                storage.clear();

                setTimeout(function () {
                    window.location.reload();
                }, 3000);
            } else {
                toastr.error("错误原因：" + resp.msg);
            }
        },
        error: function (resp) {
            toastr.error("错误代码：" + resp.status);
        }
    });

}