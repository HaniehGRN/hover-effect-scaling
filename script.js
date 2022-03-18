$(document).ready(function() {

    $("section").hover(function() {
        $("section").removeClass("highlighted");
        $(this).addClass("highlighted");
    },
    function() {
        $(this).removeClass("highlighted");
        setTimeout(() => {
            if(!$("section.highlighted").length) {
                $("section.featured").addClass("highlighted");
            }
        }, 500);
    });

});