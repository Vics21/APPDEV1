const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

let count = 0

btns.forEach((btn) =>{
    btn.addEventListener('click', (button)=> {
        const styles = button.currentTarget.classList
        if (styles.contains('random')){
            getRandomNumber()
        }else if (styles.container('reset')){
            getRandomNumber()
        }else{
            count = 0
        }
        value.textContent = count

        if (count > 0){
            value.style.color = "green"
        }else if (count == 0){
            value.style.color = "black"
        }else if (count < 0){
            value.style.color = "red"
        }
    })
})

getRandomNumber = () => {
    if (count > 0){
        count = (Math.floor(Math.random() * 100)) * - 1
    }else if (count < 0){
        count = Math.floor(Math.random() * 100)
    }else{
        count = Math.floor(Math.random() * 100)
    }
}