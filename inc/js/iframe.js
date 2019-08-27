function donate() {
    var x = document.getElementById("donate");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
var iCnt = 0;
$(document).ready(function() {
    $(function() {
        $('#fakebrowser').draggable()
    });
    document.getElementById("donate").style.display = "none";
});
