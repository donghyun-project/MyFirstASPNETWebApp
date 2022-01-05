//$("#btnsend").addeventlistener("click", function () {
//    alert("from: " + $("#txtfrom").value +
//        ", subject: " + $("#txtsubject").value +
//        ", message: " + $("#txtmessage").value);
//})

$("#btnSend").click(function () {
    alert("From: " + $("#txtFrom").val() +
        ", Subject: " + $("#txtSubject").val() +
        ", Message: " + $("#txtMessage").val());

    $("#picGanderson").fadeToggle();
})