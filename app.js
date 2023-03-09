document.querySelector('#menu') //We are selecting the id for the hamburger nav
.addEventListener('click', ()=> { //Means when the user hits/clicks the hamburger nav the function of the ul/listings will pop on and off (all listings will show b/c of classLIst)
    document.querySelector('nav ul').classList.toggle('showmenu')
})


window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }

}

// const row = document.querySelectorAll('.row')
// window.addEventListener('scroll', check_animation)
// check_animation()

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//      if(entry.isIntersecting){
//        document.querySelectorAll(".animated")[0].
//        classList.add(".about-left");
//        document.querySelectorAll(".animated")[1].
//        classList.add(".about-middle");
//        document.querySelectorAll(".animated")[2].
//        classList.add(".about-right");
//        }
//      })
//     })

//     observer.observe(document.querySelector(".row"));


// function check_animation(){
//     const trigger = window.innerHeight / 6 * 4;

//     row.forEach(row => {
//         const top = row.getBoundingClientRect().top
//         if (trigger > top) {
//             row.classList.add('show_content')
//         } else {
//             row.classList.remove('show_content')
//         }
//     })
// }



//



// const faders = document.querySelectorAll(".row");
// const sliders = document.querySelectorAll(".about2");

// const sectionOneOptions = {
//   rootMargin: "-200px 0px 0px 0px"
// };

// const sectionOneObserver = new IntersectionObserver(function(
//   entries,
//   sectionOneObserver
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       header.classList.add("nav-scrolled");
//     } else {
//       header.classList.remove("nav-scrolled");
//     }
//   });
// },
// sectionOneOptions);

// sectionOneObserver.observe(sectionOne);

// const appearOptions = {
//   threshold: 0,
//   rootMargin: "0px 0px -250px 0px"
// };

// const appearOnScroll = new IntersectionObserver(function(
//   entries,
//   appearOnScroll
// ) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
// appearOptions);

// faders.forEach(fader => {
//   appearOnScroll.observe(fader);
// });

// sliders.forEach(slider => {
//   appearOnScroll.observe(slider);
// });











//
// .fade-in {
//     opacity: 0;
//     transition: opacity 250ms ease-in;
// }


// const faders = document.querySelectorAll
// ('.row');