// show menu
const navmenu=document.getElementById("navmenu"),
      navtoggle=document.getElementById("navtoggle"),
      navclose=document.getElementById("navclose")


if(navtoggle) {
    navtoggle.addEventListener("click",() =>{
        navmenu.classList.add("showmenu")
    })
}     


if(navclose) {
    navclose.addEventListener("click",() =>{
        navmenu.classList.remove("showmenu")
    })
}     

// link close
const navlink=document.querySelectorAll(".navlink")

const linkaction=() =>{
    const navmenu=document.getElementById("navmenu")
    navmenu.classList.remove("showmenu")
}

navlink.forEach(n=>n.addEventListener("click",linkaction))


// swiper
const swiperHome = new Swiper('.homeswiper', {
   
    loop: true,
    Speed:800,
    parallax:true,
    effect:'fade',
    
    
    pagination: {
      el: '.swiper-pagination',
      type:'fraction',
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  })