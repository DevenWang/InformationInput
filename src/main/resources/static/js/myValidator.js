$(function () {
    $('#totalForm').bootstrapValidator({
        message: 'This value is not valid',
        // live: 'enabled ',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {

            //
            title: {
                message: 'The title is not valid',
                validators: {
                    notEmpty: {
                        message: '标题不能为空!'
                    }
                }
            },
            baseDesc: {
                message: 'The title is not valid',
                validators: {
                    notEmpty: {
                        message: '内容描述不能为空!'
                    }
                }
            },
            district: {
                message: 'The district is not valid',
                validators: {
                    notEmpty: {
                        message: '地区不能为空!'
                    }
                }
            },
            baseLevel: {
                message: 'The baseLevel is not valid',
                validators: {
                    notEmpty: {
                        message: '危害程度不能为空!'
                    }
                }
            },
            start: {
                message: 'The start is not valid',
                validators: {
                    notEmpty: {
                        message: '开始时间不能为空!'
                    },
                    callback: {
                        message: '开始日期不能大于结束日期',
                        callback: function (value, validator, $field) {

                            var end = $("#end").val();
                            if (end.length <= 0 || end == null) {
                                return true;
                            } else {
                                return value <= end;
                            }
                        }
                    }
                }
            },
            end: {
                message: 'The end is not valid',
                validators: {
                    notEmpty: {
                        message: '结束时间不能为空!'
                    },
                    callback: {
                        message: '结束日期不能小于开始日期',
                        callback: function (value, validator, $field) {

                            var start = $("#start").val();
                            if (start.length <= 0 || start == null) {
                                return true;
                            } else {
                                return value >= start;
                            }

                        }
                    }
                }
            },
            type: {
                message: 'The type is not valid',
                validators: {
                    notEmpty: {
                        message: '事件类型不能为空!'
                    },
                    stringLength: {
                        min: 1,
                        max: 20,
                        message: 'The username must be more than 6 and less than 20 characters long'
                    }
                }
            },

            //
            injured: {
                message: 'The injured is not valid',
                validators: {
                    notEmpty: {
                        message: '受伤人数不能为空!'
                    }
                }
            },
            death: {
                message: 'The death is not valid',
                validators: {
                    notEmpty: {
                        message: '死亡人数不能为空!'
                    }
                }
            },
            loss: {
                message: 'The loss is not valid',
                validators: {
                    notEmpty: {
                        message: '经济损失不能为空!'
                    }
                }
            },
            environmental: {
                message: 'The environmental is not valid',
                validators: {
                    notEmpty: {
                        message: '环境影响不能为空!'
                    }
                }
            },
            social: {
                message: 'The social is not valid',
                validators: {
                    notEmpty: {
                        message: '社会影响不能为空!'
                    }
                }
            },
            disasterType: {
                message: 'The disasterType is not valid',
                validators: {
                    notEmpty: {
                        message: '灾害分类不能为空!'
                    },
                    stringLength: {
                        min: 1,
                        max: 20,
                        message: 'The username must be more than 6 and less than 20 characters long'
                    }
                }
            },

            //
            expert: {
                message: 'The expert is not valid',
                validators: {
                    notEmpty: {
                        message: '专家号不能为空!'
                    },
                    stringLength: {
                        min: 1,
                        max: 20,
                        message: 'The username must be more than 6 and less than 20 characters long'
                    }
                }
            },
            rank: {
                message: 'The rank is not valid',
                validators: {
                    notEmpty: {
                        message: '评估等级不能为空!'
                    }
                }
            },
            evaluationDesc: {
                message: 'The evaluationDesc is not valid',
                validators: {
                    notEmpty: {
                        message: '评估描述不能为空!'
                    }
                }
            },
            control: {
                message: 'The control is not valid',
                validators: {
                    notEmpty: {
                        message: '社会控制不能为空!'
                    }
                }
            },
            response: {
                message: 'The response is not valid',
                validators: {
                    notEmpty: {
                        message: '行为反应不能为空!'
                    }
                }
            },
            prevention: {
                message: 'The prevention is not valid',
                validators: {
                    notEmpty: {
                        message: '工程预防不能为空!'
                    }
                }
            },
            rescue: {
                message: 'The rescue is not valid',
                validators: {
                    notEmpty: {
                        message: '灾害救援不能为空!'
                    }
                }
            }
        }
    });
});