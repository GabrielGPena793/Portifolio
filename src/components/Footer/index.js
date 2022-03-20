import React from 'react'
import "./styles.css"

const icons = [
    {
        icon: "bi bi-linkedin",
        link: "https://www.linkedin.com/in/gabrielgpena/",
    },
    {
        icon: "bi bi-instagram",
        link: "https://www.instagram.com/gabrielgpena/",
    },
    {
        icon: "bi bi-facebook",
        link: "https://www.facebook.com/gabriel.gomes.37201/",
    },
    {
        icon: "bi bi-envelope",
        link: "mailto:kbeca.gabriel793@gmail.com",
    },
]

export default function Footer() {
  return (
    <footer id='footer'>
        <div className='container-footer'>
            <span className="letter">G</span>
            <h2>Entre em contato comigo!</h2>
            <p>Estou disponível para receber propostas, falar sobre tecnologia, conversar sobre projetos e colocar as ideias para funcionar.</p>
            <ul>
                {
                    icons.map(({icon, link}) => <a href={link} rel="noreferrer" target="_blank" key={`${icon}`}> <li ><i className={icon}></i></li></a>)
                }
            </ul>

        </div>

    </footer>
  )
}
