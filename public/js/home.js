
const nav = document.querySelector('#toc');
const navTop = nav.offsetTop;


$(document).ready(  function() {

  // class name of a brick item
  var brickItemSelector = `.oden-athena__brick`

  var brickItemWidth = $(brickItemSelector).outerWidth()
  // console.log('brickItemWidth:', brickItemWidth);

  $('.oden-athena__masonry-grid').masonry({
    // options
    itemSelector: brickItemSelector,
    columnWidth: 1
  });

  console.log('masonry-grid applied');

});
