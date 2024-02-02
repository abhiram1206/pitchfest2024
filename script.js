var button = document.querySelector('.menu');
var items = document.querySelector('.menu-drop');
var link = document.querySelector('.menu-drop a')

button.addEventListener('click', function() {
  items.classList.toggle('opened')  ;
}, false);

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function(e) {
    e.preventDefault();
    items.classList.remove('opened');
  }, false);
}

//banner
let slideIndex = 0;
      let timeoutId = null;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");
      
      showSlides();
      function currentSlide(index) {
           slideIndex = index;
           showSlides();
      }
     function plusSlides(step) {
        
        if(step < 0) {
            slideIndex -= 2;
            
            if(slideIndex < 0) {
              slideIndex = slides.length - 1;
            }
        }
        
        showSlides();
     }
      function showSlides() {
        for(let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          dots[i].classList.remove('active');
        }
        slideIndex++;
        if(slideIndex > slides.length) {
          slideIndex = 1
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add('active');
         if(timeoutId) {
            clearTimeout(timeoutId);
         }
        timeoutId = setTimeout(showSlides, 5000); // Change image every 5 seconds
      }


// timer
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear =  2024,
      dayMonth = "2/15/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
const countDown = new Date(birthday).getTime(),
    x = setInterval(function() {    

    const now = new Date(),distance = countDown - now;

    document.getElementById("days").innerText = Math.floor(distance / (day)),
    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    //seconds
    }, 0)
}());

//Investing partner slider animation
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

//Ecosystem partner slider animation
const imageCarousel = document.querySelector(".carousel1"),
    firstImage = imageCarousel.querySelectorAll(".carousel1 img")[0],
    arrowIcon = document.querySelectorAll(".wrapper1 i");
let isDragStarts = false, isDraggings = false, prevPageXs, prevScrollLefts, positionDiffs;
const toggleArrowIcons = () => {
    let scrollWidth = imageCarousel.scrollWidth - imageCarousel.clientWidth;
    arrowIcon[0].style.display = imageCarousel.scrollLeft == 0 ? "none" : "block";
    arrowIcon[1].style.display = imageCarousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImageWidth = firstImage.clientWidth + 14;
        imageCarousel.scrollLeft += icon.id == "left" ? -firstImageWidth : firstImageWidth;
        setTimeout(() => toggleArrowIcons(), 60);
    });
});
const autoSlides = () => {
    if(imageCarousel.scrollLeft - (imageCarousel.scrollWidth - imageCarousel.clientWidth) > -1 || imageCarousel.scrollLeft <= 0) return;

    positionDiffs = Math.abs(positionDiffs);
    let firstImageWidth = firstImage.clientWidth + 14;
    let valDifference = firstImageWidth - positionDiffs;

    if(imageCarousel.scrollLeft > prevScrollLefts) {
        return imageCarousel.scrollLeft += positionDiffs > firstImageWidth / 3 ? valDifference : -positionDiffs;
    }

    imageCarousel.scrollLeft -= positionDiffs > firstImageWidth / 3 ? valDifference : -positionDiffs;
}
const startDragging = (e) => {
    isDragStarts = true;
    prevPageXs = e.pageX || e.touches[0].pageX;
    prevScrollLefts = imageCarousel.scrollLeft;
}
const handleDragging = (e) => {
    if(!isDragStarts) return;
    e.preventDefault();
    isDraggings = true;
    imageCarousel.classList.add("dragging");
    positionDiffs = (e.pageX || e.touches[0].pageX) - prevPageXs;
    imageCarousel.scrollLeft = prevScrollLefts - positionDiffs;
    toggleArrowIcons();
}
const stopDragging = () => {
    isDragStarts = false;
    imageCarousel.classList.remove("dragging");

    if(!isDraggings) return;
    isDraggings = false;
    autoSlides();
}
imageCarousel.addEventListener("mousedown", startDragging);
imageCarousel.addEventListener("touchstart", startDragging);
document.addEventListener("mousemove", handleDragging);
imageCarousel.addEventListener("touchmove", handleDragging);
document.addEventListener("mouseup", stopDragging);
imageCarousel.addEventListener("touchend", stopDragging);

//Supporting partner slider animation
const imageCarousel1 = document.querySelector(".carousel2"),
      firstImage1 = imageCarousel1.querySelectorAll(".carousel2 img")[0],
      arrowIcon1 = document.querySelectorAll(".wrapper2 i");
let isDragStarts1 = false, isDraggings1 = false, prevPageXs1, prevScrollLefts1, positionDiffs1;
const togglearrowIcon1s = () => {
    let scrollWidth = imageCarousel1.scrollWidth - imageCarousel1.clientWidth;
    arrowIcon1[0].style.display = imageCarousel1.scrollLeft == 0 ? "none" : "block";
    arrowIcon1[1].style.display = imageCarousel1.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcon1.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImage1Width = firstImage1.clientWidth + 14;
        imageCarousel1.scrollLeft += icon.id == "left" ? -firstImage1Width : firstImage1Width;
        setTimeout(() => togglearrowIcon1s(), 60);
    });
});
const autoSlides1 = () => {
    if(imageCarousel1.scrollLeft - (imageCarousel1.scrollWidth - imageCarousel1.clientWidth) > -1 || imageCarousel1.scrollLeft <= 0) return;

    positionDiffs1 = Math.abs(positionDiffs1);
    let firstImage1Width = firstImage1.clientWidth + 14;
    let valDifference = firstImage1Width - positionDiffs1;

    if(imageCarousel1.scrollLeft > prevScrollLefts1) {
        return imageCarousel1.scrollLeft += positionDiffs1 > firstImage1Width / 3 ? valDifference : -positionDiffs1;
    }
    imageCarousel1.scrollLeft -= positionDiffs1 > firstImage1Width / 3 ? valDifference : -positionDiffs1;
}
const startDragging1 = (e) => {
    isDragStarts1 = true;
    prevPageXs1 = e.pageX || e.touches[0].pageX;
    prevScrollLefts1 = imageCarousel1.scrollLeft;
}
const handleDragging1 = (e) => {
    if(!isDragStarts1) return;
    e.preventDefault();
    isDraggings1 = true;
    imageCarousel1.classList.add("dragging");
    positionDiffs1 = (e.pageX || e.touches[0].pageX) - prevPageXs1;
    imageCarousel1.scrollLeft = prevScrollLefts1 - positionDiffs1;
    togglearrowIcon1s();
}
const stopDragging1 = () => {
    isDragStarts1 = false;
    imageCarousel1.classList.remove("dragging");

    if(!isDraggings1) return;
    isDraggings1 = false;
    autoSlides1();
}
imageCarousel1.addEventListener("mousedown", startDragging1);
imageCarousel1.addEventListener("touchstart", startDragging1);
document.addEventListener("mousemove", handleDragging1);
imageCarousel1.addEventListener("touchmove", handleDragging1);
document.addEventListener("mouseup", stopDragging1);
imageCarousel1.addEventListener("touchend", stopDragging1);


// // organizing team silder animation
const imageCarousels1 = document.querySelector(".carousels1"),
      firstImages1 = imageCarousels1.querySelectorAll(".carousels1 .card1")[0],
      arrowIcons1 = document.querySelectorAll(".wrappers1 i");
let isDragStartss1 = false, isDraggingss1 = false, prevPageXss1, prevScrollLeftss1, positionDiffss1;
const togglearrowIcons1s = () => {
    let scrollWidth = imageCarousels1.scrollWidth - imageCarousels1.clientWidth;
    arrowIcons1[0].style.display = imageCarousels1.scrollLeft == 0 ? "none" : "block";
    arrowIcons1[1].style.display = imageCarousels1.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons1.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImages1Width = firstImages1.clientWidth + 14;
        imageCarousels1.scrollLeft += icon.id == "left" ? -firstImages1Width : firstImages1Width;
        setTimeout(() => togglearrowIcons1s(), 60);
    });
});
const autoSlidess1 = () => {
    if(imageCarousels1.scrollLeft - (imageCarousels1.scrollWidth - imageCarousels1.clientWidth) > -1 || imageCarousels1.scrollLeft <= 0) return;

    positionDiffss1 = Math.abs(positionDiffss1);
    let firstImages1Width = firstImages1.clientWidth + 14;
    let valDifference = firstImages1Width - positionDiffss1;

    if(imageCarousels1.scrollLeft > prevScrollLeftss1) {
        return imageCarousels1.scrollLeft += positionDiffss1 > firstImages1Width / 3 ? valDifference : -positionDiffss1;
    }

    imageCarousels1.scrollLeft -= positionDiffss1 > firstImages1Width / 3 ? valDifference : -positionDiffss1;
}
const startDraggings1 = (e) => {
    isDragStartss1 = true;
    prevPageXss1 = e.pageX || e.touches[0].pageX;
    prevScrollLeftss1 = imageCarousels1.scrollLeft;
}
const handleDraggings1 = (e) => {
    if(!isDragStartss1) return;
    e.preventDefault();
    isDraggingss1 = true;
    imageCarousels1.classList.add("dragging");
    positionDiffss1 = (e.pageX || e.touches[0].pageX) - prevPageXss1;
    imageCarousels1.scrollLeft = prevScrollLeftss1 - positionDiffss1;
    togglearrowIcons1s();
}
const stopDraggings1 = () => {
    isDragStartss1 = false;
    imageCarousels1.classList.remove("dragging");

    if(!isDraggingss1) return;
    isDraggingss1 = false;
    autoSlidess1();
}
imageCarousels1.addEventListener("mousedown", startDraggings1);
imageCarousels1.addEventListener("touchstart", startDraggings1);
document.addEventListener("mousemove", handleDraggings1);
imageCarousels1.addEventListener("touchmove", handleDraggings1);
document.addEventListener("mouseup", stopDraggings1);
imageCarousels1.addEventListener("touchend", stopDraggings1);


// onclick function in organizing team
const card1 = document.getElementById('card1');
const mem1 = document.querySelector('#mem1');
const mem2 = document.querySelector('#mem2');
const mem1_name = document.querySelector('#mem1-name');
const mem2_name = document.querySelector('#mem2-name');

card1.addEventListener("click",()=>{
    if(mem1.style.display == "block"){
        mem1.style.display = "none";
        mem2.style.display = 'block'
    } else if(mem2.style.display == "block"){
        mem1.style.display = "block";
        mem2.style.display = 'none'
    }
    if(mem1_name.style.display == "block"){
        mem1_name.style.display = "none";
        mem2_name.style.display = 'block'
    } else if(mem2_name.style.display == "block"){
        mem1_name.style.display = "block";
        mem2_name.style.display = 'none'
    }
})


const card2 = document.getElementById('card2');
const mem3 = document.querySelector('#mem3');
const mem4 = document.querySelector('#mem4');
const mem3_name = document.querySelector('#mem3-name');
const mem4_name = document.querySelector('#mem4-name');

card2.addEventListener("click",()=>{
    if(mem3.style.display == "block"){
        mem3.style.display = "none";
        mem4.style.display = 'block'
    } else if(mem4.style.display == "block"){
        mem3.style.display = "block";
        mem4.style.display = 'none'
    }
    if(mem3_name.style.display == "block"){
        mem3_name.style.display = "none";
        mem4_name.style.display = 'block'
    } else if(mem4_name.style.display == "block"){
        mem3_name.style.display = "block";
        mem4_name.style.display = 'none'
    }
})

const card3 = document.getElementById('card3');
const mem5 = document.querySelector('#mem5');
const mem6 = document.querySelector('#mem6');
const mem13 = document.querySelector('#mem13');
const mem5_name = document.querySelector('#mem5-name');
const mem6_name = document.querySelector('#mem6-name');
const mem13_name = document.querySelector('#mem13-name');

card3.addEventListener("click",()=>{
    if(mem5.style.display == "block"){
        mem5.style.display = "none";
        mem6.style.display = 'block';
        mem13.style.display = 'none';
    } else if(mem6.style.display == "block"){
        mem5.style.display = "none";
        mem6.style.display = 'none';
        mem13.style.display = 'block';
    }
    else if(mem13.style.display == "block"){
        mem5.style.display = "block";
        mem6.style.display = 'none';
        mem13.style.display = 'none';
    }
    if(mem5_name.style.display == "block"){
        mem5_name.style.display = "none";
        mem6_name.style.display = "block";
        mem13_name.style.display = 'none';
    } else if(mem6_name.style.display == "block"){
        mem5_name.style.display = "none";
        mem6_name.style.display = 'none';
        mem13_name.style.display = 'block';
    }
    else if(mem13_name.style.display == "block"){
        mem5_name.style.display = "block";
        mem6_name.style.display = 'none';
        mem13_name.style.display = 'none';
    }
})


const card4 = document.getElementById('card4');
const mem7 = document.querySelector('#mem7');
const mem8 = document.querySelector('#mem8');
const mem7_name = document.querySelector('#mem7-name');
const mem8_name = document.querySelector('#mem8-name');

card4.addEventListener("click",()=>{
    if(mem7.style.display == "block"){
        mem7.style.display = "none";
        mem8.style.display = 'block'
    } else if(mem8.style.display == "block"){
        mem7.style.display = "block";
        mem8.style.display = 'none'
    }
    if(mem7_name.style.display == "block"){
        mem7_name.style.display = "none";
        mem8_name.style.display = 'block'
    } else if(mem8_name.style.display == "block"){
        mem7_name.style.display = "block";
        mem8_name.style.display = 'none'
    }
})

const card5 = document.getElementById('card5');
const mem9 = document.querySelector('#mem9');
const mem10 = document.querySelector('#mem10');
const mem9_name = document.querySelector('#mem9-name');
const mem10_name = document.querySelector('#mem10-name');

card5.addEventListener("click",()=>{
    if(mem9.style.display == "block"){
        mem9.style.display = "none";
        mem10.style.display = 'block'
    } else if(mem10.style.display == "block"){
        mem9.style.display = "block";
        mem10.style.display = 'none'
    }
    if(mem9_name.style.display == "block"){
        mem9_name.style.display = "none";
        mem10_name.style.display = 'block'
    } else if(mem10_name.style.display == "block"){
        mem9_name.style.display = "block";
        mem10_name.style.display = 'none'
    }
})

const card6 = document.getElementById('card6');
const mem11 = document.querySelector('#mem11');
const mem12 = document.querySelector('#mem12');
const mem11_name = document.querySelector('#mem11-name');
const mem12_name = document.querySelector('#mem12-name');

card6.addEventListener("click",()=>{
    if(mem11.style.display == "block"){
        mem11.style.display = "none";
        mem12.style.display = 'block'
    } else if(mem12.style.display == "block"){
        mem11.style.display = "block";
        mem12.style.display = 'none'
    }
    if(mem11_name.style.display == "block"){
        mem11_name.style.display = "none";
        mem12_name.style.display = 'block'
    } else if(mem12_name.style.display == "block"){
        mem11_name.style.display = "block";
        mem12_name.style.display = 'none'
    }
})