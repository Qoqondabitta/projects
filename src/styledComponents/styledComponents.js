import {styled, css, keyframes} from "styled-components"

const scaleAnimation = keyframes`
    from{
        transform:scaleX(.5);
    } to{
        transform:scaleX(1);
    }
`;

const bgRed = css`
    background: red;
`

const Title = styled.h1`
    /*${(props)=>console.log(props.large)}*/
    font-size: ${props=>props.large?"32px":"24px"};
    color: red;
`;


const Image = styled.img`
    width: 200px;
    height: 200px;
    animation: ${scaleAnimation} 3s ease infinite
`; 
const NewImage = styled(Image)``;

const getSize = (size)=>{
    switch(size){
        case 'small': return "100px";
        case "moderate": return "200px";
        case "Huge": return "300px";
        default :return "200px";
    }
}

const Container = styled.div`
    width: ${({size}) => getSize(size)};
    height: ${({size}) => getSize(size)};
    border: 1px solid black;
`

export {Title, Image, Container, NewImage, bgRed}