document.querySelector('.read').addEventListener('click' , () => {
    console.log('click')
    document.querySelector('.about-us-p').scrollIntoView({
        behavior: 'smooth'
    })
})