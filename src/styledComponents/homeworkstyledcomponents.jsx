import React from "react";
import {Title, Advantage, Container} from "./homeworkstyledcomponents"

class Video extends React.Component{
    render(){
        return(<div>
            <h1>Styled Components Basics</h1>
            <Title large>Styled Components Advanced</Title>
            <Advantage>Styled Components Advanced Blue Extended</Advantage>
            <Container>
                <Container size="small"></Container>
                <Container size="normal"></Container>
                <Container size="huge"></Container>
            </Container>
        </div>
        )
    }
}

export default Video