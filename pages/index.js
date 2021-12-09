import { linebot } from "./linebot.js";


/** @type {string} */
const root = window.location.protocol + "//" + window.location.host;

/** @type {HTMLDivElement} */
const content = document.getElementById("content");

function redirect(){
    let rootRe = new RegExp(root);
    let targetPath = window.location.href.replace(rootRe, '').replace("/#!", '').replace('/', '');
    if (targetPath == ""){
      content.innerHTML = "<h2>Welcome to Autumn Daze Template</h2><blockquote> This template has been tested in Mozilla Firefox and IE7. The page validates as XHTML 1.0 Transitional using valid CSS. It will work in browser widths of 800x600, 1024x768 &amp; 1280x1064.</blockquote>";
    }else if(targetPath == "linebot"){
        content.innerHTML = linebot;
   
}

window.addEventListener('DOMContentLoaded', (e) => {
    redirect();
});

window.addEventListener('popstate', (e) => {
    redirect();
});
