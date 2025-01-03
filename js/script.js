$(document).ready(function () {
    // show nav scroll
    window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 200);
    });

    // click active nav item
    $("nav ul li a").click(function () {
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });

    // Banner couersel
    $('.my-banner').slick({
        infinite: false,
        dots: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 200000
    });

    // My-skill filter
    $("#my-skill button").click(function () {
        if ($(this).hasClass("active")) {
            return;
        }

        $(this).siblings("button.active").removeClass("active");
        $(this).addClass("active");

        var data = $(this).attr("data");
        var allDiv = $("#my-skill .row > div");
        if (data == "all") {
            allDiv.show();
        } else {
            var showDiv = $(`#my-skill .row > div[data=${data}`);
            showDiv.show();

            allDiv.not(showDiv).hide();
        }
    });

    // validate form contact
    $("#form-contact").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            subject: "required",
            message: "required"
        },
        messages: {
            name: "Vui lòng nhập tên",
            email: {
                required: "Vui lòng nhập email",
                email: "Email phải đúng định dạng name@domain.com"
            },
            subject: "Vui lòng nhập tiêu đề",
            message: "Vui lòng nhập nội dung"
        }
    });

    // Animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));


});