var speedFast = sessionStorage.getItem('speedFast')
var accWrod = sessionStorage.getItem('accWrod')
var wpm = document.querySelector('.wpm')
var acc = document.querySelector('.acc')
var boxsvg = document.querySelectorAll(".boxSVG")
var countWpm = speedFast - accWrod ;
var countAcc = 0 ;


function updateWpm() {
    if (countWpm < speedFast) {
        countWpm++;
        var string = ( countWpm.toFixed(2) + '')
        string = string.replace('-' , '')
        wpm.textContent = string;
        setTimeout(updateWpm, 8);
    }
}
updateWpm() ;


function updateAcc() {
    if (countAcc < accWrod) {
        countAcc++;
        var string = (countAcc + '%')
        string = string.replace('-' , '')
        acc.textContent = string
        setTimeout(updateAcc, 8);
    }
}
updateAcc() ;


function hoverIcon (e , number) { 
    var path = document.querySelector(`.container > div:nth-child(${number}) > .boxSVG > svg > path`)
    e.addEventListener("mouseenter" , function() {path.setAttribute('fill' , "#5fbe00")})
    e.addEventListener("mouseleave" , function() {path.setAttribute('fill' , '#ffffff')})
}
boxsvg.forEach((e , index) => hoverIcon(e , index+1 ) )



boxsvg[0].addEventListener('click' , function() {
    sessionStorage.setItem('replay' , '1')
    window.location.href = 'index.html'
})

boxsvg[1].addEventListener('click' , function() {
    window.location.href = 'index.html'
    sessionStorage.setItem( 'next' , 'next' )
})