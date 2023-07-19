import {styled} from "styled-components"

const Container = styled.div`
    background: #0D263B;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    @media screen and (max-width: 375px){
        justify-content: center;
        gap: 50px;
    };
    @media screen and (max-width: 425px){
        justify-content: space-between;
    };
    @media screen and (max-width: 525px){
        justify-content: space-around;
    };
    @media screen and (max-width: 768px){

    }
`

const Image = styled.img`
    color: white;
`
const Burger = styled(Image)`
    height: 16px;
    width: 20px;
    display: none;
    @media screen and (max-width: 375px){
        display: flex;
    };
    @media screen and (max-width: 425px){
        display: flex;
    };
    @media screen and (max-width: 525px){
        display: flex;
    };
`
// const BurgerMenu = styled.input`
    

// `
const Login = styled.button`
    padding: 12px 40px 12px 40px;
    color: #FFF;
    background: transparent;
    border: 1px solid #FFF;
    border-radius: 2px; 
    cursor: pointer; 
    @media screen and (max-width: 375px){
        display: none;
    }; 
    @media screen and (max-width: 425px){
        display: none;
    };
    @media screen and (max-width: 525px){
        display: none;
    };   
    @media screen and (max-width: 768px){
        padding: 6px 20px 6px 20px;
    };
`
const List = styled.ul`
    display: flex;
    align-items: center;
    gap: 64px;
    @media screen and (max-width: 375px){
        display: none;
    }
    @media screen and (max-width: 425px){
        display: none;
    }
    @media screen and (max-width: 525px){
        display: none;
    }  
    @media screen and (max-width: 769px){
        gap: 30px;
    }
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
export {Container, Image, Burger, BurgerMenu, Login, List, ListItem, Link, ContactList, ContactLink} 