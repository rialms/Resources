 document.onkeydown = function(e) {
            if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
              
            }
            return false;
    };
	
function clickIE()
{if (document.all) {(message);return false;}}function clickNS(e)
{if (document.layers||(document.getElementById&&!document.all))
{if (e.which==2||e.which==3) {(message);
return false;}}}
if (document.layers) {document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
document.oncontextmenu=new Function("return false")
