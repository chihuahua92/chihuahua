import { linebot } from "./linebot.js";
import { todolist } from "./todolist.js";
import { popzaki } from "./popzaki.js";




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
    }else if(targetPath == "todolist"){
        main.innerHTML = todolist;
    }else if(targetPath == "popzaki"){
        main.innerHTML = popzaki;
    }else if(targetPath == "filter"){
        main.innerHTML = filter;
    }
}

window.addEventListener('DOMContentLoaded', (e) => {
    redirect();
});

window.addEventListener('popstate', (e) => {
    redirect();
});
