//    CKEDITOR.replace('baseDesc_edit1');
//    $("#baseDesc_add").hide();
//    $("#baseDesc_edit").hide();
//    $("#baseDesc").click(function () {
//        $("#baseDesc_edit").show();
//        $("#baseDesc_add").show();
//        $("#baseDesc_tu").hide();
//        $("#baseDesc").attr("readonly", "readonly");
//    });
//    $("#baseDesc_add").click(function () {
//        $("#baseDesc_edit").hide();
//        $("#baseDesc_add").hide();
//        $("#baseDesc_tu").show();
//        $("#baseDesc").removeAttr("readonly");
////            var ctext = CKEDITOR.instances.baseDesc_edit.getData();
//        var ctext1 = CKEDITOR.instances.baseDesc_edit1.document.getBody().getText();
//        $("#baseDesc").val(ctext1);
//    });


$(function () {
    editForm("baseDesc", "baseDesc_edit", "baseDesc_add", "baseDesc_tu");
    editForm("environmental", "environmental_edit", "environmental_add", "environmental_tu");
    editForm("social", "social_edit", "social_add", "social_tu");
    editForm("evaluationDesc", "evaluationDesc_edit", "evaluationDesc_add", "evaluationDesc_tu");
    editForm("control", "control_edit", "control_add", "control_tu");
    editForm("prevention", "prevention_edit", "prevention_add", "prevention_tu");
    editForm("response", "response_edit", "response_add", "response_tu");
    editForm("rescue", "rescue_edit", "rescue_add", "rescue_tu");
    editForm("othersDesc", "othersDesc_edit", "othersDesc_add", "othersDesc_tu");
    editForm("othersInfo", "othersInfo_edit", "othersInfo_add", "othersInfo_tu");
});

function editForm(name, name_edit, name_add, name_tu) {
    CKEDITOR.replace(name_edit + "1");
    $("#" + name_edit).hide();
    $("#" + name_add).hide();
    $("#" + name).click(function () {
        $("#" + name_edit).show();
        toEdit(name);
        $("#" + name_add).show();
        $("#" + name_tu).hide();
        // $("#" + name).attr("readonly", "readonly");
        $("#" + name).hide();
    });
    $("#" + name_tu).click(function () {
        $("#" + name_edit).show();
        $("#" + name_add).show();
        $("#" + name_tu).hide();
        // $("#" + name).attr("readonly", "readonly");
        $("#" + name).hide();
    });
}

$("#baseDesc_add").click(function () {
    $("#baseDesc_edit").hide();
    $("#baseDesc_add").hide();
    $("#baseDesc_tu").show();
    $("#baseDesc").show();
    $("#baseDesc").removeAttr("readonly");
//            var ctext = CKEDITOR.instances.baseDesc_edit.getData();
    var ctext1 = CKEDITOR.instances.baseDesc_edit1.document.getBody().getText();
    $("#baseDesc").val(ctext1);
});

$("#environmental_add").click(function () {
    $("#environmental_edit").hide();
    $("#environmental_add").hide();
    $("#environmental_tu").show();
    $("#environmental").show();
    $("#environmental").removeAttr("readonly");
//            var ctext = CKEDITOR.instances.baseDesc_edit.getData();
    var ctext1 = CKEDITOR.instances.environmental_edit1.document.getBody().getText();
    $("#environmental").val(ctext1);
});
$("#social_add").click(function () {
    $("#social_edit").hide();
    $("#social_add").hide();
    $("#social_tu").show();
    $("#social").show();
    $("#social").removeAttr("readonly");
//            var ctext = CKEDITOR.instances.baseDesc_edit.getData();
    var ctext1 = CKEDITOR.instances.social_edit1.document.getBody().getText();
    $("#social").val(ctext1);
});
$("#evaluationDesc_add").click(function () {
    $("#evaluationDesc_edit").hide();
    $("#evaluationDesc_add").hide();
    $("#evaluationDesc_tu").show();
    $("#evaluationDesc").show();
    $("#evaluationDesc").removeAttr("readonly");
//            var ctext = CKEDITOR.instances.baseDesc_edit.getData();
    var ctext1 = CKEDITOR.instances.evaluationDesc_edit1.document.getBody().getText();
    $("#evaluationDesc").val(ctext1);
});
$("#control_add").click(function () {
    $("#control_edit").hide();
    $("#control_add").hide();
    $("#control_tu").show();
    $("#control").show();
    $("#control").removeAttr("readonly");
//            var ctext = CKEDITOR.instances.baseDesc_edit.getData();
    var ctext1 = CKEDITOR.instances.control_edit1.document.getBody().getText();
    $("#control").val(ctext1);
});
$("#response_add").click(function () {
    $("#response_edit").hide();
    $("#response_add").hide();
    $("#response_tu").show();
    $("#response").show();
    $("#response").removeAttr("readonly");
//            var ctext = CKEDITOR.instances.baseDesc_edit.getData();
    var ctext1 = CKEDITOR.instances.response_edit1.document.getBody().getText();
    $("#response").val(ctext1);
});
$("#prevention_add").click(function () {
    $("#prevention_edit").hide();
    $("#prevention_add").hide();
    $("#prevention_tu").show();
    $("#prevention").show();
    $("#prevention").removeAttr("readonly");
//            var ctext = CKEDITOR.instances.baseDesc_edit.getData();
    var ctext1 = CKEDITOR.instances.prevention_edit1.document.getBody().getText();
    $("#prevention").val(ctext1);
});
$("#rescue_add").click(function () {
    $("#rescue_edit").hide();
    $("#rescue_add").hide();
    $("#rescue_tu").show();
    $("#rescue").show();
    $("#rescue").removeAttr("readonly");
//            var ctext = CKEDITOR.instances.baseDesc_edit.getData();
    var ctext1 = CKEDITOR.instances.rescue_edit1.document.getBody().getText();
    $("#rescue").val(ctext1);
});
$("#othersDesc_add").click(function () {
    $("#othersDesc_edit").hide();
    $("#othersDesc_add").hide();
    $("#othersDesc_tu").show();
    $("#othersDesc").show();
    $("#othersDesc").removeAttr("readonly");
//            var ctext = CKEDITOR.instances.baseDesc_edit.getData();
    var ctext1 = CKEDITOR.instances.othersDesc_edit1.document.getBody().getText();
    $("#othersDesc").val(ctext1);
});
$("#othersInfo_add").click(function () {
    $("#othersInfo_edit").hide();
    $("#othersInfo_add").hide();
    $("#othersInfo_tu").show();
    $("#othersInfo").show();
    $("#othersInfo").removeAttr("readonly");
//            var ctext = CKEDITOR.instances.baseDesc_edit.getData();
    var ctext1 = CKEDITOR.instances.othersInfo_edit1.document.getBody().getText();
    $("#othersInfo").val(ctext1);
});


function toEdit(name) {
    var context = $("#" + name).val();
    if (context != null && context.length > 0 && name == "baseDesc") {
        CKEDITOR.instances.baseDesc_edit1.setData(context);
        return;
    }
    if (context != null && context.length > 0 && name == "environmental") {
        CKEDITOR.instances.environmental_edit1.setData(context);
        return;
    }
    if (context != null && context.length > 0 && name == "social") {
        CKEDITOR.instances.social_edit1.setData(context);
        return;
    }
    if (context != null && context.length > 0 && name == "evaluationDesc") {
        CKEDITOR.instances.evaluationDesc_edit1.setData(context);
        return;
    }
    if (context != null && context.length > 0 && name == "control") {
        CKEDITOR.instances.control_edit1.setData(context);
        return;
    }
    if (context != null && context.length > 0 && name == "prevention") {
        CKEDITOR.instances.prevention_edit1.setData(context);
        return;
    }
    if (context != null && context.length > 0 && name == "response") {
        CKEDITOR.instances.response_edit1.setData(context);
        return;
    }
    if (context != null && context.length > 0 && name == "rescue") {
        CKEDITOR.instances.rescue_edit1.setData(context);
        return;
    }
    if (context != null && context.length > 0 && name == "othersDesc") {
        CKEDITOR.instances.othersDesc_edit1.setData(context);
        return;
    }
    if (context != null && context.length > 0 && name == "othersInfo") {
        CKEDITOR.instances.othersInfo_edit1.setData(context);
        return;
    }

}