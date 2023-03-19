// const menu = document.querySelector('.menu')
// const navigation = document.querySelector('.navigation')
// const dropdown = document.querySelectorAll('#dropdown')
// const drop = document.querySelectorAll('.drop')
// const dropitemMenu = document.querySelectorAll('.navigation .action')
// const dropMenu = document.querySelectorAll('.navigation ul ul')

// function activeDropDown(num) {
//     dropdown[num].classList.toggle('active')
// }

// function activeDropDownNav(num) {
//     drop[num].classList.toggle('active')
// }

// function activeDropDownNavMob(num) {
//     dropitemMenu[num].classList.toggle('active')
//     dropMenu[num].classList.toggle('active')
// }

// menu.addEventListener('click', () => {
//     menu.classList.toggle('active')
//     navigation.classList.toggle('active')
// })

const items = gsap.utils.toArray(
    ['section:nth-child(4) .right img',
        'section:nth-child(2) img',
        'section:nth-child(2) .container div',
        'section:nth-child(4) .left',
        'section:nth-child(3) .left',
        'section:nth-child(3) .right',
        'section:nth-child(5) .item',
        'section:nth-child(6) img',
        'section:nth-child(6) .right',
        'section:nth-child(7) .container',
        'section:nth-child(8) .left',
        'section:nth-child(8) .right',
        'section:nth-child(9) .container',
        'section:nth-child(11) form label',
        'section:nth-child(11) form input',
        'section:nth-child(11) form button']);
items.forEach((item, i) => {
    ScrollTrigger.create({
        // markers: true,
        trigger: item,
        start: "top 90%",
        toggleClass: 'active',
    })
})
