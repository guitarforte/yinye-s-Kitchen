const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

$(function () {
    
    $("#navbarToggle").blur(function (event) {
        var screenWidth= window.innerWidth;
        if (screenWidth <768) {
            $("navbarNavAltMarkup").collapse('hide');
        }
    });
});


function popUp() {
    var txt;
    if (confirm("Payment validate pre-order")) {
      txt = " Payment validate order: Call +234810529895 to make your payment";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }