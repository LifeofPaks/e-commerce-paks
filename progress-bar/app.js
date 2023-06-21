const success = document.querySelector('.success')

success.value = 100

let successInterval

successInterval =  setInterval(() => {
    success.value--
    if(success.value === 0){
        clearInterval(successInterval)
    }
}, 50);