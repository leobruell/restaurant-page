import { addElement } from "./addElement"

function makeContact(){
    addElement('div','main','.content')
    addElement('div','contact','.main')
    addElement('h2','title-contact','.contact',"Contact Us")
    addElement('div','contact-person', '.contact')
    addElement('p', 'a-contact', '.contact-person','Leo <br> President and CEO <br> leo@realemail.com <br> 123-456-7890 ext. 1')
    addElement('div','contact-2', '.contact')
    addElement('p', 'a-contact', '.contact-2','Leo Jr.<br> Head Chef <br> leo.jr@realemail.com <br> 123-456-7890 ext. 2')
    addElement('div','contact-3', '.contact')
    addElement('p', 'a-contact', '.contact-3','Leo III<br> Chief Evangelist <br> leo3@realemail.com <br> 123-456-7890 ext. 3')
}

export {makeContact}