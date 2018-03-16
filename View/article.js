// console.log(window.location.search.substring(1));
// console.log(window.location);
// console.log(window);
// console.log(window.location.search.substring(0));
/*global $ Article ComentsList*/
$(document).ready(onHtmlLoaded) 

function onHtmlLoaded(){
function getArticleIdFromUrl(){
    var url=window.location.search.substring(1).split("&");
    
    //console.log(url)
    for (var i=0;i<url.length;i++){
        //console.log(url[i].split("=")[0]);
        if(url[i].split("=")[0]==="articleId"){
            return url[i].split("=")[1]
        }
        else{
            return 1
        }
    }
}
var articleItem=new Article();
 articleItem.id=getArticleIdFromUrl();
 articleItem.getArticleItem().then(displayCurrentArticle).then(sowComents);
 
 function displayCurrentArticle(){
        var contentEl = document.getElementById("content");
        
        var articleEl = document.createElement("article");
        var articleTitleEl = document.createElement("h3");
        var articleBodyEl = document.createElement("p");
        articleTitleEl.innerHTML =articleItem.id+" "+articleItem.title;
        articleBodyEl.innerHTML = articleItem.body;
        
     
        articleEl.appendChild(articleTitleEl);
        articleEl.appendChild(articleBodyEl);
        contentEl.appendChild(articleEl);
     
 }
 function sowComents(){
 var coments=new ComentsList();
 var artId=getArticleIdFromUrl();
 coments.getComents(artId).then(displayComents);
 function displayComents(){
     
     for (var i=0;i<coments.comentModel.length;i++){
       var currentComent=coments.comentModel[i]; 
       var contentEl = document.getElementById("content");
       var comentElement=document.createElement("div");
       var comentName=document.createElement("h4");
           comentName.innerHTML=currentComent.name;
       var comentEmail=document.createElement("p");
           comentEmail.innerHTML=currentComent.email;
       var comentBody=document.createElement("p");
           comentBody.innerHTML=currentComent.body;
       contentEl.appendChild(comentElement);
       comentElement.appendChild(comentName);
       comentElement.appendChild(comentEmail);
       comentElement.appendChild(comentBody);
     }
 }
 }
 
}