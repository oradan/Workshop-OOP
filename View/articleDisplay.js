/*global $ ArticleList*/

$(document).ready(onHtmlLoaded);


function onHtmlLoaded(){
    var articleList=new ArticleList();
    articleList.getArticlesList().then(displayArticles);
    
    function displayArticles(){
        //console.log(articleList);
        // console.log(articleList.model.length);
        var content=document.getElementById("container");
        for(var i=0;i<articleList.model.length;i++){
           
        
        var articleItem=document.createElement("article");
        //console.log(articleList.model[i].id);
            //articleItem.id=articleList.model[i].id;
        var articleTitle=document.createElement("h1");
            articleTitle.innerHTML=articleList.model[i].id+" "+articleList.model[i].title
        var articleBody=document.createElement("p");
            articleBody.innerHTML=articleList.model[i].body;
        var readMore=document.createElement("a");
            readMore.innerHTML="Read more";
            readMore.setAttribute("href","article.html?articleId="+articleList.model[i].id);
            readMore.setAttribute("target","_blank");
        var edit=document.createElement("button");
            edit.id=articleList.model[i].id;
            edit.innerHTML="Edit article";
            edit.addEventListener("click",function(e){
                //Alexandra oare de ce evenimentul de click nu imi citeste --articleList.model[i].id--?
             window.open("https://curs-web-radanolga.c9users.io/workschop-oop/Pages/editarticle.html?articleId="+e.target.id);
                
            });
        var artDelete=document.createElement("button");
            artDelete.id=articleList.model[i].id;
            artDelete.innerHTML="Delete article";
            artDelete.addEventListener("click",function(e){
                articleList.deleteCurrentArticle(e.target.id).then(function(){
                    e.path[1].remove();
                });
                console.log(e);
                console.log(e.target.id);
            })
    
            content.appendChild(articleItem);
            articleItem.appendChild(articleTitle);
            articleItem.appendChild(articleBody);
            articleItem.appendChild(readMore);
            articleItem.appendChild(edit);
            articleItem.appendChild(artDelete);
        }  
    }
      

    
  
       
    
    // function pagination(currentPage){
    //     var pag=document.getElementById("pagination")
        
    //     var articlesArray=$("article");
    //     console.log(articlesArray);
    //     //console.log("test")
    //     var artclesOnPage=10;
    //     var totalArticles=articlesArray.length;
    //     var totalPages=totalArticles/artclesOnPage;
    //     //console.log(totalPages);
    //     //var currentPage=0; 
    //     //console.log(totalPages);
    //     //articlesArray.hide();
        
    //      for(var i=0;i<=totalPages;i++){
        
    //      var currentPage=i;
    //      articlesArray.slice(currentPage*artclesOnPage,(artclesOnPage)*(currentPage+1)).show()
            
    //         var pageNumber=document.createElement("button");
         
    //         pageNumber.className="pgnb";
    //         pageNumber.innerHTML=i;
    //         pag.appendChild(pageNumber);
           


    //     }
    // $('.pgnb').click(function(e){
    //     console.log(e)
    //     //pagination(e.target.innerHTML);
    // });
    // }
//.then(pagination); 

}

    
    