import React from 'react';
// import site1 from "../../assets/site1.png";
// import site2 from "../../assets/site2.png";
// import site3 from "../../assets/site3.png";
import site4 from "../../assets/site4.png";
import site5 from "../../assets/site5.png";
import site6 from "../../assets/site6.png";
import site7 from "../../assets/site7.png";
import site8 from "../../assets/site8.png";
import site9 from "../../assets/site9.png";
import "./styles.css"




const dataImg = [
    // {
    //     img: site1,
    //     linkSite: "https://firstprojectreact.herokuapp.com/",
    //     linkGithub: "https://github.com/GabrielGPena793/First_Project_React",
    //     alt: "imagem do meu site no heroku",
    // },
    // {
    //     img: site2,
    //     linkSite: "https://gabrielgpena793.github.io/FrontII_Check/",
    //     linkGithub: "https://github.com/GabrielGPena793/FrontII_Check",
    //     alt: "imagem do meu site que indetifca qual é a sua geração",
    // },
    // {
    //     img: site3,
    //     linkSite: "https://gabrielgpena793.github.io/formulario_bts_sass/index.html",
    //     linkGithub: "https://github.com/GabrielGPena793/formulario_bts_sass",
    //     alt: "imagem do meu site que de cadastro e login",
    // },
    {
        img: site4,
        linkSite: "https://gabrielgpena793.github.io/Projeto_bts_sass/",
        linkGithub: "https://github.com/GabrielGPena793/Projeto_bts_sass",
        alt: "imagem do site sobre artes urbanas",
    },
    {
        img: site5,
        linkSite: "https://gabrielgpena793.github.io/CheckPointFInalB1/",
        linkGithub: "https://github.com/GabrielGPena793/CheckPointFInalB1",
        alt: "imagem do site de uma clinica veterinária",
    },
    {
        img: site6,
        linkSite: "https://gabrielgpena793.github.io/CheckPoint_FrontEnd_1/",
        linkGithub: "https://github.com/GabrielGPena793/CheckPointFInalB1",
        alt: "imagem do site sobre a cidade de Recife-PE",
    },
    {
        img: site7,
        linkSite: "https://gabrielgpena793.github.io/Conversor-de-Moedas/",
        linkGithub: "https://github.com/GabrielGPena793/Conversor-de-Moedas",
        alt: "imagem do site que converte moedas",
    },
    {
        img: site8,
        linkSite: "https://gabrielgpena793.github.io/Projeto1_com_Sass/",
        linkGithub: "https://github.com/GabrielGPena793/Projeto1_com_Sass",
        alt: "imagem do site de uma agência",
    },
    {
        img: site9,
        linkSite: "https://gabrielgpena793.github.io/Projeto_Sass2/",
        linkGithub: "https://github.com/GabrielGPena793/Projeto_Sass2",
        alt: "imagem do site de uma loja de E-commerce, venda de eletrônicos",
    },



]

export default function Projects() {
    return (
        <section id='projeto' className='section-projects container'>
            <div className='container-title'>
                <h2>Projetos</h2>
                <p>Aqui estão alguns projetos que já realizei até o momento, no frontend e no backend.</p>
                <p>Passe o mause por cima dos projetos para saber mais</p>
            </div>

            <div className='projects row row-cols-3 justify-content-center'>
                
            {
                dataImg.map(({ img, linkSite, linkGithub, alt }, index) =>

                        <div key={`${index}`} className='container-project'>
                            <img className='img-fluid' src={img} alt={alt} />
                            <div className='hidden-container'>
                                <a className='left-link' rel="noreferrer" target="_blank" href={linkSite}><span>Site</span></a>
                                <a className='right-link' rel="noreferrer" target="_blank" href={linkGithub}><span>GitHub</span></a>
                            </div>
                        </div>
                )
            }
            </div>
        </section>
    )
}
