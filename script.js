function addTask(task){
    // alert(task);
    if(task !== undefined && task !== ""){
        var count = $(".taskList li").length+1;

        $(".taskList").prepend('<li class="list-group-item"><div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input" id="'+count+'" name="'+count+'" onclick="trigger('+count+')"><label class="custom-control-label" for="'+count+'">'+task+'</label><button type="button" class="btn btn-default btn-sm close">x</button></div></li>');
        $("#taskTextbox").val("");
        $(".close").click(function(){
            // $(this).parent().remove();
            $(this).closest('.list-group-item').remove();
        });

        // $("li").click(function(){
        //     if($(this).hasClass("checked")){
        //         $(this).removeClass("checked");
        //     }
        //     else{
        //         $(this).addClass("checked");
        //     }
        // })
    }

}

function trigger(id){
    var checkbox = $("#"+id);
    if(checkbox.prop("checked") == true){
        checkbox.closest('li').addClass("checked");
        checkbox.closest('li').appendTo($(".taskList"));
    }
    else if(checkbox.prop("checked") == false){
        checkbox.closest('li').removeClass("checked");
    }
}

$(document).ready(function(){
    $("#taskTextbox").keypress(function(e){
        if ( e.keyCode == 13 ) { 
            addTask($(this).val());
        }
    });
});