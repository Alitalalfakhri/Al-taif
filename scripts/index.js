document.querySelector('.read').addEventListener('click' , () => {
    console.log('click')
    document.querySelector('.about-us-h1').scrollIntoView({
        behavior: 'smooth'
    })
})