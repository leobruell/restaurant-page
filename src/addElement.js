function addElement(theType, theClass, theParent, elementText=''){
    const element = document.createElement(theType)
    element.classList.add(theClass)
    element.innerHTML = elementText
    const parent = document.querySelector(theParent)
    parent.appendChild(element)
}
export {addElement}