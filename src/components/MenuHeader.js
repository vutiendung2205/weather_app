import React, { Component } from 'react'

export default class MenuHeader extends Component {
    render() {
        return (
            <div className="menu_header">
                <ul>
                    <li><a href="#">Today</a></li>
                    <li><a href="#">7 days ago</a></li>
                    <li><a href="#">Map</a></li>
                </ul>
            </div>
        )
    }
}
