// Set cursor location in URL bar.
elem = document.getElementById('urltext');
setEndOfContenteditable(elem);
// Donate button
async function imise() {
    var x = document.getElementById("imise");
    var body = document.getElementById("body");
    if (x.style.display === "none") {
        body.style.cursor = "progress";
        await sleep(1000);
        body.style.cursor = "default";
        x.style.display = "block";
    } else {
        body.style.cursor = "progress";
        await sleep(200);
        body.style.cursor = "default";
        x.style.display = "none";
    }
}
// Draggable
$(document).ready(function() {
    $(function() { $('#fakebrowser').draggable({ containment: "window" }) });
    document.getElementById("imise").style.display = "none";
});
// Stop breakline in the URL Bar
var el = document.getElementById('urltext');
el.onkeydown = function (e) {
    if (!e) {
        e = window.event;
    }
    var keyCode = e.which || e.keyCode,
        target = e.target || e.srcElement;

    if (keyCode === 13 && !e.shiftKey) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
        target.innerHTML = '<font color="black">https://paypal.com</font><font color="#96999C">/login/auth</font>';
    }
}
// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function setEndOfContenteditable(contentEditableElement)
{
    var range,selection;
    if(document.createRange)//Firefox, Chrome, Opera, Safari, IE 9+
    {
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    else if(document.selection)//IE 8 and lower
    { 
        range = document.body.createTextRange();//Create a range (a range is a like the selection but invisible)
        range.moveToElementText(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        range.select();//Select the range (make it the visible selection
    }
}
// WINDOW ICONS (Minimise, Maximise, Close)
function mouseOverClose() {
  document.getElementById("close").style.backgroundColor = "#E71020";
}

function mouseOutClose() {
  document.getElementById("close").style.backgroundColor = "#ffffff";
}
