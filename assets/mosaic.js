// Initialize Masonry
var container = document.querySelector('#artwork-container');
var masonry = new Masonry(container, {
  itemSelector: '.artwork-item',
  columnWidth: '.artwork-sizer',
  percentPosition: true
});

// layout Masonry after each image loads
imagesLoaded( container ).on( 'progress', function() {
  // layout Masonry after each image loads
  masonry.layout();
});
