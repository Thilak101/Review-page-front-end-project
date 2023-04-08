const imgEle = document.querySelectorAll("img")
const textAreaShow = document.querySelector("#textAreaShow")
const textAreaEle = document.getElementById("textarea")
let switchColor = imgEle[0].getAttribute("data")

for (let i = 0; i < imgEle.length; i++) {
    imgEle[i].setAttribute("data", i)

}

for (let i = 0; i < imgEle.length; i++) {
    imgEle[i].addEventListener("click", () => {
        imgEle[i].style.filter = "grayScale(0%)"
        switchColor = imgEle[i].getAttribute("data")


        if (switchColor == 0) {
            imgEle[1].style.filter = "grayScale(100%)"
            imgEle[2].style.filter = "grayScale(100%)"
            imgEle[3].style.filter = "grayScale(100%)"
            imgEle[4].style.filter = "grayScale(100%)"

        }
        if (switchColor == 1) {
            imgEle[0].style.filter = "grayScale(100%)"
            imgEle[2].style.filter = "grayScale(100%)"
            imgEle[3].style.filter = "grayScale(100%)"
            imgEle[4].style.filter = "grayScale(100%)"

        }
        if (switchColor == 2) {
            imgEle[0].style.filter = "grayScale(100%)"
            imgEle[1].style.filter = "grayScale(100%)"
            imgEle[3].style.filter = "grayScale(100%)"
            imgEle[4].style.filter = "grayScale(100%)"

        }
        if (switchColor == 3) {
            imgEle[0].style.filter = "grayScale(100%)"
            imgEle[1].style.filter = "grayScale(100%)"
            imgEle[2].style.filter = "grayScale(100%)"
            imgEle[4].style.filter = "grayScale(100%)"

        }
        if (switchColor == 4) {
            imgEle[0].style.filter = "grayScale(100%)"
            imgEle[1].style.filter = "grayScale(100%)"
            imgEle[2].style.filter = "grayScale(100%)"
            imgEle[3].style.filter = "grayScale(100%)"

        }

    })


}

textAreaShow.onclick = () => {
    textAreaEle.style.height = "200px"
    textAreaEle.style.width = "300px"
    textAreaEle.style.opacity = "1"
}


