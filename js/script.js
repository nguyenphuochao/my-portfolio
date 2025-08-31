$(document).ready(function () {
    // load local storage
    loadLocalstorage();

    // show nav scroll
    window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 200);

        // active nav item first
        if (window.scrollY == 0) {
            $("nav ul li:first-child a").addClass("active");
        }
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
        autoplaySpeed: 4000
    });

    // counter number
    $('.counter').countUp({
        'time': 3000,
        'delay': 10
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
            name: "Please enter this field",
            email: {
                required: "Please enter this field",
                email: "Email much format name@domain.com"
            },
            subject: "Please enter this field",
            message: "Please enter this field"
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

    //scroll back to top
    const handleScroll = () => {
        if (window.scrollY > 300) {
            $(".back-to-top").css("opacity", 1);
        } else {
            $(".back-to-top").css("opacity", 0);
        }
    }

    window.addEventListener('scroll', handleScroll);

    // toggle theme dark/light
    $("#toggle-theme").change(function () {
        var isCheckedToggleTheme = $(this).prop('checked');
        localStorage.setItem('isCheckedToggleTheme', isCheckedToggleTheme);
        $('body').toggleClass("light-theme", !isCheckedToggleTheme);
    })

    var typed1 = new Typed('.text-typing-effect-1', {
        strings: ['', 'I am a web developer'],
        typeSpeed : 100,
        backSpeed: 50,
        loop: true,
        loopCount: 5
    });

    var typed2 = new Typed('.text-typing-effect-2', {
        strings: ['', 'I am a fullstack developer'],
        typeSpeed : 100,
        backSpeed: 50,
        loop: true,
        loopCount: 5
    });

});

function loadLocalstorage() {
    var isCheckedToggleTheme = true
    $("#toggle-theme").bootstrapToggle(isCheckedToggleTheme ? "on" : "off")
    if (localStorage.getItem('isCheckedToggleTheme')) {
        isCheckedToggleTheme = JSON.parse(localStorage.getItem('isCheckedToggleTheme')) ? true : false;
        $("#toggle-theme").bootstrapToggle(isCheckedToggleTheme ? "on" : "off")
        $('body').toggleClass("light-theme", !isCheckedToggleTheme);
    }
}