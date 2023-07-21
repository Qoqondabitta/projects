import {styled} from "styled-components"

const Wrap = styled.div`
    width: 100%;
    margin: auto;
    background: #0D263B;
`

const Container = styled.div`
    max-width: 1180px;
    width: 100%;
    margin: auto;
    position: relative;
    background: #0D263B;
    display: flex;
    justify-content: space-between;
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
    @media screen and (max-width: 1180px){
        padding-left: 15px;
        padding-right: 15px;
    }
`
const Box = styled.div`
    position: relative;
    margin: 0 auto;
    text-align: center;
    width: 159px;
    height: 216px;
    color: #0D263B;
`


const Social = styled.div`
    display: flex;
    gap: 26px;
    position: absolute;
    bottom: 0;
    width: 159px;
`
const SocialIcon = styled.div`
    position: relative;
    z-index: 200000000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 24px;
    border-radius: 3px;
    opacity: 0.10000000149011612;
    background: #0D263B;
`
const Image = styled.img`
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

const BurgerMenu = styled.div`
    padding-left: 16px;
    padding-top: 22px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    height: 100vh;
    position: absolute;
    z-index: 1000000;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: white;
`
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
const BurgerList = styled(ListItem)`
    font-size: 18px;
    line-height: 20px;
    
`
export {Wrap, Container, Image, Burger, BurgerMenu, Login, List, ListItem, Link, ContactList, ContactLink, Box, Social, SocialIcon, BurgerList} 