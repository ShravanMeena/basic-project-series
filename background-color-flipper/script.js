const bgColors = ["red","green","blue","pink"]
const bgHexColors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const clickBtn = document.querySelector(".clickMe")
const color = document.querySelector(".color")

window.addEventListener("DOMContentLoaded", function(){
    document.body.style.backgroundColor = "gray"
})

clickBtn.addEventListener("click", function(){
    let myHexbg = "#"

    for (let index = 0; index < 6; index++) {
        const randNum = Math.floor(Math.random() * bgHexColors.length)

        myHexbg += bgHexColors[randNum];
    }

    document.body.style.backgroundColor = myHexbg;

    color.textContent = myHexbg;
})