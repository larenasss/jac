let subMenu = document.querySelector('.sub-menu__list');
let sectionContent = document.querySelector('.section-right');

var lastId,
    topMenu = $(".sub-menu__list li"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
  offsetTop = href === "#" ? 0 : $(href).offset().top - 24 + 'px';
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();

  
});

// Bind to scroll
$(window).scroll(function(){

  if(sectionContent.getBoundingClientRect().y <= 41) {
    subMenu.classList.add('fixed');
  } else {
    subMenu.classList.remove('fixed');
  }

  // Get container scroll position
  var fromTop = $(this).scrollTop()+topMenuHeight+50;
  
  // Get id of current scroll item
  var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";
  
  if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      if( $('.sub-menu').offset().top < fromTop) {
        menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
      } else {
        menuItems
        .parent().removeClass("active")
      }
  }                   
});