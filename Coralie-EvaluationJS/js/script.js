function diapoBackground (){
    const backgroundImages = ["url('css/images/background.jpg')", "url('css/images/background2.jpg')", "url('css/images/background3.jpg')"];
    let compteurImg = 1;
    const jouerDiaporama = setInterval(function(){
        $('header').css('backgroundImage', backgroundImages[compteurImg]);
        compteurImg++;
        if (compteurImg == backgroundImages.length){
            compteurImg = 0;
        }
    }, 15000)
}
diapoBackground();

function sliderVoitures(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplayspeed: 200
      });
}
sliderVoitures();

function menuHamburgerToggle(){
    $("#hamburger").on('click', function(){
        $('#menu-hamburger nav').slideToggle()
    })
}
menuHamburgerToggle();
