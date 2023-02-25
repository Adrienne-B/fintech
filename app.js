document.querySelector('#menu') //We are selecting the id for the hamburger nav
.addEventListener('click', ()=> { //Means when the user hits/clicks the hamburger nav the function of the ul/listings will pop on and off (all listings will show b/c of classLIst)
    document.querySelector('nav ul').classList.toggle('showmenu')
})
