var iLetter = 1 ;
var iWord = 1 ;
var ifalse = 1 ;
var main = document.getElementById(`main`)
var cursor = document.getElementById("cursor")
var container = document.getElementById("container")
var htmlString = ``
var countw = 0
var numberTrueWord = 0 ;
var numberword = 0  ;
var numberLetter ; 
var numberTrueLetter ;
var numberLetterAdd ;
var keySound = document.getElementById('keySound') ; 


var clock = document.querySelector(".boxIsland > div:nth-child(1)")
var next = document.querySelector(".boxIsland > div:nth-child(2)")
var replay = document.querySelector(".boxIsland > div:nth-child(3)")
var add = document.querySelector(".boxIsland > div:nth-child(4)")

var ClockName = document.querySelectorAll(".name")[0]
var nextName = document.querySelectorAll(".name")[1]
var replayName = document.querySelectorAll(".name")[2]
var addName = document.querySelectorAll(".name")[3]

var clocksvg = document.querySelector(".boxIsland > div:nth-child(1) > svg")
var nextsvg = document.querySelector(".boxIsland > div:nth-child(2) > svg")
var replaysvg = document.querySelector(".boxIsland > div:nth-child(3) > svg")
var addsvg = document.querySelector(".boxIsland > div:nth-child(4) > svg")


var body = document.querySelector(".body")
var timer = document.querySelector('timer');
var timer1 = document.querySelector('.timer1');
var timer2 = document.querySelector('.timer2');
var timer3 = document.querySelector('.timer3');
var timer4 = document.querySelector('.timer4');
var container = document.getElementById('container');
var boxIsland = document.querySelector(".boxIsland")
var dynamicIsland = document.getElementById("dynamicIsland")


var allow = true
var testTimer = false
var testTimer2 = true
var countdownInterval
var data
var countClickNext = 0

var texts2 = ["the sun rose slowly in the morning sky birds chirped happily in the trees flowers swayed gently in the breeze a cat purred contentedly on the windowsill children skipped and played in the yard a dog wagged its tail eagerly at the sight of its owner a butterfly flitted from flower to flower in search of nectar a squirrel chattered noisily from its perch in the tree a bee buzzed busily among the blossoms a bunny hopped playfully across the grass the smell of freshly cut grass filled the air laughter echoed through the neighborhood as families enjoyed the sunny day friends gathered for a picnic in the park sandwiches were shared and stories were told memories were made under the clear blue sky" , "the moon glowed softly in the night sky stars twinkled like diamonds above the quiet town crickets chirped rhythmically in the grass frogs croaked in the nearby pond owls hooted from their perches in the trees a gentle breeze rustled the leaves of the tall oaks fireflies danced in the darkness, lighting up the night a cat prowled silently along the fence a dog barked in the distance, breaking the silence a mouse scurried across the ground, seeking shelter from the night a rabbit nibbled on clover under the moonlight the scent of jasmine filled the air, carried by the breeze laughter echoed from a nearby house as friends gathered for a late-night chat memories were made under the stars, illuminated by the moon's soft glow" , "the rain fell softly on the roof of the house puddles formed on the sidewalk as the water pooled together children splashed happily in the rain, their laughter echoing through the streets umbrellas bobbed up and down as people hurried along the wet pavement a dog shook itself dry, sending droplets flying in all directions the smell of petrichor filled the air, a comforting scent after the rain flowers glistened with raindrops, their colors vibrant against the gray sky a rainbow appeared in the distance, its colors brightening up the gloomy day a snail emerged from its shell, gliding slowly across the damp ground birds took shelter under the eaves of buildings, chirping contentedly as they waited for the rain to stop the sound of raindrops tapping against the window was soothing, a lullaby for the soul"]


var texts = ['cat dog hat run sun sit box egg lip pet pig fun bat tap bus cup pen nut fan web hop top leg pot map pan tap bed egg cup hut log jet ten fit hid mud jig van win bit pen dot nun wig kit fun bun sun lid rat fox jog key cod gun rug pad log sit pot run bun tan pet lid mop jig win dot nut bug log jog sad pin hug tap map pen bin pot lid ram nag tab rat sit tag nod big cod jug fun nun had hot dug dug nag rag nag wag tin rip' , "an apple fell from the tree followed by a banana a cat quickly approached followed by a curious dog an elephant appeared in the distance while a fish swam gracefully in the nearby pond the grass was green and the house stood tall against the blue sky ice cream was melting in the sun as children played and laughed suddenly a kangaroo jumped by followed by a lion's roar a monkey swung from tree to tree searching for its next meal in a cozy nest a family of birds rested peacefully nearby an orange sunset painted the sky as penguins waddled along the icy shore the queen bee buzzed around overseeing her bustling hive a rabbit hopped by disappearing into the bushes the warmth of the sun embraced everything filling the world with light and life" , "a dog barked loudly while chasing a ball children laughed and played in the park birds sang sweet melodies in the trees colorful flowers bloomed in the garden butterflies fluttered gracefully in the air a squirrel scurried up a tree trunk to find its hidden stash of nuts a cat stretched lazily in the warm sun a gentle breeze rustled the leaves of the tall oak trees the sky was clear and the sun shone brightly overhead a stream flowed gently nearby ducks paddled in the calm waters a rabbit nibbled on fresh green grass a friendly neighbor waved hello as they passed by the smell of freshly baked cookies wafted from a nearby bakery happiness filled the air as friends gathered to enjoy each other's company" , texts2[0] , texts2[1] , texts2[2] ]

addToHtml(texts[0])


var letter = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${iLetter})`)
var word = document.querySelector(`#main > div:nth-child(${iWord})`)
var letterAdd  = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${ifalse})`)



var firstWord = document.querySelector(".main > .word:first-child")
var firstletter = document.querySelector(".main > .word:first-child > div:first-child ")
container.style.height = firstletter.clientHeight * 3 + 8 * 3 + "px"
var mainPositon = firstletter.clientHeight + 8
let items = Array.from( document.querySelectorAll('.word') );


cursor.style.height = firstletter.clientHeight + "px"

findLine(false);
cursorFunction(letter , false)


    document.addEventListener('keydown' , function(e) {
            if(allow) {
        if ( (e.keyCode >= 65 && e.keyCode <= 90) || 
        e.keyCode === 188 || 
        e.keyCode === 190 || 
        e.keyCode === 222 ||
        e.key == ' ' ||
        e.key == 'Backspace' ) {

            keySound.currentTime = 0;
            keySound.play() ;
        

        letter = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${iLetter})`)
        word = document.querySelector(`#main > div:nth-child(${iWord})`)
        letterAdd  = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${ifalse})`)

        //for space
        if (e.key != 'Backspace') {
            // -----------------------for space
            if (e.key == ' ' && iWord < main.children.length ){
                var space = false
                Array.from( word.children).forEach(function (e) { 
                    if ( e.classList.contains("done") ) {
                        space = true
                    }
                })
                if (space) {
                    Array.from( word.children).forEach(function (e) {
                        if ( e.classList.contains("false") ||  e.classList.contains("didNotWrite") ) {
                            word.classList.add("wordFalse")
                        }
                    })
                    if ( !word.classList.contains("wordFalse")) { numberTrueWord++ }
                    numberword++ ;
                    iWord++
                    word = document.querySelector(`#main > div:nth-child(${iWord})`)
                    iLetter = 1
                    ifalse = 1
                    letter = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${iLetter })`)
                    cursorFunction(letter , false)
                    testw = true ;
                    countw++ ;

                    console.log(numberword + '  number of all')
                    console.log(numberTrueWord + '  number of ture')
                }
            }//for spacee 
            
            
            //for letter add
            else if ( ifalse > word.children.length && e.key != ' ' ) { 
                word.innerHTML += `<div>${e.key}</div>`
                letterAdd =  document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${ifalse})`)
                letterAdd.classList.add('letterAdd')
                letterAdd.classList.add('false')
                ifalse++
                document.querySelectorAll(".specialWord").forEach((e) => e.classList.remove('specialWord'))
                cursorFunction(letterAdd , true)
                findLine(false)
                
            }// for letter add


            else {//test the letter
                if ( (letter.innerHTML == e.key && e.key != ' ') && (letter.classList[0] != 'letterAdd' ) ){
                    letter.classList.add("true")
                    letter.classList.add("done")
                    word.classList.add("word")
                    letter.classList.remove('false')
                    letter.classList.remove('didNotWrite')
                    iLetter < word.children.length + 1 ? iLetter++ : iLetter
                    ifalse++
                } else if(e.key != ' ') {
                    letter.classList.add('false')
                    letter.classList.add('done')
                    word.classList.add("word") 
                    letter.classList.remove('true')
                    iLetter < word.children.length + 1 ? iLetter++ : iLetter
                    ifalse++
                }if (e.key != ' '){
                cursorFunction(letter , true)
                testw = false ;
                countw = 0 ;
                timerFunction();
                }
            }//test the letter
            
            
        }// else of backspce if
        // remove new letter
        else if (word.getElementsByClassName("letterAdd").length > 0) { 
            word.removeChild(word.lastChild)
            ifalse--
            var letterC = word.lastChild
            document.querySelectorAll(".specialWord").forEach((e) => e.classList.remove('specialWord'))
            cursorFunction(letterC , true)
            findLine(false);
        }// remove new letter
        
        
        
        else { // for delettt
            iLetter > 1 ? iLetter-- : iLetter
            ifalse > 1 ? ifalse-- : ifalse
            letter =  document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${iLetter})`)
            cursorFunction(letter , false)
            letter.classList.remove('true')
            letter.classList.remove('false')
            letter.classList.remove('done') 
            if ( iLetter == 1 && iWord != 1 ) {
                if (word.previousElementSibling.classList.contains("word")) {
                    countw++
                    if ( countw == 2) {
                        if ( word.classList.contains("wordFalse") ) {
                            numberTrueWord-- ;
                            console.log('from the if') ;
                        }
                        numberword-- ;
                        iWord > 1 ? iWord-- : iWord
                    word = document.querySelector(`#main > div:nth-child(${iWord})`)
                    word.classList.remove('wordFalse')
                    iLetter = word.getElementsByClassName("done").length + 1
                    ifalse =  word.getElementsByClassName("done").length + word.getElementsByClassName("letterAdd").length + 1
                    var i2letter = iLetter-1
                    var letter2 = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${i2letter})`)
                    countw = 0 ;
                    if ( word.getElementsByClassName("letterAdd").length > 0) {
                        var letterC = word.lastChild
                        cursorFunction(letterC , true)
                    }else { 
                        cursorFunction(letter2 , true)
                    }
                    }
                }
            } 
        }// for delettt

        //------------------- for the auto space
        if ( word.classList.contains("specialWord") ) {
            findLine(true)
            document.querySelectorAll(".worddone").forEach (function(e) {
                e.classList.remove("word")
                e.style.display = "none"
                items = Array.from( document.querySelectorAll('.word') );
            })
            word.classList.remove("specialWord")
            cursorFunction(letter , false)
            findLine(false)
        }
        //------------------- for the auto space
}
}


// for clc the acc
numberLetterAdd = this.documentElement.querySelectorAll('.letterAdd').length ;
numberLetter = document.querySelectorAll('.done').length + numberLetterAdd ;
numberTrueLetter = Array.from(document.querySelectorAll('.done')).filter(e => e.classList.contains("true")).length 
// for clc the acc


})


function cursorFunction ( currentElement , withWidth ) {
    var elementWidth = 0 ;
    if ( withWidth ) {
        elementWidth = currentElement.clientWidth
    }
        var Position = currentElement.getBoundingClientRect();
        cursor.style.left = Position.left + elementWidth +"px"
        cursor.style.top = (Position.top + window.pageYOffset) + 'px';
}

function positionAbsulote(element , fixedElement) { 
    var timePostion = fixedElement.getBoundingClientRect();
    element.style.left = timePostion.left + 'px';
    element.style.top = timePostion.top + 'px';
}

function findLine( firstLine ) {
    var firstWrod2 = document.querySelector('.main > .word');
    var WordTop = firstWrod2.getBoundingClientRect().top
    if ( firstLine )
    items.map(item => {
        const pos = item.getBoundingClientRect();
            if (pos.top == WordTop) {
                item.classList.add("worddone")
            }else {
                return ;
            }
        });
        if ( !firstLine ) {
            var count = 0
            items.map ( item => { 
                const pos = item.getBoundingClientRect();
                if ( pos.top != WordTop){
                    WordTop = pos.top
                    count++
                    if(count > 1)
                    item.classList.add("specialWord")
                }
            })
        }
    }



    function checkScreenSize() {
        var viewportWidth = window.innerWidth;
        if (viewportWidth < window.innerWidth ) {
            letter.classList.contains("done") ? cursorFunction(letter , true) : cursorFunction(letter , false)
            document.querySelectorAll(".specialWord").forEach((e) => e.classList.remove('specialWord'))
            findLine(false)
        } else {
            letter.classList.contains("done") ? cursorFunction(letter , true) : cursorFunction(letter , false)
            document.querySelectorAll(".specialWord").forEach((e) => e.classList.remove('specialWord'))
            findLine(false)
        }
    }
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);






function addToHtml(text){
        var count = text.length ;
        htmlString = ``
        htmlString += '<div class="word">'
        for (a = 0 ; a < count ; a++ ) {
            if ( text[a] == " ")
            htmlString += `</div> <div class="word">`
        else
        htmlString += `<div class='didNotWrite letter' id="letter">${text[a]}</div>`
        }
        htmlString+= `</div>`
        main.innerHTML = ``
        main.innerHTML += htmlString ;
    }
    
    
    function refreshText(theText) {
        addToHtml(theText)
        iLetter = 1 ;
        iWord = 1 ;
        ifalse = 1 ;
        letter = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${iLetter})`)
        word = document.querySelector(`#main > div:nth-child(${iWord})`)
        letterAdd  = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${ifalse})`)
        cursorFunction(letter , false)
        items = Array.from( document.querySelectorAll('.word') );
        findLine(false)
    }

    add.addEventListener("click" , function() {
        if ( !boxIsland.classList.contains("inp") ) {
            boxIsland.classList.add("inp")
            clock.style.display = 'none'
            next.style.display = 'none'
            replay.style.display = 'none'
            var textAdded = document.createElement("input")
            boxIsland.appendChild(textAdded)
            textAdded.style.width = 80 + '%'
            textAdded.style.background = "transparent"
            textAdded.style.caretColor = '#76ec00'
            textAdded.style.color = 'white'
            textAdded.style.fontSize = 26 + 'px'
            textAdded.style.border = 'none'
            textAdded.style.outline = 'none'
            textAdded.style.paddingRight = 10 + "px"
            textAdded.focus();
            showName(add , addName , false )
            allow = false
    
            document.addEventListener('keydown' , function(e) {
                if ( e.key == "Enter" &&  boxIsland.classList.contains("inp") ) {

                    if ( textAdded.value != '' ) {
                        console.log(textAdded.value)
                        refreshText(textAdded.value)
                        texts.push(textAdded.value)
                        countClickNext = texts.length - 1
                        allow = true
                        boxIsland.removeChild(textAdded)
                        clock.style.display = 'block'
                        next.style.display = 'block'
                        replay.style.display = 'block'
                        showName(add , addName , true )
                        boxIsland.classList.remove("inp")
                    }else {
                        countClickNext = texts.length - 1
                        allow = true
                        boxIsland.removeChild(textAdded)
                        clock.style.display = 'block'
                        next.style.display = 'block'
                        replay.style.display = 'block'
                        showName(add , addName , true )
                        boxIsland.classList.remove("inp")
                    }
                }
            })
        }
    })


    next.addEventListener("click" , function() {
        countClickNext++
        countClickNext == texts.length ? countClickNext = 0 : countClickNext
        refreshText(texts[countClickNext])
    })

// replayreplay
    replay.addEventListener("click" , replayClick )
    function replayClick() {
        numberTrueWord = 0 ;
        refreshText(texts[countClickNext])
        clearInterval(countdownInterval);
        allow = true ;
        testTimer2 = true
        if (data != undefined){
            clock.removeChild(clock.firstChild)
            clock.insertAdjacentHTML('afterbegin', `<div>${data}</div>`);
            clock.firstChild.style.width = 'max-content'
        }
    }



    function restart() {
        refreshText(texts[countClickNext])
        clearInterval(countdownInterval);
        allow = true ;
        testTimer2 = true
        if (data != undefined){
            clock.removeChild(clock.firstChild)
            clock.insertAdjacentHTML('afterbegin', `<div>${data}</div>`);
            clock.firstChild.style.width = 'max-content'
        }
    }


var durations = [15000 , 30000 , 60000 , 120000]
var iDurations = 0
function clickOnTime(element , string , duration) {
    element.addEventListener('click' , function(  ) {
        numberTrueWord = 0 ;
        data = string
        testTimer = true
        testTimer2 = true
        iDurations = duration
        clock.style.transition = 'all 0s ease'
        element.style.left = 0
        clock.removeChild(clock.firstChild)
        clock.insertAdjacentHTML('afterbegin', `<div>${string}</div>`);
        clock.firstChild.style.width = 'max-content'
        document.querySelector('.name').style.display = 'none'
        clock.classList.add("timerOn")
        clocksvg.style.display = 'none'
        clock.style.padding = 19 + 'px'

        // add the replay function replay ;
        replayClick() ;

    })
}
clickOnTime(timer1 , '0 : 15' , 0)
clickOnTime(timer2 , '0 : 30' , 1)
clickOnTime(timer3 , '1 : 00' , 2)
clickOnTime(timer4 , '2 : 00' , 3)

var timers = ['' ,  [timer1 , '0 : 15' , 0]
, [timer2 , '0 : 30' , 1]
,  [timer3 , '1 : 00' , 2] , ''
, '' , '' , [timer4 , '2 : 00' , 3] ]

function timeFromContact( element , string , duration ) {
    data = string
    testTimer = true
    testTimer2 = true
    iDurations = duration
    clock.style.transition = 'all 0s ease'
    element.style.left = 0
    clock.removeChild(clock.firstChild)
    clock.insertAdjacentHTML('afterbegin', `<div>${string}</div>`);
    clock.firstChild.style.width = 'max-content'
    document.querySelector('.name').style.display = 'none'
    clock.classList.add("timerOn")
    clocksvg.style.display = 'none'
    clock.style.padding = 19 + 'px'
}



boxIsland.addEventListener('mouseenter' , function() {
    dynamicIsland.style.width = dynamicIsland.clientHeight * 8 + 'px'
    boxIsland.style.width = 100 + '%'
    if(clock.classList.contains('timerOn')) {
        clock.style.width = 100 / 4 + '%'
        Array.from(boxIsland.children).forEach(e => e.style.width = 100 / 4 + '%')
        Array.from(boxIsland.children).forEach(e => e.style.padding = 19 + 'px')
        Array.from(boxIsland.children).forEach(e => e.style.opacity = 1)
        Array.from(boxIsland.children).forEach(e => e.classList.contains("timerOn") ? e : e.style.display = "block")


    }else {
        Array.from(boxIsland.children).forEach(e => e.style.opacity = 1)
    }

})

function mouseleave() {
    dynamicIsland.style.width = dynamicIsland.clientHeight * 5 + 'px'
    if ( clock.classList.contains('timerOn') ) { 
        console.log('form the mouse leave of time on ')
        Array.from(boxIsland.children).forEach(e => e.classList.contains("timerOn") ? e : e.style.display = "none")
        clock.style.width = 100 + '%'
        boxIsland.style.width = clock.firstChild.clientWidth * 2 + 'px'
        dynamicIsland.style.width = boxIsland.clientWidth + 'px'

        if ( !testClickClock ) { 
            next.style.transition = 'all 1s ease'
            replay.style.transition = 'all 1s ease'
            add.style.transition = 'all 1s ease'

            timer1.style.left = 0 + '%'
            timer2.style.left = 0 + '%'
            timer3.style.left = 0 + '%'
            timer4.style.left = 0 + '%'

            timer1.style.opacity = '0'
            timer2.style.opacity = '0'
            timer3.style.opacity = '0'
            timer4.style.opacity = '0'

            hoverIcon(clock , 1 , "#ffffff")
            document.querySelector('.name').style.display = 'block'
            testClickClock = !testClickClock
        }

    }
    else { 
    Array.from(boxIsland.children).forEach(e => e.style.opacity = 0.15)
    }
}
boxIsland.addEventListener( 'mouseleave' , mouseleave )


function hoverIcon (icon , index , leave) {
    var path = document.querySelector(`.boxIsland > div:nth-child(${index}) > svg > path`)
    icon.addEventListener("mouseenter" , function() {
        path.setAttribute('fill' , "#5fbe00")
    })
    
    icon.addEventListener("mouseleave" , function() {
        path.setAttribute('fill' , leave)
    })
}

hoverIcon(clock , 1 , "#ffffff")
hoverIcon(next , 2 , "#ffffff")
hoverIcon(replay , 3 , "#ffffff")
hoverIcon(add , 4 , "#ffffff")


var testClickClock = true
clock.addEventListener('click' , function() { 
    if ( testClickClock ) {
        next.style.transition = 'all 0s ease'
        replay.style.transition = 'all 0s ease'
        add.style.transition = 'all 0s ease'

        next.style.display = 'none'
        replay.style.display = 'none'
        add.style.display = 'none'

        timer1.style.opacity = '1'
        timer2.style.opacity = '1'
        timer3.style.opacity = '1'
        timer4.style.opacity = '1'

        timer1.style.left = boxIsland.clientWidth * 0.40 - timer1.clientWidth - 40  + 'px'
        timer2.style.left = boxIsland.clientWidth * 0.60 - timer2.clientWidth - 40  + 'px'
        timer3.style.left = boxIsland.clientWidth * 0.80 - timer3.clientWidth - 40 + 'px'
        timer4.style.left = boxIsland.clientWidth - timer4.clientWidth - 40 + 'px'

        document.querySelector('.name').style.display = 'none'

        hoverIcon(clock , 1 , "#5fbe00")
        testClickClock = !testClickClock
    }else{
        next.style.transition = 'all 1s ease'
        replay.style.transition = 'all 1s ease'
        add.style.transition = 'all 1s ease'

        next.style.display = 'block'
        replay.style.display = 'block'
        add.style.display = 'block'

        timer1.style.left = 0 + '%'
        timer2.style.left = 0 + '%'
        timer3.style.left = 0 + '%'
        timer4.style.left = 0 + '%'

        timer1.style.opacity = '0'
        timer2.style.opacity = '0'
        timer3.style.opacity = '0'
        timer4.style.opacity = '0'

        hoverIcon(clock , 1 , "#ffffff")
        document.querySelector('.name').style.display = 'block'
        testClickClock = !testClickClock
    }
})


function timerFunction() {
    if(testTimer && testTimer2) {
        testTimer2 = false
        var startTime = new Date().getTime(); 
        var duration = durations[iDurations]; 
        countdownInterval = setInterval(function() {
            var currentTime = new Date().getTime();
            var elapsedTime = currentTime - startTime; 
            var millisecondsRemaining = duration - elapsedTime; 
            var seconds = Math.floor(millisecondsRemaining / 1000);
            var minutes = Math.floor(seconds / 60);
            var remainingSeconds = seconds % 60;
            if ( millisecondsRemaining <= 0 ) {
                clearInterval(countdownInterval);
                allow = false
                sessionStorage.setItem('numberOfWord' , numberTrueWord.toString())
                sessionStorage.setItem('speedFast' , (( numberTrueWord * 60000 ) / duration).toFixed(2) )
                sessionStorage.setItem('accWrod' , ((numberTrueLetter * 100) / numberLetter).toFixed(2) )
                sessionStorage.setItem('duration' , ( duration / 15000 ) )
                sessionStorage.setItem('countClickNext' , countClickNext)
                console.log(countClickNext)
                window.location.href = 'contact.html'
            }
            if (remainingSeconds < 10) {
                remainingSeconds = '0' + remainingSeconds;
            }
            clock.removeChild(clock.firstChild)
            clock.insertAdjacentHTML('afterbegin', `<div></div>`);
            clock.firstChild.textContent =  minutes + ' : ' + remainingSeconds;
            clock.firstChild.style.width = 'max-content'
        }, 1000); 
    }
}


function showName ( element , name , bool ) {
    element.addEventListener('mouseenter' , function() {
            name.style.opacity = bool ? 1 : 0  ;
    })
    element.addEventListener('mouseleave' , function() {
        name.style.opacity = 0 ;
    })
}
showName( clock , ClockName , true )
showName( next , nextName , true )
showName( replay , replayName , true )
showName( add , addName , true )


if ( sessionStorage.getItem('replay') == '1' ) {
    sessionStorage.setItem('replay' , '2' )
    replayFromContact() ;
}   

function replayFromContact() {
    clock.classList.add('timerOn')
    var t = timers[ parseInt(sessionStorage.getItem('duration')) ]
    console.log(t)
        timeFromContact( t[0] , t[1] , t[2] )
        mouseleave() ;
        refreshText(texts[parseInt(sessionStorage.getItem('countClickNext'))])
        clearInterval(countdownInterval);
        clock.style.opacity = 1 ;
    }


if ( sessionStorage.getItem('next') == 'next') {
    sessionStorage.setItem('next' , '')
    console.log(sessionStorage.getItem('countClickNext') + ' form the if of nextcontact')
    countClickNext = parseInt( sessionStorage.getItem('countClickNext') );
    countClickNext++ ;
    countClickNext == texts.length ? countClickNext = 0 : countClickNext ;
    refreshText(texts[countClickNext]) ;
}