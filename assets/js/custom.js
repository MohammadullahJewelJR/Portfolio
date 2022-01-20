// ======================= Menu Active class


// ====================== MENU RESPONSIVE
var toggler = document.querySelector(".toggler");
var toggler2 = document.querySelector("#toggler");
var myMenu = document.querySelector(".my-menu");
toggler.addEventListener("click", function(){
    myMenu.classList.add("active");
})
toggler2.addEventListener("click", function(){
    myMenu.classList.remove("active");
})


// ================== STICKY MENU
var sticky = document.querySelector(".navigation");
window.addEventListener("scroll", function(){
    if(window.scrollY > 200){
        sticky.classList.add("sticky");
    }else{
        sticky.classList.remove("sticky");
    }
});

// ================= DROPDOWN MENU
var dropMenu = document.querySelectorAll(".myDropdown");
for(let a = 0; a < dropMenu.length; a++){
    dropMenu[a].addEventListener("click", function(){
        for(let b = 0; b<dropMenu.length; b++){
            dropMenu[b].classList.remove("active");
        }
        this.classList.add("active");
    })
}

// ====================== PORTFOLIO FILTER
var filtBtn = document.querySelectorAll(".list");
var filterItems = document.querySelectorAll(".filterBox");
for(var i =0; i<filtBtn.length; i++) {
    filtBtn[i].addEventListener("click", function() {
        for(let j = 0; j<filtBtn.length; j++) {
            filtBtn[j].classList.remove("active");
        }
        this.classList.add("active");


        var dataFilter = this.getAttribute("data-filter");
        for(var k = 0; k<filterItems.length; k++) {
            filterItems[k].classList.add("hide");
            filterItems[k].classList.remove("active");

            if(filterItems[k].getAttribute("data-item") == dataFilter || dataFilter == "all") {
                filterItems[k].classList.remove("hide"); 
                filterItems[k].classList.add("active"); 
            }

        }
        this.classList.remove("hide");
    });    
}

// ======================== SLIDER ABOUT SECION
$(document).ready(function(){
    $('#test-carousel .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        items:5,
        nav:true,
        lazyLoad:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false,
                loop:true
            }
        }
    });


    $('#brand-carousel .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        items:5,
        nav:true,
        lazyLoad:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:false,
                loop:true
            }
        }
    })
})