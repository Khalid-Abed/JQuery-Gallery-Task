$(document).ready(function(){
let source,
    sources=["app-gmail.png","app-outlook.png","app-yahoo.png","1.png","2.png","3.jpg","4.jpg"];
///////////////////////// Start Function ///////////////////////

$.fn.khaled=function(){
    this.on('click',function(){
    $('.test').fadeOut();
    $('body').css("background-color",'black')
    $('.gallery ').fadeIn(5000)
    $('.gallery img').attr("src",$(this).attr("src"))
    source=$(this).attr("src")
    var index=sources.indexOf(source);

///////////// Close Galary ///////////////////////////////

    $('.exit').on('click',function(){
        $('.test').fadeIn(1000)
        $('body').css("background-color",'white')
        $('.gallery ').css("display",'none')
    })
  
/////////////////////////////////// Next Button ///////////////////////////

    $('.next').on('click',function(){
          if(index < sources.length-1)
          {
              index++;
              $('.gallery img').attr('src',sources[index]) 
          }else{
              index=0;
              $('.gallery img').attr("src",sources[index]);  
          }      
      })

////////////////////////////////////// Previous Button /////////////////////
      
    $('.prev').on('click',function(){
            if(index >0)
            {
                index--;
                $('.gallery img').attr("src",sources[index]);     
            }else{
                index= sources.length-1;
                $('.gallery img').attr("src",sources[index]);  
            } 
        })
////////////////////////////////////////////////////////////////////////////
    })

}//end of function

$('img').khaled(); //call function khaled
});