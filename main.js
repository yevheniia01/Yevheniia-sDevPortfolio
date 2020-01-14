$(document).ready(function(){


    $('.projects-link').click(function(){
        $('html,body').animate({
            scrollTop: $('#projects-row').offset().top
        },'slow')
    })
    $('.contactme-link').click(function(){
        $('html,body').animate({
            scrollTop: $('footer').offset().top
        }, 'slow')
    })
})