$(function () {

    var staff = [
        { "id": "1002", "email": "dmurphy@classicmodelcars.com" },
        { "id": "1056", "email": "mpatterso@classicmodelcars.com" },
        { "id": "1076", "email": "jfirrelli@classicmodelcars.com" },
        { "id": "1088", "email": "wpatterson@classicmodelcars.com" },
        { "id": "1102", "email": "gbondur@classicmodelcars.com" },
        { "id": "1143", "email": "abow@classicmodelcars.com" },
        { "id": "1165", "email": "ljennings@classicmodelcars.com" },
        { "id": "1166", "email": "lthompson@classicmodelcars.com" },
        { "id": "1188", "email": "jfirrelli@classicmodelcars.com" },
        { "id": "1216", "email": "spatterson@classicmodelcars.com" },
        { "id": "1286", "email": "ftseng@classicmodelcars.com" },
        { "id": "1323", "email": "gvanauf@classicmodelcars.com" },
        { "id": "1337", "email": "lbondur@classicmodelcars.com" },
        { "id": "1370", "email": "ghernande@classicmodelcars.com" },
        { "id": "1401", "email": "pcastillo@classicmodelcars.com" },
        { "id": "1501", "email": "lbott@classicmodelcars.com" },
        { "id": "1504", "email": "bjones@classicmodelcars.com" },
        { "id": "1611", "email": "afixter@classicmodelcars.com" },
        { "id": "1612", "email": "pmarsh@classicmodelcars.com" },
        { "id": "1619", "email": "tking@classicmodelcars.com" },
        { "id": "1621", "email": "mnishi@classicmodelcars.com" },
        { "id": "1625", "email": "ykato@classicmodelcars.com" },
        { "id": "1702", "email": "mgerard@classicmodelcars.com" },
        { "status": 1 }
    ]

    var htmlText = "";
    for (var i = 0; i < staff.length; i++) {
        htmlText = htmlText + "<tr><td>" + data[i].id
            + "</td><td>" + data[i].email
            + "</td><td></td></tr>";
    }
    $("#tblDisplay tbody").html(htmlText);

    var link1 = crossroads.addRoute("", function () {
        $("#divDisplay").show();
        $("#divDetail").show();
        var datalist = "";
        $.ajax({
            type: "post",
            url: "http://www.skimtech.my/ClassicModels/GetStaff",
            data: datalist,
            cache: false,
            success: function (mydata) {
                var myData = JSON.parse(mydata);
                //alert(mydata);
                var lastIndex = myData.length - 1;
                var htmlText = "";
                if (myData[lastIndex].status === 1) {
                    for (var i = 0; i < lastIndex; i++) {
                        htmlText = htmlText + "<tr><td>" + myData[i].id
                            + "</td><td>" + myData[i].email
                            + "</td><td></td></tr>";
                    }
                    //alert(htmlText);
                    $("#tblDisplay tbody").html(htmlText);
                }
            },
            error: function () {
                alert("error");
            }
        });

    });

});