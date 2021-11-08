import styled from "styled-components";


const PaginadorContainer = styled.div`
    max-width: 30rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    margin-bottom: 10rem;

    button{
        background-color: black;
        color: white;
        border: none;
        padding: 1rem 4rem;
        border-radius: 1rem;
        cursor: pointer;
        font-weight: bold;

        &:disabled{
            background-color: gray;
        }
    }
`;
const Paginador = ({setPagina, pagina}) => {

    const handlePrev = ()=>{
        setPagina(pagina-=1);
    }

    const handleNext = () =>{
        setPagina(pagina+=1);
    }

    return ( 
        <PaginadorContainer>
            <button
                onClick = {handlePrev}
                disabled = {pagina===1}
            >{'< Prev'}</button>


            <button
                onClick={handleNext}
            >{'Next >'}</button>
        </PaginadorContainer>
     );
}
 
export default Paginador;