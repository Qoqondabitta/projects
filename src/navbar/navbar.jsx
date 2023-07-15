import React from "react";
import "./navbar.css"
import {Container, Image, Login, List, ListItem, Link, ContactList, ContactLink} from "./navbar"
class Navbar extends React.Component{
    render(){
        return(
            <div>
                <div className="Navbar">
                    <Container>
                        <Image src="../Assets/logo.png" alt="" />
                        <List>
                            <ListItem><Link href="#Home">Home</Link></ListItem>
                            <ListItem><Link href="#Services">Properties</Link></ListItem>
                            <ListItem className="Dropdown"><Link href="tel: +998901116554">Contacts</Link>
                                <ContactList className="ContactList">
                                    <ListItem><ContactLink href="tel: +998901116554">Phone</ContactLink></ListItem>
                                    <ListItem><ContactLink href="https://m.facebook.com/">Facebook </ContactLink></ListItem>
                                    <ListItem><ContactLink href="https://www.instagram.com/qoqonda_bitta/">Instagram</ContactLink></ListItem>
                                    <ListItem><ContactLink href="https://t.me/Hammasi_Ota_Onam_sabali">Telegram</ContactLink></ListItem>
                                </ContactList>
                            </ListItem>
                        </List>
                        <Login>Login</Login>
                    </Container>
                </div>
            </div>
        )
    }
}

export {Navbar}