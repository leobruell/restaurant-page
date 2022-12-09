import './style.css'
import bagelBackground from './assets/vicky-ng-lIQRPsA43tw-unsplash\ \(1\).jpg'  

function addElmenent(theType, theClass, theParent, elementText=''){
    const element = document.createElement(theType)
    element.classList.add(theClass)
    element.innerHTML = elementText
    const parent = document.querySelector(theParent)
    parent.appendChild(element)
}

function makeTopBar(){
    addElmenent('div', 'content', 'body')
    addElmenent('div','top-bar','.content')
    addElmenent('h1', 'rest-name', '.top-bar',"Leo's Bagels")
    addElmenent('div','right-top','.top-bar')
    const menuArr = ['Home', 'Menu', 'Contact', 'Reviews']
    for (let i in menuArr){
        addElmenent('h3','top-options','.right-top', menuArr[i])
    }
}

makeTopBar()
addElmenent('div','main','.content')
addElmenent('div','home','.main')
addElmenent('h2','title-home','.home',"Leo's Bagels")
addElmenent('div','descrip-div','.home')
addElmenent('p','description','.descrip-div', "Leo's bagels is the best bagel shop on the Upper West Side. We cook our bagels with the finest ingredients and they are actually super good. We also have many different flavors, including regular (plain), cinnamon-raisin, sesame, and blueberry. We even have everything bagels! <br /> <br /> The thing is this bagel store is basically the best. If you have any doubts, please read our very real customer reviews and you will see that everyone thinks our bagels are super great. You should come visit and buy lots of our delicious bagels!")
addElmenent('div','descrip-div2','.home')
addElmenent('p','description','.descrip-div2','testing')



