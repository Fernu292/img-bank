import Formulario from "./Components/Formulario";
import Images from "./Components/Images";
import Paginador from "./Components/Paginador";
import './App.css';

import { useState, useEffect, Fragment } from "react";


const App = () => {

    

    const[images, setImages] = useState([]);
    const[categoria, setCategoria] = useState('');
    const[pagina, setPagina] = useState(1);

    useEffect( ()=>{

        const API = async ()=>{
            const Key = '20696961-2e0d26ed31781763351e892ec';
            const url = `https://pixabay.com/api/?key=${Key}&q=${encodeURIComponent(categoria)}&page=${pagina}`;

            const respuesta = await fetch(url);

            const imgs = await respuesta.json();

            setImages(imgs);
        }

        API();
    },[categoria, pagina]);

    const {hits} = images;

    console.log(pagina)
    return ( 
        <Fragment>
            <Formulario setCategoria = {setCategoria} />

            {
                (hits)? 

                <Images hits={hits}/>
                : null
           
            }

            <Paginador setPagina={setPagina} pagina={pagina}/>

        </Fragment>
        
     );
}
 
export default App;