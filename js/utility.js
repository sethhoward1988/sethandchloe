/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 *
 */

function setCookie(c_name,value,exdays) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null || exdays == undefined) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name) {
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++) {
		x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
		y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
		x=x.replace(/^\s+|\s+$/g,"");
		if (x==c_name)
		{
			return unescape(y);
		}
	}
}

function clearCookie(c_name) {
    setCookie(c_name, '', -1);
}

function confirm(string){
    
}

function uuid(){
    return "string";
}

function getHeight(){
    var winW = 630, winH = 460;
    if (document.body && document.body.offsetWidth) {
        winH = document.body.offsetHeight;
    }
    if (document.compatMode=='CSS1Compat' &&
            document.documentElement &&
            document.documentElement.offsetWidth ) {
        winH = document.documentElement.offsetHeight;
    }
    if (window.innerWidth && window.innerHeight) {
        winH = window.innerHeight;
    }
    return winH;
}

function getWidth(){
    if (document.body && document.body.offsetWidth) {
        winW = document.body.offsetWidth;
    }
    if (document.compatMode=='CSS1Compat' &&
            document.documentElement &&
            document.documentElement.offsetWidth ) {
        winW = document.documentElement.offsetWidth;
    }
    if (window.innerWidth && window.innerHeight) {
        winW = window.innerWidth;
    }
    return winW;
}

$(function(){
    

});
