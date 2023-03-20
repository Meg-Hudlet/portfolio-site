window.addEventListener('DOMContentLoaded', function() {
    var gallery = document.querySelector('.gallery');
    var galleryItems = document.querySelectorAll('.gallery-item');
    
    // Set opacity to 1 to fade in gallery
    gallery.classList.add('fade-in');
    
    // Create a masonry grid with the gallery items
    var masonry = new Masonry(gallery, {
      itemSelector: '.gallery-item',
      columnWidth: '.gallery-item',
      gutter: 20
    });
  });

  // Get all the gallery items
const galleryItems = document.querySelectorAll('.gallery-item');

// Define the point where the fade-in effect should start
const scrollStart = window.innerHeight / 2;

// Add an event listener to the window object to listen for scroll events
window.addEventListener('scroll', () => {
  // Loop through each gallery item
  galleryItems.forEach((item) => {
    // Check if the item is within the viewport
    if (item.getBoundingClientRect().top < scrollStart) {
      // If the item is within the viewport, set its opacity to 1 to fade it in
      item.style.opacity = 1;
    }
  });
});
