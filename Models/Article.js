/*global $*/
function Article(){
    this.id=null;
    this.title="";
    this.body="";
}
 
Article.prototype.getArticleItem=function(){
    var _this=this;
    //console.log(this.id+"acesta este this ID");
    return $.ajax("https://jsonplaceholder.typicode.com/posts/"+this.id,{
        method:"GET",
        success:function(response){
            _this.title=response.title;
            _this.body=response.body;
        }
        
    });
}

Article.prototype.editArticleItem=function(title,body){
    //var _ethis=this;
  return  $.ajax("https://jsonplaceholder.typicode.com/posts/"+this.id,{
        method:"PUT",
        data:{
            title:title,
            body:body
        },
        success:function(response){
            console.log(response)
        }
    })
    
};

