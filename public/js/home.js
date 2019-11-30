
const nav = document.querySelector('#toc');
const navTop = nav.offsetTop;


$(document).ready(  function() {

  applyMasonryGrid();

  $(window).on('hashchange', function(e){
    applyTocStyling();
  });

  applyTocStyling();

});


function applyTocStyling() {
  const approvedPaths = [
    'fundamentals',
    'components',
    'layout'
  ]

  let pathname = window.location.pathname.split('/')[1];
  console.log('pathname:', pathname);

  // first remove all is-active classes
  let previousActive = $('.is-active').removeClass('is-active')

  if (pathname && approvedPaths.indexOf(pathname) > -1) {
    let hash = window.location.hash;

    let link;
    if (hash) {
      link = $(`a[href$="${hash}"]`);

    } else {
      link = $(`#${pathname}`).find('a').first()
    }

    link.addClass('is-active')
  }

}


function applyMasonryGrid() {
  // class name of a brick item
  let brickItemSelector = `.oden-athena__brick`

  let brickItemWidth = $(brickItemSelector).outerWidth()
  // console.log('brickItemWidth:', brickItemWidth);

  $('.oden-athena__masonry-grid').masonry({
    // options
    itemSelector: brickItemSelector,
    columnWidth: 1
  });

  console.log('masonry-grid applied');
}
