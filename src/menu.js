import everything from './assets/everything.jpg'
import poppy from './assets/poppy.jpg'
import blueberry from './assets/blueberry.jpg'
import sesame from './assets/sesame.jpg'
import plain from './assets/plain.jpg'
import cheese from './assets/cheese.jpg'
import kale from './assets/kale.jpg'
import creamCheese from './assets/cream-cheese.jpg'
import ham from './assets/ham-sandwich.jpg'
import { addElement } from './addElement'



function addImage(theSource, theParent){
    const theImage = document.createElement('img')
    theImage.setAttribute('src', theSource)
    const parent = document.querySelector(theParent)
    parent.appendChild(theImage)
}

function makeMenuContent(){
    addElement('div','main','.content')
    addElement('div','inner-menu', '.main')
    addElement('h2','menu-title','.inner-menu','Menu')

    //Bagel Menu:
    addElement('div','bagel-menu','.inner-menu')
    addElement('div','bagel-desc','.bagel-menu')
    addElement('h2','bagel-menu-h2','.bagel-desc','Artisan Bagels')
    addElement('p','bagel-menu-p','.bagel-desc','$5 per bagel. $50 for 12 (best value).')
    addElement('div','bagel-images','.bagel-menu')
    const imgAssets = [everything, blueberry, sesame, poppy, plain, cheese]
    const imgLabels = ['Everything','Blueberry','Sesame','Poppy', 'Plain','Cheese']
    for (let i = 0; i < imgAssets.length; i++){
        addElement('div',`${imgLabels[i]}`, '.bagel-images')
        addElement('div',`image-div-${imgLabels[i]}`,`.${imgLabels[i]}`)
        addImage(imgAssets[i],`.image-div-${imgLabels[i]}`)
        addElement('div','bagel-heading',`.${imgLabels[i]}`,`${imgLabels[i]} Bagel`)
    }
    //Deluxe Options
    addElement('h2','special-menu-h2','.bagel-menu','Deluxe Options')
    addElement('div','special-menu-div', '.bagel-menu')
    const specialImages = [creamCheese, ham, kale]
    const specialLabels = ['Cream Cheese Bagel', 'Ham Sandwich', 'Kale Sandwich']
    const specialClasses = ['cream','ham','kale']
    const specialDescriptions = ['An artisan bagel of your choice toasted with cream cheese. The perfect breakfast. $9.', 'A delicious ham sandwich on an artisan bagel of your choice. $19','A vegetarian kale sandwich. Made with farm fresh vegetables on an artisan bagel of your choice. $18.']
    for (let i = 0; i < specialImages.length; i++){
        addElement('div',`${specialClasses[i]}`, '.special-menu-div')
        addElement('h3','special-title',`.${specialClasses[i]}`, specialLabels[i])
        addElement('div',`image-div-${specialClasses[i]}`, `.${specialClasses[i]}`)
        addImage(specialImages[i],`.image-div-${specialClasses[i]}`)
        addElement('p','special-description',`.${specialClasses[i]}`, specialDescriptions[i])
    }
}

export {makeMenuContent}