import './style.css'

import { makeMainContent } from './home'
import { makeMenuContent } from './menu'
import { addElement } from './addElement'
import { makeContact } from './contact'

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

function makeReviews(){
    addElement('div','main','.content')
    addElement('div','reviews','.main')
    addElement('h2','title-reviews','.reviews',"Customer Reviews")
    addElement('div','review-1', '.reviews')
    addElement('p', 'a-review', '.review-1',"I love Leo's bagels. It is without a doubt the best bagel store in New York! <br> -Customer 1")

    addElement('div','review-2', '.reviews')
    addElement('p', 'a-review', '.review-2',"Leo's bagels is the only place I get bagels. I used to go to Absolute Bagels, but they are nothing compared to Leo's! <br> -Customer 2")

    addElement('div','review-3', '.reviews')
    addElement('p', 'a-review', '.review-3',"I cannot describe just how amazing Leo's bagels is! Their bagels and sandwiches are the very best in NYC! <br> -Customer 3")
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

const contactClick = document.querySelector('.Contact')
contactClick.addEventListener('click', ()=>{
    const main = document.querySelector('.main')
    main.remove()
    makeContact()
})

const reviewsClick = document.querySelector('.Reviews')
reviewsClick.addEventListener('click', ()=>{
    const main = document.querySelector('.main')
    main.remove()
    makeReviews()
})



