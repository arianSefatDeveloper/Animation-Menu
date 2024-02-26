const menus = document.querySelectorAll("a")
const animlem = document.querySelector(".anim")


// menus.forEach(menu =>{
//     menu.addEventListener("mouseenter",event=>{
//         console.log(event.target.offsetWidth);
//         animlem.style.width = event.target.offsetWidth +"px"
//         animlem.style.left = event.target.offsetLeft +"px"
//     })
// })


menus.forEach(menu => menu.onmouseenter =  (event)=>{
       
           
            animlem.style.width = event.target.offsetWidth +"px"
            animlem.style.left = event.target.offsetLeft +"px"
        })
  