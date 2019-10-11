import React from 'react'
import Header from './header'
import Footer from './footer'
import Aside from './aside'

const Body =(props) => {
    return(
        <>
           
            <Header />
            <section className="layout">
                {props.children}
            </section>
            <Aside/>
            <Footer />
        </>
    )
}

export default Body;