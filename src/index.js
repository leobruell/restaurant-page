import './style.css'

import { makeMainContent } from './home'
import { makeMenuContent } from './menu'
import { addElement } from './addElement'

function makeTopBar(){
    addElement('div', 'content', 'body')
    addElement('div','top-bar','.content')
    addElement('h1', 'rest-name', '.top-bar',"Leo's Bagels")
    addElement('div','right-top','.top-bar')
    const menuArr = ['Home', 'Menu', 'Contact', 'Reviews']
    for (let i in menuArr){
        addElement('h3', `${menuArr[i]}`,'.right-top', menuArr[i])
    }
}



makeTopBar()
makeMainContent()

//Add Event Listeners on Top Bar: 
const menuClick = document.querySelector('.Menu')
menuClick.addEventListener('click', ()=>{
    const main = document.querySelector('.main')
    main.remove()
    makeMenuContent()
})

const homeClick = document.querySelector('.Home')
homeClick.addEventListener('click', ()=>{
    const main = document.querySelector('.main')
    main.remove()
    makeMainContent()
})


