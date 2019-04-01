
$(document).ready(function () {

    $(".chat-box").on('click', function () {
        $('.chat-box-close').toggle();
        $(".chat-box").hide();
        $(".chat-window").toggle();
        $(".chat-window2 ").hide();

    });
    $(".chat-box-close").on('click', function () {
        $(".chat-window").hide();
        $(".chat-window2 ").hide();
        $(".chat-box").show();
        $('.chat-box-close').hide();
    });

    $(".menubar").on("click", function () {
        $('.respo-navbar').toggle();
    })

    $("#load").on('click', function () {
        $(".chat-window").hide();
        $(".chat-window2 ").show();
    });
    // For user input
    $('#myInput').on('keypress', function (e) {
        // 13 is keypress enter
        if (e.which == 13) {
            let typedInput = $('#myInput').val();
            if (typedInput != '') {
                $('.set-height').append(`<div class="your-conv">
                <h6>${typedInput}</h6>
                </div>`);
                $('#myInput').val('');
            }

        }
    })
    $('#onsubmit').on('click', function (e) {
        let typedInput = $('#myInput').val();
        if (typedInput != '') {
            $('.set-height').append(`<div class="your-conv">
            <h6>${typedInput}</h6>
            </div>`);
            $('#myInput').val('');
        }
    })

    $("#onsubmit").on('click', function () {
        let url = "https://api.adviceslip.com/advice";
        $.get(url, function (data) {
            data = JSON.parse(data);
            let advice = data['slip']['advice'];
            $('.set-height').append(`<div class="his-conv">
                <h6>${advice}</h6>
            </div>`);

        });
    });
    $("#myInput").on('keypress', function (e) {
        if (e.which == 13) {
            let url = "https://api.adviceslip.com/advice";
            $.get(url, function (data) {
                data = JSON.parse(data);
                let advice = data['slip']['advice'];
                $('.set-height').append(`<div class="his-conv">
                <h6>${advice}</h6>
            </div>`);

            });
        }
    });


});