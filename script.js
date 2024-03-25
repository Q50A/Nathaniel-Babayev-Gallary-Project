let ocean=[];
$(".add").click(function() {
 var more=$(".picture-url").val();   
 ocean.push(more);
 $(".gallery").append("<img src='"+more+"'>");
 $(".picture-url").val("");
   
});