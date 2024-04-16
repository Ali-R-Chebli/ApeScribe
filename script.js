var iLetter = 1;
var iWord = 1;
var ifalse = 1;
var main = document.getElementById(`main`)
var cursor = document.getElementById("cursor")
var container = document.getElementById("container")
var htmlString = ``
var countw = 0
var clock = document.querySelector(".boxIsland > div:nth-child(1)")
var next = document.querySelector(".boxIsland > div:nth-child(2)")
var replay = document.querySelector(".boxIsland > div:nth-child(3)")
var add = document.querySelector(".boxIsland > div:nth-child(4)")
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
var texts = ['cat dog hat run sun sit box egg lip pet pig fun bat tap bus cup pen nut fan web hop top leg pot map pan tap bed egg cup hut log jet ten fit hid mud jig van win bit pen dot nun wig kit fun bun sun lid rat fox jog key cod gun rug pad log sit pot run bun tan pet lid mop jig win dot nut bug log jog sad pin hug tap map pen bin pot lid ram nag tab rat sit tag nod big cod jug fun nun had hot dug dug nag rag nag wag tin rip', 'ali chebli', 'ali zein', 'razi', 'abd al rahman', 'hadi hmouda', 'ousama']

addToHtml(texts[0])

var letter = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${iLetter})`)
var word = document.querySelector(`#main > div:nth-child(${iWord})`)
var letterAdd = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${ifalse})`)



var firstWord = document.querySelector(".main > .word:first-child")
var firstletter = document.querySelector(".main > .word:first-child > div:first-child ")
container.style.height = firstletter.clientHeight * 3 + 8 * 3 + "px"
var mainPositon = firstletter.clientHeight + 8
let items = Array.from(document.querySelectorAll('.word'));


cursor.style.height = firstletter.clientHeight + "px"

findLine(false);
cursorFunction(letter, false)


document.addEventListener('keydown', function (e) {
    if (allow) {
        if (e.keyCode >= 65 && e.keyCode <= 90 || e.key == ' ' || e.key == 'Backspace') {

            letter = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${iLetter})`)
            word = document.querySelector(`#main > div:nth-child(${iWord})`)
            letterAdd = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${ifalse})`)

            //for space
            if (e.key != 'Backspace') {
                // -----------------------for space
                if (e.key == ' ' && iWord < main.children.length) {
                    var space = false
                    Array.from(word.children).forEach(function (e) {
                        if (e.classList.contains("done")) {
                            space = true
                        }
                    })
                    if (space) {
                        Array.from(word.children).forEach(function (e) {
                            if (e.classList.contains("false") || e.classList.contains("didNotWrite")) {
                                word.classList.add("wordFalse")
                            }
                        })
                        iWord++
                        word = document.querySelector(`#main > div:nth-child(${iWord})`)
                        iLetter = 1
                        ifalse = 1
                        letter = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${iLetter})`)
                        cursorFunction(letter, false)
                        testw = true;
                        countw++
                    }

                }//for spacee 


                //for letter add
                else if (ifalse > word.children.length && e.key != ' ') {
                    word.innerHTML += `<div>${e.key}</div>`
                    letterAdd = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${ifalse})`)
                    letterAdd.classList.add('letterAdd')
                    letterAdd.classList.add('false')
                    ifalse++
                    document.querySelectorAll(".specialWord").forEach((e) => e.classList.remove('specialWord'))
                    cursorFunction(letterAdd, true)
                    findLine(false)

                }// for letter add


                else {//test the letter
                    if ((letter.innerHTML == e.key && e.key != ' ') && (letter.classList[0] != 'letterAdd')) {
                        letter.classList.add("true")
                        letter.classList.add("done")
                        word.classList.add("word")
                        letter.classList.remove('false')
                        letter.classList.remove('didNotWrite')
                        iLetter < word.children.length + 1 ? iLetter++ : iLetter
                        ifalse++
                    } else if (e.key != ' ') {
                        letter.classList.add('false')
                        letter.classList.add('done')
                        word.classList.add("word")
                        letter.classList.remove('true')
                        iLetter < word.children.length + 1 ? iLetter++ : iLetter
                        ifalse++
                    } if (e.key != ' ') {
                        cursorFunction(letter, true)
                        testw = false;
                        countw = 0;
                        // testTimer = true
                        timerFunction();
                    }
                }//test the letter


            }// else of backspce if
            // remove new letter
            else if (word.getElementsByClassName("letterAdd").length > 0) {
                word.removeChild(word.lastChild)
                ifalse--
                var letterC = word.lastChild
                cursorFunction(letterC, true)
            }// remove new letter



            else { // for delettt
                iLetter > 1 ? iLetter-- : iLetter
                ifalse > 1 ? ifalse-- : ifalse
                letter = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${iLetter})`)
                cursorFunction(letter, false)
                letter.classList.remove('true')
                letter.classList.remove('false')
                letter.classList.remove('done')
                if (iLetter == 1 && iWord != 1) {
                    if (word.previousElementSibling.classList.contains("word")) {
                        countw++
                        if (countw == 2) {
                            iWord > 1 ? iWord-- : iWord
                            word = document.querySelector(`#main > div:nth-child(${iWord})`)
                            word.classList.remove('wordFalse')
                            iLetter = word.getElementsByClassName("done").length + 1
                            ifalse = word.getElementsByClassName("done").length + word.getElementsByClassName("letterAdd").length + 1
                            var i2letter = iLetter - 1
                            var letter2 = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${i2letter})`)
                            countw = 0;
                            if (word.getElementsByClassName("letterAdd").length > 0) {
                                var letterC = word.lastChild
                                cursorFunction(letterC, true)
                            } else {
                                cursorFunction(letter2, true)
                            }
                        }
                    }
                }
            }// for delettt

            //------------------- for the auto space
            if (word.classList.contains("specialWord")) {
                findLine(true)
                document.querySelectorAll(".worddone").forEach(function (e) {
                    e.classList.remove("word")
                    e.style.display = "none"
                    items = Array.from(document.querySelectorAll('.word'));
                })
                word.classList.remove("specialWord")
                cursorFunction(letter, false)
                findLine(false)
            }
            //------------------- for the auto space
        }
    }
})


function cursorFunction(currentElement, withWidth) {
    var elementWidth = 0;
    if (withWidth) {
        elementWidth = currentElement.clientWidth
    }
    var Position = currentElement.getBoundingClientRect();
    cursor.style.left = Position.left + elementWidth + "px"
    cursor.style.top = (Position.top + window.pageYOffset) + 'px';
}

function positionAbsulote(element, fixedElement) {
    var timePostion = fixedElement.getBoundingClientRect();
    element.style.left = timePostion.left + 'px';
    element.style.top = timePostion.top + 'px';
}

function findLine(firstLine) {
    var firstWrod2 = document.querySelector('.main > .word');
    var WordTop = firstWrod2.getBoundingClientRect().top
    if (firstLine)
        items.map(item => {
            const pos = item.getBoundingClientRect();
            if (pos.top == WordTop) {
                item.classList.add("worddone")
            } else {
                return;
            }
        });
    if (!firstLine) {
        var count = 0
        items.map(item => {
            const pos = item.getBoundingClientRect();
            if (pos.top != WordTop) {
                WordTop = pos.top
                count++
                if (count > 1)
                    item.classList.add("specialWord")
            }
        })
    }
}



function checkScreenSize() {
    var viewportWidth = window.innerWidth;
    if (viewportWidth < window.innerWidth) {
        letter.classList.contains("done") ? cursorFunction(letter, true) : cursorFunction(letter, false)
        document.querySelectorAll(".specialWord").forEach((e) => e.classList.remove('specialWord'))
        findLine(false)
        // positionAbsulote(timer , container)
    } else {
        letter.classList.contains("done") ? cursorFunction(letter, true) : cursorFunction(letter, false)
        document.querySelectorAll(".specialWord").forEach((e) => e.classList.remove('specialWord'))
        findLine(false)
        // positionAbsulote(timer , container)
    }
}
checkScreenSize();
window.addEventListener('resize', checkScreenSize);






function addToHtml(text) {
    var count = text.length;
    htmlString = ``
    htmlString += '<div class="word">'
    for (a = 0; a < count; a++) {
        if (text[a] == " ")
            htmlString += `</div> <div class="word">`
        else
            htmlString += `<div class='didNotWrite letter' id="letter">${text[a]}</div>`
    }
    htmlString += `</div>`
    main.innerHTML = ``
    main.innerHTML += htmlString;
}


function refreshText(theText) {
    addToHtml(theText)
    iLetter = 1;
    iWord = 1;
    ifalse = 1;
    letter = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${iLetter})`)
    word = document.querySelector(`#main > div:nth-child(${iWord})`)
    letterAdd = document.querySelector(`#main > div:nth-child(${iWord}) > div:nth-child(${ifalse})`)
    cursorFunction(letter, false)
    items = Array.from(document.querySelectorAll('.word'));
    findLine(false)
}

// var textArea = document.getElementById('addText')
// add.addEventListener("click" , function() {
//     allow = false
//     textArea.style.display = `block`
// })

next.addEventListener("click", function () {
    countClickNext++
    countClickNext == texts.length ? countClickNext = 0 : countClickNext
    refreshText(texts[countClickNext])
})


replay.addEventListener("click", function () {
    refreshText(texts[countClickNext])
    clearInterval(countdownInterval);
    allow = true;
    testTimer2 = true
    if (data != undefined) {
        clock.removeChild(clock.firstChild)
        clock.insertAdjacentHTML('afterbegin', `<div>${data}</div>`);
    }
})


document.addEventListener('keydown', function (e) {
    if (e.key == "Enter" && window.getComputedStyle(textArea).display == "block") {
        refreshText(textArea.value)
        texts.push(textArea.value)
        countClickNext = texts.length - 1
        textArea.style.display = `none`
        allow = true
    }
})



var durations = [15000, 30000, 60000, 120000]
var iDurations = 0


function clickOnTime(element, string, duration) {
    element.addEventListener('click', function () {
        data = string
        testTimer = true
        testTimer2 = true
        iDurations = duration
        clock.style.transition = 'all 0s ease'
        element.style.left = 0
        clock.removeChild(clock.firstChild)
        clock.insertAdjacentHTML('afterbegin', `<div>${string}</div>`);
        document.querySelector('.name').style.display = 'none'
        clock.classList.add("timerOn")
    })
}

clickOnTime(timer1, '0 : 15', 0)
clickOnTime(timer2, '0 : 30', 1)
clickOnTime(timer3, '1 : 00', 2)
clickOnTime(timer4, '2 : 00', 3)



boxIsland.addEventListener('mouseenter', function () {
    dynamicIsland.style.width = dynamicIsland.clientHeight * 8 + 'px'
    boxIsland.style.width = 100 + '%'
    if (clock.classList.contains('timerOn')) {
        clock.style.width = 100 / 4 + '%'
        Array.from(boxIsland.children).forEach(e => e.style.width = 100 / 4 + '%')
        Array.from(boxIsland.children).forEach(e => e.style.padding = 19 + 'px')
        Array.from(boxIsland.children).forEach(e => e.style.opacity = 1)
    } else {
        Array.from(boxIsland.children).forEach(e => e.style.opacity = 1)
    }
})


boxIsland.addEventListener('mouseleave', function () {
    dynamicIsland.style.width = dynamicIsland.clientHeight * 5 + 'px'
    if (clock.classList.contains('timerOn')) {
        Array.from(boxIsland.children).forEach(e => e.classList.contains("timerOn") ? e : e.style.width = "0")
        Array.from(boxIsland.children).forEach(e => e.classList.contains("timerOn") ? e : e.style.padding = "0")
        clock.style.width = 100 + '%'
        boxIsland.style.width = 'max-content'
        console.log(boxIsland.clientWidth)
        dynamicIsland.style.width = boxIsland.clientWidth / 2.3 + 'px'
    } else {
        Array.from(boxIsland.children).forEach(e => e.style.opacity = 0)
    }

})


function hoverIcon(icon, index, leave) {
    var path = document.querySelector(`.boxIsland > div:nth-child(${index}) > svg > path`)
    icon.addEventListener("mouseenter", function () {
        path.setAttribute('fill', "#5fbe00")
    })

    icon.addEventListener("mouseleave", function () {
        path.setAttribute('fill', leave)
    })
}
hoverIcon(clock, 1, "#ffffff")
hoverIcon(next, 2, "#ffffff")
hoverIcon(replay, 3, "#ffffff")
hoverIcon(add, 4, "#ffffff")

var testClickClock = true
clock.addEventListener('click', function () {
    if (testClickClock) {
        next.style.transition = 'all 0s ease'
        replay.style.transition = 'all 0s ease'
        add.style.transition = 'all 0s ease'
        next.style.transform = 'scale(0)'
        replay.style.transform = 'scale(0)'
        add.style.transform = 'scale(0)'
        timer1.style.opacity = '1'
        timer2.style.opacity = '1'
        timer3.style.opacity = '1'
        timer4.style.opacity = '1'
        timer1.style.left = 80 + '%'
        timer2.style.left = 160 + '%'
        timer3.style.left = 240 + '%'
        timer4.style.left = 300 + '%'
        document.querySelector('.name').style.display = 'none'
        hoverIcon(clock, 1, "#5fbe00")
        testClickClock = !testClickClock
    } else {
        next.style.transition = 'all 1s ease'
        replay.style.transition = 'all 1s ease'
        add.style.transition = 'all 1s ease'
        next.style.transform = 'scale(1)'
        replay.style.transform = 'scale(1)'
        add.style.transform = 'scale(1)'
        timer1.style.left = 0 + '%'
        timer2.style.left = 0 + '%'
        timer3.style.left = 0 + '%'
        timer4.style.left = 0 + '%'
        timer1.style.opacity = '0'
        timer2.style.opacity = '0'
        timer3.style.opacity = '0'
        timer4.style.opacity = '0'
        hoverIcon(clock, 1, "#ffffff")
        document.querySelector('.name').style.display = 'block'
        testClickClock = !testClickClock
    }
})


function timerFunction() {
    if (testTimer && testTimer2) {
        testTimer2 = false
        var startTime = new Date().getTime();
        var duration = durations[iDurations];
        countdownInterval = setInterval(function () {
            var currentTime = new Date().getTime();
            var elapsedTime = currentTime - startTime;
            var millisecondsRemaining = duration - elapsedTime;
            var seconds = Math.floor(millisecondsRemaining / 1000);
            var minutes = Math.floor(seconds / 60);
            var remainingSeconds = seconds % 60;
            if (remainingSeconds < 10) {
                remainingSeconds = '0' + remainingSeconds;
            }
            clock.removeChild(clock.firstChild)
            clock.insertAdjacentHTML('afterbegin', `<div></div>`);
            clock.firstChild.textContent = minutes + ' : ' + remainingSeconds;
            if (millisecondsRemaining <= 0) {
                clearInterval(countdownInterval);
                allow = false
            }
        }, 1000);
    }
}