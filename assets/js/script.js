document.addEventListener('DOMContentLoaded', function () {



    /*-------------------------------------------
        mobile menu 
     --------------------------------------------- */


    const toggleBtn = document.querySelector('.toggle-icon');

    toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.mobile-menu').classList.toggle('open')
        toggleBtn.classList.toggle('open')
    })



    /*-------------------------------------------
         Sticky Header
     --------------------------------------------- */

    let win = $(window);
    let sticky_id = $(".header-area");
    win.on('scroll', function () {
        let scroll = win.scrollTop();
        if (scroll < 245) {
            sticky_id.removeClass("sticky-header");
        } else {
            sticky_id.addClass("sticky-header");
        }
    });


})
