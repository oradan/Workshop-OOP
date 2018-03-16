/*global $ Article*/

$(document).ready(onHtmlLoaded);

function onHtmlLoaded(){
    // console.log(window.location);
    // console.log(window.location.search);
    // console.log(window.location.search.substr(0));
     //console.log(window.location.search.substr(1));
    //console.log(window.location.search.substr(1).split("&"));
    // var url=window.location.search.substr(1).split("&");
    // console.log(url.length);
    // console.log(window.location.search.substr(1).split("&")[0]);
     //console.log(window.location.search.substr(1).split("&")[0].split("="));
    // console.log(window.location.search.substr(1).split("&")[0].split("=")[1]);
    
    function getArticleIdFromUrl(){
        var url=window.location.search.substr(1).split("&");
        for(var i=0;i<url.length;i++){
            if (url[i].split("=")[0]==="articleId"){
                return url[i].split("=")[1];
            }
         }
    }
   var getArticleItemToEdit=new Article();
   getArticleItemToEdit.id=getArticleIdFromUrl();
   getArticleItemToEdit.getArticleItem().then(displayArticleToEdit);
   console.log(getArticleItemToEdit);
   function displayArticleToEdit(){
       var editeTitle=document.getElementById("titleId");
       editeTitle.value=getArticleItemToEdit.id+" "+getArticleItemToEdit.title;
       var editBody=document.getElementById("bodyId");
       editBody.value=getArticleItemToEdit.body;
       
   }
   var editButton=document.getElementById("editbtn");
   editButton.addEventListener("click",function(event){
         var title=document.getElementById("titleId").value;
         var body=document.getElementById("bodyId").value;
         getArticleItemToEdit.editArticleItem(title,body) 
   });
}