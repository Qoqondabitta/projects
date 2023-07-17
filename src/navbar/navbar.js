import {styled} from "styled-components"

const Container = styled.div`
    background: #0D263B;
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
`

const Image = styled.img`
    color: white;
`
const Login = styled.button`
    padding: 12px 40px 12px 40px;
    color: #FFF;
    background: transparent;
    border: 1px solid #FFF;
    border-radius: 2px; 
    cursor: pointer;   
`
const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 64px;
`
const ContactList = styled(List)`
    flex-direction: column;
    align-items: flex-start;
    display: none;
    gap: 10px;
    position: absolute;
    background: #FFF;
    border: 1px solid #0D263B;
    border-radius: 2px; 
    padding: 10px 60px 10px 5px;
    margin-top:1px;
    transition: all 2s;
`
const ListItem = styled.p`
    font-size: 16px;
    // list-style-type: none;
    cursor: pointer;
`
const Link = styled.a`
    text-decoration: none;
    color: #FFF;
`
const ContactLink = styled(Link)`
    color: #0D263B; 
    font-size: 20px;
    &:hover{
        transform: scale(1.15)
        color: red;
    }
`
export {Container, Image, Login, List, ListItem, Link, ContactList, ContactLink} 