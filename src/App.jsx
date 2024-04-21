import React from "react";
import Navbar from "./componentes/NavBar.jsx";
import Principal from "./componentes/Principal.jsx";
import Aside from "./componentes/Aside.jsx";
import Footer from "./componentes/Footer.jsx";
import './App.css';

function App(){ //Es la que le da la forma a la pagina
    return(
        <div className='container'>
            <Navbar/>
            <main>
                <Principal/>
                <Aside/>
            </main>
            <Footer/>
        </div>
    )
}

export default App;