/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles.css"
import React, { useEffect, useState } from "react"

const menu = [
    {
        ref:"Home",
        ancor: "#",
    },
    {
        ref:"Habilidades",
        ancor: "#skill",
    },
       {
        ref:"Projetos",
        ancor: "#projeto",
    },
    {
        ref:"Contato",
        ancor: "#footer",
    },
]





export default function Header() {
    
    const [headerColor, setHeaderColor] = useState("transparent")


    const listenScrollEvent = () => {
        window.scrollY > 20 ? setHeaderColor("branco") : setHeaderColor("transparent");
    }

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    })


   

    return (

        <header className={headerColor}  id='header'>
            <div className="container-header container">
                <div className="container-logo">
                    <span className="first-letter">G</span>
                    <h1>Gabriel</h1>
                </div>
                <ul>
                    {
                        menu.map(({ref, ancor}, index) => <a key={`${index}item`} href={ancor}><li>{ref}</li></a> )
                    }
                </ul>
                <a className='contact_link' href="#">
                    Contact
                </a>
            </div>
        </header>
    )

}



