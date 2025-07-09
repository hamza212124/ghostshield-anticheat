function Tptoweb(pagecase) {
    var section = null;

    if (pagecase == "Pricing") {
        section = '.pricing_page_home_pricing';
    } else if (pagecase == "Features" ) {
        section = '.about_life_page_about_lifeshield_mini_page';
    } else if (pagecase == "FAQ" ) {
        section = '.faq_page_home_home_lifeshield';
    }

    if (section) {
        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 1000, function() {
            $(section).css('opacity', 1);
        });
    }
}

function updatePrices() {
    getUserCountry(function (countryCode) {
        let euroCountries = ["FR", "DE", "ES", "IT", "BE", "NL", "PT", "AT", "IE", "FI", "LU", "GR", "SI", "SK", "EE", "LV", "LT", "MT", "CY"]; // Pays en €
        let currencySymbol, conversionRate;
        if (countryCode === "MA") {
            currencySymbol = "دم";
            conversionRate = 10;
        } else if (euroCountries.includes(countryCode)) {
            currencySymbol = "€";
            conversionRate = 1;
        } else {
            currencySymbol = "$";
            conversionRate = 1;
        }
        $(".price-tag").each(function () {
            let basePrice = parseFloat($(this).data("price"));
            let newPrice = basePrice * conversionRate;
            $(this).html(currencySymbol + newPrice);
        });
    });
}

$(document).ready(function() {
    var buttons = document.querySelectorAll('.dynamicRedirectButton');
    var buttons2 = document.querySelectorAll('.button-toggle');
    function isNearViewport(element) {
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop + 150 && elementTop < viewportBottom - 150;
    }
    function handleScroll() {
        $('.home_wrapper_life > div:not(:first)').each(function() {
            if (isNearViewport(this)) {
                $(this).css('opacity', 1);
            } else {
                $(this).css('opacity', 0);
            }
        });
    }
    $(window).on('scroll resize', function() {
        handleScroll();
    });
    $('.button-toggle').on('click', function() {
        var target = $(this).text().trim();
        var section = null;

        switch (target) {
            case 'Pricing':
                section = '.pricing_page_home_pricing';
                break;
            case 'Features':
                section = '.about_life_page_about_lifeshield_mini_page';
                break;
            case 'FAQ':
                section = '.faq_page_home_home_lifeshield';
                break;
            case 'Documentation':
                section = '.footer_lifeshield_web_home_home';
                break;
        }

        if (section) {
            $('html, body').animate({
                scrollTop: $(section).offset().top
            }, 1000, function() {
                $(section).css('opacity', 1);
            });
        }
    });
    $('.home_wrapper_life > div').css({
        'opacity': 0,
        'transition': 'opacity 1s ease'
    });
    $('.home_wrapper_life > div:first').css('opacity', 1);
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var url = this.getAttribute('data-url');
            window.location.href = url;
        });
    });
    buttons2.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
    $(".back-button").on("click", function(event) {
        event.preventDefault();
        $('.page_terms_of_service').css('display', '');
        $('.page_privacy_policy').css('display', '');
        $('.header_home_page_life').css('display', '');
        $('.home_homapage_page_block_1').css('display', '');
        $('.pricing_page_home_pricing').css('display', '');
        $('.about_life_page_about_lifeshield_mini_page').css('display', '');
        $('.faq_page_home_home_lifeshield').css('display', '');
        $('.footer_lifeshield_web_home_home').css('display', '');
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    });    
    $("#terms_of_service").on("click", function(event) {
        event.preventDefault();
        $('.page_terms_of_service').css('display', 'block');
        $('.page_privacy_policy').css('display', 'none');
        $('.header_home_page_life').css('display', 'none');
        $('.home_homapage_page_block_1').css('display', 'none');
        $('.pricing_page_home_pricing').css('display', 'none');
        $('.about_life_page_about_lifeshield_mini_page').css('display', 'none');
        $('.faq_page_home_home_lifeshield').css('display', 'none');
        $('.footer_lifeshield_web_home_home').css('display', 'none');
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
    $("#privacy_service").on("click", function(event) {
        event.preventDefault();
        $('.page_privacy_policy').css('display', 'block');
        $('.page_terms_of_service').css('display', 'none');
        $('.header_home_page_life').css('display', 'none');
        $('.home_homapage_page_block_1').css('display', 'none');
        $('.pricing_page_home_pricing').css('display', 'none');
        $('.about_life_page_about_lifeshield_mini_page').css('display', 'none');
        $('.faq_page_home_home_lifeshield').css('display', 'none');
        $('.footer_lifeshield_web_home_home').css('display', 'none');
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });    
    handleScroll();
    updatePrices();
});





