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
    div.appendChild(bgDiv);
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
    a.style.position = "relative";
    div.style.position = "absolute";
    div.style.left = "-1px";
    div.style.right = "-1px";
    div.style.top = "100%";
    div.style.zIndex = "1";
}
Menu.prototype.setBgStyle = function (bgDiv) {
    bgDiv.style.position = "fixed";
    bgDiv.style.width = "100%";
    bgDiv.style.height = "100%";
    bgDiv.style.left = "0";
    bgDiv.style.top = "0";
    bgDiv.style.zIndex = "-1";
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
        bgDiv.style.width = "100%";
    }
    div.onmouseover = bgDiv.onclick = function () {
        setTimeout(function () {
            div.style.display = "none";
            bgDiv.style.width = "0";
        }, 0);
        bg.style.backgroundAttachment = "scroll";
    }
    a.href = "javascript:";
}

var m = new Menu();
m.setMenu();
