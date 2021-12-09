import { linebot } from "./linebot.js";


/** @type {string} */
const root = window.location.protocol + "//" + window.location.host;

/** @type {HTMLDivElement} */
const main = document.getElementById("main");

function redirect(){
    let rootRe = new RegExp(root);
    let targetPath = window.location.href.replace(rootRe, '').replace("/#!", '').replace('/', '');
    if (targetPath == ""){
        main.innerHTML = "<p>homepage</p>";
    }else if(targetPath == "linebot"){
        main.innerHTML = linebot;
   
}

window.addEventListener('DOMContentLoaded', (e) => {
    redirect();
});

window.addEventListener('popstate', (e) => {
    redirect();
});
