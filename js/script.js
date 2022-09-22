$(document).ready(function () {
    var owl = $('.slider');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin:60,
        center:true,
        nav:true,
        dots:false,
        navText:[
            "<i class='fal fa-angle-left' style='transform: rotate(45deg);'></i>",
            "<i class='fal fa-angle-right' style='transform: rotate(45deg);'></i>"
        ]
    });
});
$(document).ready(function () {
    var owl = $('.videoslider');
    owl.owlCarousel({
        items: 3,
        loop: true,
        margin:20,
        center:false,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                center:true,
                margin:0
            },
            600:{
                items:1.5,
            },
            750:{
                items:2.5,
            },
            949:{
                items:3
            },
            1024:{
                items:2,
            },
            1100:{
                items:2.5,
            }
        }
    });
});

function show(){
    var x = document.getElementById("abc");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

var buybtn= document.getElementById("buybtn");
var rentbtn= document.getElementById("rentbtn");
var buytrangle= document.getElementById("buytrangle");
var renttrangle= document.getElementById("renttrangle")
var rentContent= document.getElementById("rent-content");
var buyContent= document.getElementById("buy-content")

function bgrent(){
    rentbtn.classList.add("bg-secondary-0","text-white");
    rentbtn.classList.remove("bg-white","text-black");
    buybtn.classList.remove("bg-secondary-0","text-white");
    buybtn.classList.add("bg-white","text-black");
    renttrangle.classList.remove("hidden");
    buytrangle.classList.add("hidden");
    buyContent.classList.add("hidden");
    rentContent.classList.remove("hidden");


}
function bgbuy(){
    buybtn.classList.add("bg-secondary-0","text-white");
    buybtn.classList.remove("bg-white","text-black");
    rentbtn.classList.remove("bg-secondary-0","text-white");
    rentbtn.classList.add("bg-white","text-black");
    buytrangle.classList.remove("hidden");
    renttrangle.classList.add("hidden");
    rentContent.classList.add("hidden");
    buyContent.classList.remove("hidden");
}


document.addEventListener('click', ({ target: { dataset: { id = '' }}}) => {
    if (id.length > 0) {
      document.querySelectorAll('.tab').forEach(t => t.classList.add('hidden'));
      document.querySelector(`#${id}`).classList.remove('hidden');
    }
  });