import React from 'react'
import astronomia from './../../assets/astronomia.jpg'
import './style.css'
const Header =() => {
    return(
        <header>
		    
			<div>
               <img src ={astronomia}  alt ="" with ="100px"/>
            </div>
		    <nav>
			<ul>
				<li><a >Inicio</a></li>
				<li><a >Acerca de</a></li>
				<li><a >NASA</a></li>
				<li><a >Area 51</a></li>
			</ul>
		    </nav>

	    </header>
    )
}

export default Header;