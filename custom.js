//  var typed = new Typed('.typing',{
//   String:['web designer','developer'],
//   typeSpeed:100,
//   backspeed:60,
//   loop:true
//  })
 
//  =============slider==================

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next (){
console.log(index)
slides[index].classList.remove('active')
index = (index + 1) % slides.length;
slides[index].classList.add('active');

}

function prev(){
    console.log(index)
    slides[index].classList.remove('active')
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active'); 
}

setInterval(next,5000);

 
 // ==============================theme customized=============================
 const root = document.querySelector(':root');
 const castomizedThemeArea = document.querySelector('.control-plette');
 const castomizedIcon = document.querySelector('.control-plette .fa-cog');

 castomizedIcon.addEventListener('click',()=>{
 castomizedThemeArea.style.transition = '.5s'
 castomizedThemeArea.classList.add('toggle')
 })


 const color = document.querySelectorAll('.color');
 const colord = document.querySelector('.color');
 color.forEach(item =>{
   item.addEventListener('click',()=>{
     let rong;
     if(item.classList.contains('c1')){
      castomizedThemeArea.classList.remove('toggle')
       rong = 'linear-gradient(rgb(218, 10, 186),rgb(12, 12, 211),rgb(27, 198, 236))';     
     }else if(item.classList.contains('c2')){
       rong = '#5e21e4'; 
       castomizedThemeArea.classList.remove('toggle')
     }else if(item.classList.contains('c3')){
      castomizedThemeArea.classList.remove('toggle')
       rong = '#3b0303'; 
     }else if(item.classList.contains('c4')){
      castomizedThemeArea.classList.remove('toggle')
       rong = '#9b0b88'; 
     }else if(item.classList.contains('c5')){
      castomizedThemeArea.classList.remove('toggle')
       rong = '#2b00ff'; 
     }else if(item.classList.contains('c6')){
      castomizedThemeArea.classList.remove('toggle')
       rong = '#ff0000'; 
     }else if(item.classList.contains('c7')){
      castomizedThemeArea.classList.remove('toggle')
       rong = '#00ff33'; 
     }else if(item.classList.contains('c8')){
      castomizedThemeArea.classList.remove('toggle')
       rong = '#dd00ff'; 
     }
    //  item.style.transition = '10s'
     root.style.setProperty('--skin-color',rong)
   })
 })
    // ===========================background color chang=========================

const day = document.querySelector('.call1');
const night = document.querySelector('.call2');
night.addEventListener('click',()=>{
  var a = '#000000';
  var b = '#ffffff';
  var c = '#1a181d';
night.style.display = 'none'
day.style.display = 'flex'
// night.style.transition = '.5s'
root.style.setProperty('--bg-black-900',a);
root.style.setProperty('--bg-black-100',c);
root.style.setProperty('--text-black-900',b);
root.style.setProperty('--text-black-700',b);
});
day.addEventListener('click',()=>{
  var a = '#000000';
  var b = '#f2f2fc';
  var c = '#fdf9ff'
day.style.display = 'none'
night.style.display = 'flex'
// night.style.transition = '1s'
root.style.setProperty('--bg-black-900',b);
root.style.setProperty('--bg-black-100',c);
root.style.setProperty('--text-black-900',a);
root.style.setProperty('--text-black-700',a);
});


// =============toggle btn=================

const toggleButton = document.querySelector('.toggle-btn');
const aside = document.querySelector('.aside');
toggleButton.addEventListener('click',()=>{
aside.classList.add('slide');
aside.style.transition = '.5s'
})

// =================nav control===============
const sections = document.querySelectorAll('.section');
const slideSection = document.querySelectorAll('.container');

// =========removeHidden==========
// const removeHidden = () =>{
//   sections.forEach(item =>{
//     item.classList.add('hidden');
//   })
// }


// const home = document.querySelector('#home');
// const about = document.querySelector('#about');
// const service = document.querySelector('#service');
// const portfolio = document.querySelector('#portfolio');
// const contact = document.querySelector('#contact');
const navs = document.querySelectorAll('.nav li a');


// ==remove active==
const removeActive = () =>{
navs.forEach(item =>{
  item.classList.remove('active');
})
} 

navs.forEach(item =>{
  item.addEventListener('click',()=>{
         removeActive()
        item.classList.add('active')
      if(item.classList.contains('nav1')){

        aside.classList.remove('slide');
           }
      if(item.classList.contains('nav2')){
  
        aside.classList.remove('slide');
         }
      if(item.classList.contains('nav3')){
      
        aside.classList.remove('slide');
        }
      if(item.classList.contains('nav4')){

         aside.classList.remove('slide');
        }
      if(item.classList.contains('nav5')){

         aside.classList.remove('slide');
        }
  })
})


// const navigation0 = document.querySelector('.nav .navigation0');
// const navigation1 = document.querySelector('.nav .navigation1');
// const navigation2 = document.querySelector('.nav .navigation2');
// const navigations = document.querySelectorAll('.section .container');

// function removeNav(){
// navigations.forEach(item=>{
//   item.classList.remove('containerd');
// })
// }

// navigation0.addEventListener('click',()=>{
//     // removeNav();
//     aboutSlide.classList.add('containerd')
//     aboutSlide.style.transition = '5s'
//     navigation0.style.transition = '5s'
//     navigation0.style.background = 'red'
//   })
// navigation1.addEventListener('click',()=>{
//     // removeNav();
//     aboutSlide1.classList.add('containerd')
//     aboutSlide1.style.transition = '1s'
//     navigation1.style.transition = '1s'
//     navigation1.style.background = 'red'
//   })
// navigation2.addEventListener('click',()=>{
//     // removeNav();
//     aboutSlide2.classList.add('containerd')
//     aboutSlide2.style.transition = '1s'
//     navigation2.style.transition = '1s'
//     navigation2.style.background = 'red'
//   })

//   //=======navigation======
// // site.addEventListener('click', ()=>{
// //  aboutSlide.classList.add('containerd')
// //  aboutSlide.style.transition = '4s'
// // })



// var vcn = document.querySelector('.vcn');
// vcn.addEventListener('click', ()=>{
//   // alert(444)
//   aboutSlide1.classList.add('containerd')
//   aboutSlide.style.transition = '1s'

// })

// ==========silde control=============
const homeSlide = document.querySelector('.container1');
const aboutSlide = document.querySelector('.container2');
const serviceSlide = document.querySelector('.container3');
const portfolioSlide = document.querySelector('.container4');
const contactSlide = document.querySelector('.container5');
// ==========nav control=============
const contrilar1 = document.querySelector('.contrilar1');
const contrilar2 = document.querySelector('.contrilar2');
const contrilar3  = document.querySelector('.contrilar3');
const contrilar4 = document.querySelector('.contrilar4');
const contrilar5 = document.querySelector('.contrilar5');


const contactRaw = document.querySelectorAll('.contact-raw');
const serviceRow = document.querySelectorAll('.service-raw');
const portfolioRow = document.querySelectorAll('.portfolio-raw');
const aboutRow = document.querySelectorAll('.about-raw');

function addContactRaw(){
  contactRaw.forEach(item =>{
    item.classList.add('raow');
  })
}
function removeContactRaw(){
  contactRaw.forEach(item =>{
    item.classList.remove('raow');
  })
}


function addServiceRaw(){
  serviceRow .forEach(item =>{
    item.classList.add('raow');
  })
}
function removeServiceRaw(){
  serviceRow.forEach(item =>{
    item.classList.remove('raow');
  })
}


function addPortfolioRaw(){
   portfolioRow.forEach(item =>{
    item.classList.add('raow');
  })
}
function removePortfolioRaw(){
   portfolioRow.forEach(item =>{
    item.classList.remove('raow');
  })
}



function addAboutRaw(){
  aboutRow.forEach(item =>{
    item.classList.add('raow');
  })
}
function removeAboutRaw(){
  aboutRow.forEach(item =>{
    item.classList.remove('raow');
  })
}


contrilar1.addEventListener('click',()=>{
  removeAboutRaw();
  removePortfolioRaw();
  removeContactRaw();
  homeSlide.classList.add('aaaa');
  removeServiceRaw();
  homeRow.classList.add('raow');
});

contrilar2.addEventListener('click',()=>{
  addContactRaw();
  aboutSlide.classList.add('aaaa');
});
contrilar3.addEventListener('click',()=>{
  removeAboutRaw();
  removePortfolioRaw();
  addServiceRaw();
  removeContactRaw();
  serviceSlide.classList.add('aaaa');
});
contrilar4.addEventListener('click',()=>{
  removeAboutRaw();
  addPortfolioRaw();
  removeContactRaw();
  portfolioSlide.classList.add('aaaa');
});
contrilar5.addEventListener('click',()=>{
  addAboutRaw();
  removeContactRaw();
  contactSlide.classList.add('aaaa');
});


const home = document.querySelector('#home');
const homeRow = document.querySelector('.homeRow');
const rowAll = document.querySelectorAll('.row');
const allContainer = document.querySelectorAll('.container');

function applyContainer(){
  allContainer.forEach(item =>{
   item.classList.remove('aaaa');
  })
}
// function applyRow(){
//   rowAll.forEach(item =>{
//     item.classList.add('raow');
//   })
// }
// function removeRow(){
//   rowAll.forEach(item =>{
//     item.classList.remove('raow');
//   })
// }

function sideSlide(){
  // applyRow();
  applyContainer();
home.classList.remove('homedisplay');
homeRow.classList.remove('home-row');
}

