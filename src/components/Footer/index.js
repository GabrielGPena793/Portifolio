import React from 'react'
import "./styles.css"

const icons = ["bi bi-linkedin", "bi bi-instagram", "bi bi-facebook", "bi bi-envelope"]

export default function Footer() {
  return (
    <footer>
        <div className='container-footer'>
            <span className="letter">G</span>
            <h2>Entre em contato comigo!</h2>
            <p>Estou disponível para receber propostas de vagas, falar sobre tecnologia, conversar sobre projetos e colocar as ideias para funcionar.</p>
            <ul>
                {
                    icons.map((item) => <li key={`${item}`}><i class={item}></i></li>)
                }
            </ul>

        </div>

    </footer>
  )
}
