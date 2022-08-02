arrayImages = new Array("images/mainTela_CloneGatry.png", "images/AddTela_CloneGatry.png")
function slide1(){
    document.getElementById('img-id').src=arrayImages[0]
    setTimeout("slide2()", 3000)
}
function slide2(){
    document.getElementById('img-id').src=arrayImages[1]
    setTimeout("slide1()", 3000)
}
arrayImages2 = new Array("images/imc_1.jpeg", "images/imc_2.jpeg", "images/imc_3.jpeg")
function slide3(){
    document.getElementById('img-id2').src=arrayImages2[0]
    setTimeout("slide4()", 3000)
}
function slide4(){
    document.getElementById('img-id2').src=arrayImages2[1]
    setTimeout("slide5()", 3000)
}
function slide5(){
    document.getElementById('img-id2').src=arrayImages2[2]
    setTimeout("slide3()", 3000)
}