import { linebot } from "./linebot.js";


/** @type {string} */
const root = window.location.protocol + "//" + window.location.host;

/** @type {HTMLDivElement} */
const content = document.getElementById("content");

function redirect(){
    let rootRe = new RegExp(root);
    let targetPath = window.location.href.replace(rootRe, '').replace("/#!", '').replace('/', '');
    if (targetPath == ""){
        content.innerHTML = "<h2>Welcome to <span style="font-weight:bold; color:#B07E13;">Autumn Daze</span> Template</h2>
    <blockquote> This template has been tested in Mozilla Firefox and IE7. The page validates as XHTML 1.0 Transitional using valid CSS. It will work in browser widths of 800x600, 1024x768 &amp; 1280x1064. <br />
      For more FREE CSS templates visit <a href="http://www.mitchinson.net">my website</a>.</blockquote>
    <div style="float:right;width:125px;height:6em;margin:5px 15px 15px 10px;font-family:georgia,arial,helvetica;font-size:1.2em;font-weight:bold; line-height:24px; color:#cc9933;text-align:right;"> <span style="color:#663300;">"... autumn is a second </span> spring when every <span style="color: #C86000;"> leaf is a flower ... "</span> </div>
    <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. </p>
    <p><img class="myborder" src="images/leaf.jpg" alt="foto here"/>Autumn is a second spring when every leaf is a flower. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.  </p>
    <p><img class="myborder" src="images/leaf.jpg" alt="foto here"/>Autumn is a second spring when every leaf is a flower. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.  </p>
  </div>
  <div id="footer"> <a href="#">homepage</a> | <a href="mailto:denise@mitchinson.net">contact</a> | <a href="http://validator.w3.org/check?uri=referer">html</a> | <a href="http://jigsaw.w3.org/css-validator">css</a> | &copy; 2007 Anyone | Design by <a href="http://www.mitchinson.net"> www.mitchinson.net</a><br/>
    This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0 License</a> </div>
</div>
</body>
</html>
";
    }else if(targetPath == "linebot"){
        content.innerHTML = linebot;
   
}

window.addEventListener('DOMContentLoaded', (e) => {
    redirect();
});

window.addEventListener('popstate', (e) => {
    redirect();
});
