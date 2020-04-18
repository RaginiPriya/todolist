function addTask(task){
    // alert(task);
    if(task !== undefined && task !== ""){
        $(".taskList").append('<li class="list-group-item">'+task+'<button type="button" class="btn btn-default btn-sm close">x</button></li>');
        $("#taskTextbox").val("");
        $(".close").click(function(){
            $(this).parent().remove();
        });
        // $('input[type="checkbox"]').click(function(){
        //     if($(this).prop("checked") == true){
        //         $(this).parent().css("text-decoration","line-through");
        //     }
        //     else if($(this).prop("checked") == false){
        //         $(this).parent().css("text-decoration","none");
        //     }
        // });
        $("li").click(function(){
            if($(this).hasClass("checked")){
                $(this).removeClass("checked");
            }
            else{
                $(this).addClass("checked");
            }
            
        })
    }

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