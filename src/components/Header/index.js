/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles.css"
import React, { useEffect, useState } from "react"

const menu = [
    {
        ref:"Home",
        ancor: "#Home",
    },
    {
        ref:"Habilidades",
        ancor: "#Habilidades",
    },
       {
        ref:"Projetos",
        ancor: "#Projetos",
    },
    {
        ref:"Contato",
        ancor: "#Contato",
    },
]

    function activateMenuAtCurrentSection(sections) {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  
    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
    
        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight
    
        if (checkpointStart && checkpointEnd) {        
            return sectionId;
        }
    }
  }


export default function Header() {
    
    const [headerColor, setHeaderColor] = useState("");
    const [sectionId, setSectionId] = useState("")
    
    const listenScrollEvent = () => {
        window.scrollY > 20 ? setHeaderColor("branco") : setHeaderColor("");

        const sections = document.querySelectorAll('#root section[id]')

        setSectionId(activateMenuAtCurrentSection(sections))
    }

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    })



    return (

        <header  className={headerColor}  id='header'>
            <div className="container-header container">
                <div className="container-logo">
                    <span className="first-letter">G</span>
                    <h1>Gabriel</h1>
                </div>
                <ul>
                    {
                        menu.map(({ref, ancor}, index) => <a className={`hvr-underline-from-left ${sectionId === ref ? "active" : ""}`} key={`${index}item`} href={ancor}><li>{ref}</li></a> )
                    }
                </ul>
                <a className='contact_link' href="#Contato">
                    Contact
                </a>
            </div>
        </header>
    )

}



