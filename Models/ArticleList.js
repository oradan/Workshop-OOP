/*global $ Article */

function ArticleList(){
    this.model=[];
}
ArticleList.prototype.getArticlesList=function(){
    var that=this;
    return $.ajax("https://jsonplaceholder.typicode.com/posts",{
        method:"GET",
        success:function(response){
            console.log(response)
            for(var i=0;i<response.length;i++){
                var article= new Article();
                article.id=response[i].id;
                article.title=response[i].title;
                article.body=response[i].body;
                that.model.push(article);
            }
            console.log(that.model);
        }
        
    })
    
};

ArticleList.prototype.deleteCurrentArticle=function(artId){
    return $.ajax("https://jsonplaceholder.typicode.com/posts/"+artId,{
        method:"DELETE",
        success:function(response){
            console.log(response);
        }
    });
    
};

// var a=new ArticleList();
// a.getArticlesList();