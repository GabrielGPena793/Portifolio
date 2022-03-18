import React from 'react'
import "./styles.css"

export default function Header() {


    const menu = ["Home", "About", "Services", "Portifólio"]

    return (
        <header>
            <div className="container-header container">
                <div className="container-logo">
                    <span className="first-letter">G</span>
                    <h1>Gabriel</h1>
                </div>
                <ul>
                    {
                        menu.map((item, index) => <a key={`${index}item`} href="#"><li >{item}</li></a> )
                    }
                </ul>
                <a className='contact_link' href="#">
                    Contact
                </a>
            </div>
        </header>
    )
}
