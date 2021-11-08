import {AiOutlineHeart, AiOutlineArrowDown} from 'react-icons/ai';
import styled from 'styled-components';


const ImageCard = styled.div`
    width: 25rem;
    height: max-content;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    
`;
const Img = styled.div`
    width: 100%;
    position: static;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0;

    img{
        width: 100%;
        height: 20rem;
        object-fit: cover;
    }

    a{
        width: 100%;
        height: 100%;
        z-index: 2;
        position: absolute;
        display: flex;
    }
`;

const ImageInfo = styled.div`
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 0.2rem;

    
    div{
        display: flex;
        align-items: center;
    }
`;

const Image = ({hit}) => {
    
    const {likes, largeImageURL, downloads, previewURL} = hit;

    return ( 
        <ImageCard>
            <Img>
                <img src = {previewURL} alt = 'pixa' loading='lazy'/>
                <a href={largeImageURL} > </a>

            </Img>

            <ImageInfo>
                <div>
                    <AiOutlineHeart />
                    <p>{likes}</p>
                </div>

                <div>   
                    <AiOutlineArrowDown />
                    <p>{downloads}</p>

                </div>
            </ImageInfo> 

            
        </ImageCard>
     );
}
 
export default Image;
