import {styled} from "styled-components"

const Holder =styled.div`
    max-width: 1440px;
    padding: 134px 32px;
`
const Box = styled.div`
    
`
const HouseDetails = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-betwwen;
    align-items: center;
    height: 303px;
`
const Scripts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
`
const Layout = styled(Scripts)`
    gap: 24px;
` 
const Title = styled(Scripts)`
    gap: 8px;
`
const Rooms = styled(Scripts)`
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
    width: 337px;
`








export {
    Holder, Box, 
    HouseDetails, 
    Scripts, Layout,
    Title, Rooms   
}