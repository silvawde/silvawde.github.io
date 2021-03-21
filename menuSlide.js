$('.menu-toggle').on('click', function() {
  
    $('.menu').toggleClass('open')
    
    return false
    
  })

$('.menu').mouseleave(function() {

  $('div.menu').removeClass('open')

  return false

})

  
  

