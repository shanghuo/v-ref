function Menu() {
    this.pageHeader = document.getElementsByClassName("page-header");
    this.mainContent = document.getElementsByClassName("main-content");
    this.menu = [];
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
    document.body.appendChild(bgDiv);
    a.appendChild(div);
}
Menu.prototype.addSubmenuMenu = function (div, innerHTML, href) {
    var a = document.createElement("a");
    a.innerHTML = innerHTML;
    a.href = href;
    this.menu.push({innerHTML: innerHTML, href: href});
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

function List() {
    this.doc = document.getElementsByClassName("main-content")[0];
    this.raw = this.doc.innerHTML;
    this.arr = this.doc.innerHTML.split(/(?:<h1(?:(?!<h2)[\s\S])*)?<h2[^>]*>|<\/h2>|<script[^>]*>\s*<\/script>/);
    this.readID = 0;
    this.section = document.createElement("section");
    this.width = -1;
}
List.prototype.read = function (num) {
    if (num == 0) num = 1;
    this.readID = num;
    if (num != -1 && this.arr.length > 2) {
        this.doc.innerHTML = '<h2>' + this.arr[num] + '</h2>' + this.arr[num + 1];
        history.pushState({}, '', '#' + this.arr[num]);
    }
    else {
        this.doc.innerHTML = this.raw;
        history.pushState({}, '', '#');
    }
    scrollTo(0, 0);
}
List.prototype.addList = function (menu) {
    var str = '<table><tr><th>目录</th></tr>';
    for (var i = 1; i < this.arr.length - 1; i += 2) {
        str += '<tr><td onclick="l.read(' + i + ')">' + this.arr[i] + '</td></tr>';
    }
    str += '<tr><td onclick="l.read(-1)">显示原始页面</td></tr></table>';
    if (menu){
        str += '<table style="float:right;"><tr><th>手册目录</th></tr>';
        for (var i = 1; i < menu.length; i ++) {
            str += '<tr><td onclick=\'window.location.href="'+menu[i].href+'";\'>'+menu[i].innerHTML+'</td></tr>';
        }
        str += '</table>';
    }
    this.section.innerHTML = str;
    this.section.className = 'main-content';
    this.setList();
}
List.prototype.setList = function () {
    if (document.body.clientWidth > 1200) {
        document.body.insertBefore(this.section, this.doc);
        this.section.style.float = 'left';
        this.section.style.padding = '1rem';
    }
    else {
        document.body.appendChild(this.section);
        this.section.style.float = 'none';
        this.section.style.padding = '2rem 6rem';
    }
    this.width = document.body.clientWidth;
}
List.prototype.getReadID = function (name) {
    name = decodeURI(name);
    for (var i = 1; i < this.arr.length - 1; i += 2) {
        if (this.arr[i] == name) return i;
    }
    return 0;
}
List.prototype.main = function () {
    var id = this.getReadID(window.location.href.split('#')[1]);
    if (id != this.readID && id != 0 || this.readID == 0) {
        this.read(id);
    }
    if (this.width != document.body.clientWidth) {
        document.body.removeChild(this.section);
        this.setList();
    }
}

var l, m;
setTimeout(function () {
    m = new Menu();
    m.setMenu();
    l = new List();
    l.addList(m.menu);
    main();
    function main() {
        l.main();
        setTimeout(main, 500);
    }
}, 0);
