function Menu() {
    this.pageHeader = document.getElementsByClassName("page-header");
    this.mainContent = document.getElementsByClassName("main-content");
}
Menu.prototype.removeMenu = function () {
    var pageHeaderNodes = this.pageHeader[0].childNodes;
    for (var i = 0; i < pageHeaderNodes.length; i++) {
        if (pageHeaderNodes[i].tagName == "A") {
            pageHeaderNodes[i].parentNode.removeChild(pageHeaderNodes[i]);
        }
    }
}
Menu.prototype.setMenu = function () {
    this.removeMenu();
    var P = this.mainContent[0].getElementsByTagName("p")[0].childNodes;
    for (var i = 0, j = 0; i < P.length && j < 3; i++) {
        if (P[i].tagName == "A") {
            this.addMenu(P[i].innerHTML, P[i].href)
            P[i].parentNode.removeChild(P[i]);
        }
    }
}
Menu.prototype.addMenu = function (innerHTML, href) {
    var a = document.createElement("a");
    a.innerHTML = innerHTML;
    a.href = href;
    a.className = "btn";
    a.style.position = "relative";
    a.style.zIndex = "1";
    if (a.href.indexOf("v-ref.com") == -1) {
        a.target = "_blank";
    }
    if (a.href.indexOf("/menu/") != -1) {
        var list = this.getSubmenuList(a.href);
        this.addSubmenu(a, list);
    }
    this.pageHeader[0].appendChild(a);
}
Menu.prototype.getSubmenuList = function (url) {
    var web = this.netGet(url);
    var arr = web.match(/<li><a href="([^"]*)">([^<]*)<\/a><\/li>/ig);
    var list = [];
    for (var i = 0; i < arr.length; i++) {
        var str = /<li><a href="([^"]*)">([^<]*)<\/a><\/li>/ig.exec(arr[i]);
        list.push({ href: str[1], innerHTML: str[2] });
    }
    return list;
}
Menu.prototype.netGet = function (url) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}
Menu.prototype.addSubmenu = function (a, list) {
    var div = document.createElement("div");
    for (var i = 0; i < list.length; i++) {
        this.addSubmenuMenu(div, list[i].innerHTML, list[i].href);
    }
    var bgDiv = document.createElement("div");
    this.setSubmenuDivStyle(a, div)
    this.setBgStyle(bgDiv);
    this.setCilck(a, bgDiv, this.pageHeader[0], div);
    this.mainContent[0].appendChild(bgDiv);
    a.appendChild(div);
}
Menu.prototype.addSubmenuMenu = function (div, innerHTML, href) {
    var a = document.createElement("a");
    a.innerHTML = innerHTML;
    a.href = href;
    this.setSubmenuStyle(a);
    div.appendChild(a);
}
Menu.prototype.setSubmenuStyle = function (a) {
    a.className = "btn";
    a.style.margin = "0";
    a.style.paddingTop = "0";
    a.style.display = "block";
    a.style.width = "100%";
    a.style.borderRadius = "0px";
    a.style.borderTop = "0";
}
Menu.prototype.setSubmenuDivStyle = function (a, div) {
    div.style.position = "absolute";
    div.style.left = "-1px";
    div.style.right = "-1px";
    div.style.top = "100%";
    div.style.zIndex = "1";
}
Menu.prototype.setBgStyle = function (bgDiv) {
    bgDiv.style.position = "fixed";
    bgDiv.style.width = "100%";
    bgDiv.style.height = "0";
    bgDiv.style.left = "0";
    bgDiv.style.top = "0";
    bgDiv.style.backgroundImage = "linear-gradient(120deg, #155799, #159957)";
    bgDiv.style.backgroundRepeat = "no-repeat";
    bgDiv.style.backgroundAttachment = "fixed";
    bgDiv.style.marginBottom = "1em";
    bgDiv.style.opacity = "0.8";
    bgDiv.style.transition = "all 1s";
}
Menu.prototype.setCilck = function (a, bgDiv, bg, div) {
    div.style.display = "none";
    a.onmouseover = a.onclick = function () {
        bg.style.backgroundAttachment = "fixed";
        div.style.display = "block";
        bgDiv.style.height = "100%";
    }
    bgDiv.onmouseover = bgDiv.onclick = function () {
        setTimeout(function () {
            div.style.display = "none";
            bgDiv.style.height = "0";
        }, 0);
        bg.style.backgroundAttachment = "scroll";
    }
    a.href = "javascript:";
}

var m = new Menu();
m.setMenu();

/* 页面内生成目录(暂未针对函数方法优化、暂未处理目录所在页面布局) */
var doc=document.getElementsByClassName("main-content")[0];
var raw=doc.innerHTML;
var arr=doc.innerHTML.split(/(?:<h1(?:(?!<h2)[\s\S])*)?<h2[^>]*>|<\/h2>|<script src="\/script"><\/script>/);
var readID=0;
function read(num){
 if(num==0)num=1;
 var str='<table><tr><th>目录</th></tr>';
 for(var i=1;i<arr.length-1;i+=2){
  str+='<tr><td onclick="read('+i+')">'+arr[i]+'</td></tr>';
 }
 str+='<tr><td onclick="read(-1)">显示原始完整页面</td></tr></table>'
 if(num!=-1){
  doc.innerHTML='<h2>'+arr[num]+'</h2>'+arr[num+1]+str;
 }
 else{
  doc.innerHTML=raw+str;
 }
 scrollTo(0,0);
 history.pushState({},arr[num],'#'+arr[num]);
 readID=num;
}
function getReadID(name){
 name=decodeURI(name);
 for(var i=1;i<arr.length-1;i+=2){
  if(arr[i]==name)return i;
 }
 return 0;
}
read(getReadID(window.location.href.split('#')[1]));
function main(){
 var id=getReadID(window.location.href.split('#')[1]);
 if(id!=readID&&id!=0){
  read(id);
 }
 setTimeout(main,500);
}
main();
