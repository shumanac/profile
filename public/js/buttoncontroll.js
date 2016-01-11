$(document).ready(function () {


    var smileval1 = {
        "smilevalue": "1"
    };
    var smileval2 = {
        "smilevalue": "2"
    };
    var smileval3 = {
        "smilevalue": "3"
    };
    var smileval4 = {
        "smilevalue": "4"
    };
    var smileval5 = {
        "smilevalue": "5"
    };



    $("#smile1").mouseup(function () {

        $.ajax({
            type: "POST",
            url: "/savedata",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(smileval1),
            success: function (datas) {


                setTimeout(function () {
                    $('#myModal').modal('hide');
                }, 2000);
            }

        });

    });

    $("#smile2").mouseup(function () {
        $.ajax({
            type: "POST",
            url: "/savedata",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(smileval2),
            success: function (datas) {
                setTimeout(function () {
                    $('#myModal').modal('hide');
                }, 2000);

            }

        });

    });
    $("#smile3").mouseup(function () {
        $.ajax({
            type: "POST",
            url: "/savedata",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(smileval3),
            success: function (datas) {

                setTimeout(function () {
                    $('#myModal').modal('hide');
                }, 2000);
            }

        });

    });
    $("#smile4").mouseup(function () {
        $.ajax({
            type: "POST",
            url: "/savedata",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(smileval4),
            success: function (datas) {

                setTimeout(function () {
                    $('#myModal').modal('hide');
                }, 2000);
            }

        });

    });
    $("#smile5").mouseup(function () {

        $.ajax({
            type: "POST",
            url: "/savedata",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(smileval5),
            success: function (datas) {

                setTimeout(function () {
                    $('#myModal').modal('hide');
                }, 2000);
            }

        });
    });



});