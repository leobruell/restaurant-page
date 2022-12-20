import { addElement } from "./addElement"
import mapIcon from "./assets/map-marker.svg"

function makeMainContent(){
    addElement('div','main','.content')
    addElement('div','home','.main')
    addElement('h2','title-home','.home',"Leo's Bagels")
    addElement('div','descrip-div','.home')
    addElement('p','description','.descrip-div', "Leo's bagels is the best bagel shop on the Upper West Side. We cook our bagels with the finest ingredients and they are actually super good. We also have many different flavors, including regular (plain), sesame, and blueberry. We even have everything bagels! <br /> <br /> The thing is this bagel store is basically the best. If you have any doubts, please read our very real customer reviews and you will see that everyone thinks our bagels are super great. You should come visit and buy lots of our delicious bagels!")
    addElement('div','hours-div','.home')
    addElement('h3','hours-header','.hours-div','Hours')
    addElement('p','hours','.hours-div', 'Monday: 6am - 8am <br> Tuesday: 4am - 7am <br> Wednesday: 1pm - 3pm <br> Thursday: 8am - 8pm <br> Friday: 7pm - 11pm <br> Saturday: 4am - 4:30am <br> Sunday: 3pm - 3:15pm')

    addElement('div','location-div','.home')
    addElement('h3','location-header','.location-div','Location')
    addElement('div','theLocation','.location-div')
    addElement('div', 'mapIcon-div','.theLocation')
    addImage(mapIcon, '.mapIcon-div')
    addElement('p','location','.theLocation', '123456 Amsterdam Ave. <br> New York, NY 10025')

}


function addImage(theSource, theParent){
    const theImage = document.createElement('img')
    theImage.setAttribute('src', theSource)
    const parent = document.querySelector(theParent)
    parent.appendChild(theImage)
}
export {makeMainContent}