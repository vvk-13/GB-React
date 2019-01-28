import React, {Component} from 'react'

class MenuItems extends Component {
    render() {
        return (
            <li>
                <a href={this.props.href}>{this.props.children}</a>
            </li>
        );
    }
}

export default MenuItems;