import React from 'react'
import Body from './../../theme/body'
import './../../theme/style.css'
import a1 from './../../../assets/a1.jpg'
import astrofísica from './../../../assets/Astrofísica.jpg'
const Index =(props) => {
    return(
        <>
            <Body>
                <section className="main">
                    <section className="articles">
                        <article>
                            <h2> Que es la astronomia </h2>
                            <p>
                            es la ciencia que se ocupa del estudio de los cuerpos celestes del universo,<br/> 
                            incluidos los planetas y sus satélites, los cometas y meteoroides, las estrellas <br/> 
                            y la materia interestelar, los sistemas de materia oscura, gas y polvo llamados <br/> 
                            galaxias y los cúmulos de galaxias; por lo que estudia sus movimientos y los fenómenos<br/>  
                            ligados a ellos
                            <img 
                            src={a1} width = '100px' alt=""
                            />
                            </p>
                        </article>
                        <article>
                            <h2> Astrofisica </h2>
                            <p>
                            La astrofísica es el desarrollo y estudio de la física aplicada a la astronomía,<br/> 
                            es una parte moderna de la astronomía que estudia los astros como cuerpos de la física<br/>
                            estudiando su composición, estructura y evolución. La astrofísica emplea la física para <br/>
                            explicar las propiedades y fenómenos de los cuerpos estelares a través de sus leyes, fórmulas <br/>
                            y magnitudes.  
                            <img 
                            src={astrofísica} width ='100px' alt=""
                            />
                            </p>
                        </article>
                    </section>
                </section>
            </Body>
        </>
    )
}

export default Index;