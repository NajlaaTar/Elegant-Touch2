
//navbar collapse and open
function openNavbar() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNavbar() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).on('click', function (e) {
    if ($(e.target).closest("#mySidenav, .slide-menu").length === 0) {
        document.getElementById("mySidenav").style.width = "0";
    }
});

//scroll ==> change color ....

window.onscroll = function () {
    myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});
$('#return-to-top').click(function () {

    $('body, html').animate({
        scrollTop: 0 
    }, 500);
});

//video playing and resizing

var myVideo = document.getElementById("video1"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    document.getElementById("video1").className = "col-xl-12 col-lg-12 col-md-12 col-12"
    
} 

function makeSmall() { 
    document.getElementById("video1").className = "col-xl-8 col-lg-8 col-md-8 col-8"
} 

function makeNormal() { 
    document.getElementById("video1").className = "col-xl-10 col-lg-10 col-md-10 col-10"
} 

    
// Gallery image hover
$( ".img-wrapper" ).hover(
    function() {
      $(this).find(".img-overlay").animate({opacity: 1}, 600);
    }, function() {
      $(this).find(".img-overlay").animate({opacity: 0}, 600);
    }
  );
  
  // Lightbox
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");
  var $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
  var $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
  var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');
  
  // Add overlay
  $overlay.append($image).prepend($prevButton).append($nextButton).append($exitButton);
  $("#gallery").append($overlay);
  
  // Hide overlay on default
  $overlay.hide();
  
  // When an image is clicked
  $(".img-overlay").click(function(event) {
    // Prevents default behavior
    event.preventDefault();
    // Adds href attribute to variable
    var imageLocation = $(this).prev().attr("href");
    // Add the image src to $image
    $image.attr("src", imageLocation);
    // Fade in the overlay
    $overlay.fadeIn("slow");
  });
  
  // When the overlay is clicked
  $overlay.click(function() {
    // Fade out the overlay
    $(this).fadeOut("slow");
  });
  
  // When next button is clicked
  $nextButton.click(function(event) {
    // Hide the current image
    $("#overlay img").hide();
    // Overlay image location
    var $currentImgSrc = $("#overlay img").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image").next().find("img"));
    // All of the images in the gallery
    var $images = $("#image-gallery img");
    // If there is a next image
    if ($nextImg.length > 0) { 
      // Fade in the next image
      $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    } else {
      // Otherwise fade in the first image
      $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
    }
    // Prevents overlay from being hidden
    event.stopPropagation();
  });
  
  // When previous button is clicked
  $prevButton.click(function(event) {
    // Hide the current image
    $("#overlay img").hide();
    // Overlay image location
    var $currentImgSrc = $("#overlay img").attr("src");
    // Image with matching location of the overlay image
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    // Finds the next image
    var $nextImg = $($currentImg.closest(".image").prev().find("img"));
    // Fade in the next image
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    // Prevents overlay from being hidden
    event.stopPropagation();
  });
  
  // When the exit button is clicked
  $exitButton.click(function() {
    // Fade out the overlay
    $("#overlay").fadeOut("slow");
  });








//clock
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();



function Call() {
    var retVal = confirm("Do you want to Call us ?");
    if( retVal == true ) {
        var retVal2 = prompt("Enter your name: ", "your name here");
        alert("Hi, " + retVal2)
       return true;
    } else {
       document.write ("User does not want to continue!");
       return false;
    }
 }


 
//validate email
function myfuncEmail(){

    var x=document.myform.email.value ;
    
    var atposition=x.indexOf("@") ;
    
    var dotposition=x.lastIndexOf(".") ;
    
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length) {
    
    alert ("Please enter a valid e-mail address \n '@' position : " +atposition+"\n '.' position : " +dotposition) ;
    
    return false ;
    
    }}


    window.onload = function () {
      var i = 0;
      if(i == 0)
        checkCookies()

      i++;
    };

    function checkCookies(){

        var text=" " ;
        if (navigator.cookieEnabled==true){
        
        text="Cookies on this device are enable." ;
        
        }
        
        else{
        
        text="Cookies on this device are not enable ." ;
        
        }
        alert("Hello there,\n" +text);
        
        }



function mOver(obj){
    obj.style.background = "green" ;
    obj.style.borderRadius = "20px";
  }
            
function mOut(obj){
    obj.style.background = "transparent" ;
    obj.style.borderRadius = "100px";
            
}

function MouseOn(obj){
    
    
    var x = obj.innerText.toUpperCase();

    obj.innerText = x;
    obj.style.color="green";

    
  }
            
function MouseOut(obj){
    var x = obj.innerText.toLowerCase();

    obj.innerText = x;
    obj.style.color="black";
            
}

function MyDouble(obj){
    obj.href= "services.html";
}  


    function myFocus(x) {
        x.style.background = "#ffdbce";
      }


      function colorFunc(elmnt, clr) {
        elmnt.style.color = clr;
        
        elmnt.style.opacity = 0.5;
      }

      function colorFunc1(elmnt, clr) {
        elmnt.style.color = clr;
        elmnt.style.opacity = 1.0;
      }



