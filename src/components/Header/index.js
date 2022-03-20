/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles.css"

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
    
    return (

        <header  id='header'>
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



