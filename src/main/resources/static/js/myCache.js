$(function () {
    if (!window.localStorage) {
        toastr.error("浏览器不支持localstorage");
        return false;
    } else {

        //定时储存
        ref = setInterval(function () {
            addLocalStorage();
        }, 60000);

    }
});


function addLocalStorage() {

    var storage = window.localStorage;

    var item = ["title", "baseDesc", "district", "city", "province", "start", "end", "type", "baseLevel", "loss", "injured", "death", "environmental", "social", "disasterType", "hazards", "bearing", "expert", "rank", "evaluationDesc", "control", "response", "prevention", "rescue"];

    // debugger
    for (var i in item) {
        var name = item[i];
        var s = $.trim($("#" + name).val());
        storage.setItem(name, s);
    }

    var othersNum = $.trim($("#others_num").val());
    storage.setItem("othersNum", othersNum);

    for (var i = 1; i <= othersNum; i++) {
        var otherDesc = $.trim($("#othersDesc_" + i).val());
        var otherInfo = $.trim($("#othersInfo_" + i).val());

        storage.setItem("othersDesc_" + i, otherDesc);
        storage.setItem("othersInfo_" + i, otherInfo);
    }

    toastr.info("已经保存在本地！");

}


function loadCache() {

    var storage = window.localStorage;

    var item = ["district", "title", "baseDesc", "district", "city", "province", "start", "end", "type", "baseLevel", "loss", "injured", "death", "environmental", "social", "disasterType", "hazards", "bearing", "expert", "rank", "evaluationDesc", "control", "response", "prevention", "rescue"];

    // debugger
    for (var i in item) {
        var name = item[i];
        var s = storage.getItem(name);
        $("#" + name).val(s);
    }

    if (storage.getItem("loss") == null || storage.getItem("loss") == 0) {
        $("#loss").val(0);
    }

    var num = storage.getItem("othersNum");
    for (var i = 1; i <= num; i++) {
        var otherDesc = storage.getItem("othersDesc_" + i);
        var otherInfo = storage.getItem("othersInfo_" + i);

        var trId = "tr_" + num;
        var strHTML = "<button class='btn btn-default' onclick=delete_others('d" + trId + "')><span class='glyphicon glyphicon-remove'></span></button>";
        $("#others_ready").append("<tr id='" + trId + "'>" +
            "<td><input type='text' readonly id='othersDesc_" + num + "'></td> " +
            "<td><input type='text' readonly id='othersInfo_" + num + "'></td> " +
            "<td>" + strHTML + "</td>"
        );

        $("#othersDesc_" + num).val(otherDesc);
        $("#othersInfo_" + num).val(otherInfo);
    }

    toastr.info("已从本地加载！")

}