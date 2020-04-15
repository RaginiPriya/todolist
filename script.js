function addTask(task){
    // alert(task);
    $(".taskList").append('<li class="list-group-item">'+task+'<button type="button" class="btn btn-primary btn-sm close">X</button></li>');
    $("#taskTextbox").val("");
    $(".close").click(function(){
        $(this).parent().remove();
    });
    $("li").click(function(){
        
    });
}
// $(document).ready(function(){
//     $(".closeButton").click(function(){
//         // $(this).parent().remove();
//         alert("close");
//     });
// });

$(document).ready(function(){
    $("#taskTextbox").keypress(function(e){
        if ( e.keyCode == 13 ) { 
            addTask($(this).val());
        }
    });
});