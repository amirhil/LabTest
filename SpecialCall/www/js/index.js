function onCall() {
    var num = button.value;

    window.plugins.CallNumber.callNumber(
        function(result) {// success phone called do nothing
            console.log("Success:"+result);
        },
        function(result) { //failed phone called, show some message
            console.log("Error:"+result);
        },
        "01128331840",
        true
    );
};
