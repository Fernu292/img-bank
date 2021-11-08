import Image from "./Image";

import styled from "styled-components";

const ImagesH = styled.h2`
    font-size: 3.5rem;
    text-align: center;
    margin-top: 5rem;
`;
const ImagesContainer = styled.div`
    max-width: 80%;
    margin: 0 auto;
`;

const ImagesGrid = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`;

const Images = ({hits}) => {


    if(!hits) return;

   
    return (
        <ImagesContainer>
            <ImagesH>Images</ImagesH>

            <ImagesGrid>
                {
                hits.map( hit =>(
                        <Image hit = {hit} key={hit.id}/>
                    ))
                }

            </ImagesGrid>
            
             
        </ImagesContainer>
      );
}

export default Images;
