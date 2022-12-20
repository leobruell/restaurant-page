import { addElement } from "./addElement"

function makeMainContent(){
    addElement('div','main','.content')
    addElement('div','home','.main')
    addElement('h2','title-home','.home',"Leo's Bagels")
    addElement('div','descrip-div','.home')
    addElement('p','description','.descrip-div', "Leo's bagels is the best bagel shop on the Upper West Side. We cook our bagels with the finest ingredients and they are actually super good. We also have many different flavors, including regular (plain), cinnamon-raisin, sesame, and blueberry. We even have everything bagels! <br /> <br /> The thing is this bagel store is basically the best. If you have any doubts, please read our very real customer reviews and you will see that everyone thinks our bagels are super great. You should come visit and buy lots of our delicious bagels!")
    addElement('div','descrip-div2','.home')
    addElement('p','description','.descrip-div2','tsdlkfjsd l')
}

export {makeMainContent}