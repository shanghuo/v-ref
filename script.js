/* 没错，就是这么直接的修改页面元素，实现页面效果 */
var pageHeader=document.getElementsByClassName("page-header");
var pageHeaderNodes=pageHeader[0].childNodes;
for(var i=0;i<pageHeaderNodes.length;i++){
 if(pageHeaderNodes[i].tagName=="A"){
  pageHeaderNodes[i].parentNode.removeChild(pageHeaderNodes[i]);
 }
}
var mainContent=document.getElementsByClassName("main-content");
var mainContentNodesP=mainContent[0].getElementsByTagName("p")[0].childNodes;
for(var i=0,j=0;i<mainContentNodesP.length&&j<3;i++){
 if(mainContentNodesP[i].tagName=="A"){
  if(mainContentNodesP[i].href.indexOf("v-ref.com")==-1){
   pageHeader[0].innerHTML+='<a href="'+mainContentNodesP[i].href+'" target="_blank" class="btn">'+mainContentNodesP[i].innerHTML+'</a>';
  }
  else{
   pageHeader[0].innerHTML+='<a href="'+mainContentNodesP[i].href+'" class="btn">'+mainContentNodesP[i].innerHTML+'</a>';
  }
  mainContentNodesP[i].parentNode.removeChild(mainContentNodesP[i]);
 }
}
