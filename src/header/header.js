import {styled} from "styled-components"
import Header from '../Assets/header.png'



const Holder =styled.div`
    width: 100%;
    padding: 134px 32px;
    background-image: url(${Header});
    background-repeat: no-repeat;
    background-size: cover;
    background: rgba(0, 0, 0, 0.65);
`
const Black = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`
const Box = styled.div`
    width: 1376px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`
const HouseDetails = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 303px;
    gap: 397px;
`
const Scripts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
`
const Layout = styled(Scripts)`
    gap: 24px;
    width: 492px;
` 
const Title = styled(Scripts)`
    gap: 4px;
`
const Skyper = styled.h1`
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.88px;
    color: #fff;
`
const Location = styled(Skyper)`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
`

const Rooms = styled(Scripts)`
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;
    width: 337px;    
`

const MiniBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Cost = styled(Skyper)`
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.56px;
`
const Read = styled.button`
    display: flex;
    width: 180px;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 2px;
    border: 1px solid #FFF;
    background: transparent;
    color: #fff;
    transition: all 0.5s;
    &:hover {
        transform: scale(1.15)
    }
`
const ReadMore = styled(Location)`
    font-size: 14px;
    line-height: 20px;
`
const Next = styled(MiniBox)`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: rgba(128, 128, 128, 0.392);
`



export {
    Holder, Box, 
    HouseDetails, 
    Scripts, Layout,
    Title, Rooms,
    Skyper, Location, 
    MiniBox, Cost, 
    Read, ReadMore,
    Next
}