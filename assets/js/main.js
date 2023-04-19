const profileMenu =  document.querySelector('.menu__wrap')
const menuBtn = document.querySelector('.navbar__profile-image')

const openMenu = () => {
    profileMenu.classList.toggle('active__menu')
}

menuBtn.addEventListener('click', () => {
    openMenu()
})
