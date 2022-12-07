$(document).ready(function() {
    $("h2").addClass("underline")("text-decoration", "underline");
    $("ul").addClass("border")("border", "solid 1px #ccc");

    //Challenge add odd and even colouring
    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");

    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');


    $("p").click(function(){
        $("p").css("color", "red")
        }) 
    
        $("h2").hover(function(){
            $("h2").css("background", "lightblue")
        })
        $(".card-panel").mouseenter(function() {
            $("body").css("background-color", "black")
        })
        $(".card-panel").mouseleave(function() {
            $("body").css("background-color", "#e1e2e2")
        })
        $("button").mouseenter(function() {
            $("button").removeClass("make-red").addClass("make-border")
        });
        $("button").mouseleave(function() {
            $("button").removeClass("make-border").addClass("make-red")
        });

        $(document).ready(function() {
            $("p").click(function() {
                 $(this).text("Changed only the text for this paragraph")
             })
             $(".card").mouseenter(function() {
                 $(this).fadeTo(2000, 0.2).fadeTo(2000, 1)
             })
         
         });



});



