import React from 'react'
import "./styles.css"
import img  from "../../assets/euHome.svg"
import img2  from "../../assets/Titik-titik.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import curriculo from "../../assets/pdfs/Profile.pdf"

AOS.init();

export default function Home() {
  return (
    <section id='Home' className='home container'>
        <div data-aos-duration="2000" data-aos="fade-right" className='container-img'>
          <img className='img-efeito1' src={img2} alt="" />
          <img className='img-fluid img-eu' src={img} alt="" />
          <img className='img-efeito2'  src={img2} alt="" />
        </div>
      <div data-aos="fade-left"  data-aos-duration="2000" className='container-description'>
          <h2>Um pouco sobre mim</h2>
          <p> procuro dar sempre meu melhor para superar as dificuldades e buscar as melhores soluções. Estou bastante empolgado com o futuro da tecnologia
            e o quanto ela pode tornar problemas complexos  e chatos em problemas simples e mais prazerosos de se realizar. 
            Prentendo aprender  cada vez mais para fazer parte desse futuro tecnologico e tudo que vai vir com ele,
            Estou gostando bastante de java e estou focando bastante tempo para melhorar cada vez mais.</p>
            <a href={curriculo} download="gabriel_curriculo.pdf">Download CV</a>
      </div>
    
    </section>
  )
}
