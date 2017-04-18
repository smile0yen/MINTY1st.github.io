$(document).ready(function () {
    var open = false;
    $('.circle-bg-t').on('click', function () {
        if (open === false) {
            $(this).animate({
                height: '+=10px',
                width: '+=10px'
            }, 300);

            $('.outer-icons-t').animate({
                opacity: 1
            }, 1000);
            open = true;


        } else {
            $(this).animate({
                height: '-=10px',
                width: '-=10px'
            }, 200);

            $('.outer-icons-t').animate({
                opacity: 0
            }, 300);



            open = false;
        }

    });
});
$(document).ready(function () {
    var open = false;
    $('.circle-bg-w').on('click', function () {
        if (open === false) {
            $(this).animate({
                height: '+=10px',
                width: '+=10px'
            }, 300);

            $('.outer-icons-w').animate({
                opacity: 1
            }, 1000);


            open = true;
        } else {
            $(this).animate({
                height: '-=10px',
                width: '-=10px'
            }, 200);

            $('.outer-icons-w').animate({
                opacity: 0
            }, 300);



            open = false;
        }
    });

});