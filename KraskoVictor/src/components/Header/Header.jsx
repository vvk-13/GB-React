import React, {Component, Fragment} from 'react';
import Menu from './Menu';




class Header extends Component {
    constructor() {
        super();
    }

    render() {
        const MenuItems = [
            {href:"/", title: "Main"},
            {href:"/about", title: "About us"},
            {href:"/contacts", title: "Contacts"},
            {href:"/product", title: "Products"},
        ]    

        return(
            <header>
              <h1>Hello</h1>
              <Menu titleMenu="Main menu" items = {MenuItems}/>
            </header>
            
        )
    }
}

export default Header;