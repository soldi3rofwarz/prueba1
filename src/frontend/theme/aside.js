import React from 'react'
import hubble from './../../assets/hubble.jpg'

const Aside =(props) => {
    return(
        <>
            <aside>
                <h3>Hubble</h3>
            <p>
            es un telescopio que orbita en el exterior de la atmósfera, en órbita circular alrededor 
            del planeta Tierra a 593 kilómetros sobre el nivel del mar
			</p> 
            <img 
                src={hubble} className ="gga" width ="220px"
            />
            </aside>
        </>
    )
}

export default Aside;