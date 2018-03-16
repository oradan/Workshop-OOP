
/*global $ Coment*/
function ComentsList(){
    this.comentModel=[];
}

ComentsList.prototype.getComents=function(artId){
    var _that=this;
 return   $.ajax("https://jsonplaceholder.typicode.com/posts/"+artId+"/comments",{
        method:"GET",
        success:function(response){
            
        for(var i=0;i<response.length;i++){
            var comentItem=new Coment();
             comentItem.id=response[i].id;
             comentItem.name=response[i].name;
             comentItem.email=response[i].email;
             comentItem.body=response[i].body;
             _that.comentModel.push(comentItem);
        }
        }
    })
}
// var a = new ComentsList();
// a.getComents(1);