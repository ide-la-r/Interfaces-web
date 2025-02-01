// $(document).ready(function(){
//     $("#boton1").click(function(evento){
//         $("#campo").val($(this).text());
//     });
//     $("#boton2").click(function(evento){
//         $("#campo").val($(this).text());
//     });
//     $("#boton3").click(function(evento){
//         $("#campo").val($(this).text());
//     });
// });

$("button").on("click", function(){
    let text = $(this).text();
    $("input").val(text);
});