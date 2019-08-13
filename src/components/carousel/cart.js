var isCarouselPaused = false;

$( window ).on( 'load resize', function() {
  
  if ( document.documentElement.clientWidth <= 1024 ) {
    
    if ( !isCarouselPaused ) {
      $( '#carouselExampleControls' ).carousel('pause');
      isCarouselPaused = true;
    }
  } else {
    if ( isCarouselPaused ) {
      $( '#carouselExampleControls' ).carousel('cycle');
      isCarouselPaused = false;
    }
  };
});