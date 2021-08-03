$(document).ready(function() {
    /* For the sticky navigation */
    /*
    $('.js--section-feature').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    */
    var waypoints = $('.js--section-feature').waypoint(function(direction) {
      if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        } 
    }, {
      offset: '25%'
    })    
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1); 
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-feature').offset().top}, 100); 
    });
    
    /* Navigation scroll */
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
    });
    
    /* Animations on scroll*/
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },{
        offset:'60%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUpBig');
    },{
        offset:'60%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    },{
        offset:'70%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    },{
        offset:'50%'
    });
    
    /* Mobile nav */
    $('.js--nav-icon').click(function(direction){
        var nav = $('.js--main-nav');
        var icon = document.getElementById("icon");
        
        nav.slideToggle(200);
        
        if (icon.hasAttribute('name','menu-outline')){
            icon.setAttribute('name','close-outline');
            icon.removeAttribute('name','menu-outline');
        }else{
            icon.removeAttribute('name','close-outline');
            icon.setAttribute('name','menu-outline');
        }
    });
    
    /* Map */


});



// Initialize and add the map 13.7289465,100.5688851
function initMap() {
  
  // The location of Uluru
  const uluru = { lat: 13.7289465, lng: 100.5688851 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: { lat: 13.7299, lng: 100.571 },
  });
    const svgMarker = {
    path:
      "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "#7BA79D",
    fillOpacity: 0.9,
    strokeWeight: 0,
    rotation: 0,
    scale: 3,
    anchor: new google.maps.Point(15, 30),
  };
    const tourStops = [
        [{ lat: 13.7301064, lng: 100.5694846 }, "Phrom Phong BTS"],
        [{ lat: 13.7289465, lng: 100.5688851 }, "Viona Yoga"],
    ];
    // Create an info window to share between markers.
    const infoWindow = new google.maps.InfoWindow();
    // Create the markers.
    /*
    tourStops.forEach(([position, title], i) => {
      const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
      });
        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
  */
//const image ="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
      title: "Viona Yoga",
      //label: "Viona Yoga",
      icon: svgMarker,
  });
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
}
