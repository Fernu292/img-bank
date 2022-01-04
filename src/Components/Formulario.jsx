import styled from "styled-components";
import stone from '../img/Stone.webp';
import { useState } from "react";
import React from 'react';

const FormContainer = styled.div`
    height: 45rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url(${stone});
    background-size: cover;
    font-family: 'Roboto Mono', monospace ;

    h1{
        margin-top: 0;
        font-size: 8rem;
        color: white;
        text-align: center;
        font-weight: bold;
        text-decoration: wavy;
    }
`;

const FromBrowser = styled.div`
    margin: 0 auto;
    max-width: 90%;

    form{
        width: 60rem;
        max-width: 100%;
        display: flex;
        justify-content: center;
        gap: 2rem;

        input{
            height: 3rem;
            width: 70%;
            border-radius: 1rem;
            padding: 0.5rem;
            border: none;
            border: 1px solid black;
            font-size: 1.5rem;
            
            text{
                margin-left: 1rem;
            }
        }

        button{
            font-size: 1.5rem;
            font-weight: bold;
            text-transform: uppercase;
            background-color: black;
            color: white;
            border-radius: 1rem;
            padding: 0.5rem;
            border: none;
            cursor: pointer;
            width: 15rem;
        }
    }

`;

const Formulario = ({setCategoria}) => {
        
    const[busqueda, setBusqueda] = useState('');

    const handleChange = (e)=>{
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setCategoria(busqueda);
    }

    return ( 
        <FormContainer>
            <h1>Image Bank</h1>

            <FromBrowser>
                <form
                    onSubmit = {handleSubmit}
                >
                    <input 
                        type='text' 
                        placeholder = 'Search for...' 
                        value = {busqueda}
                        name = 'categoria'
                        onChange = {handleChange}
                        id = 'categoria'
                    />


                    <button type='submit'>Search</button>
                </form>
            </FromBrowser>
        </FormContainer>
     );
}
 
export default Formulario;