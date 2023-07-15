import {styled} from 'styled-components'

const Title = styled.h1`
    ${(props)=>{console.log(props)}};
    font-size: 24px;
    color: ${props=>props.large?"yellow":"red"};

`
const Advantage = styled(Title)`
    color: blue;
    font-size: 30px;
`
const Bigness = (size)=>{
    return size === "small"? "50px": size === "normal" ? "100px" : size === "huge"? "150px":"100px";
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${Bigness({})}
`


export {Title, Advantage, Container}