import React from "react";
import {Title, Image, Container, NewImage, bgRed} from './styledComponents'

export class StyledComponents5 extends React.Component{
    render(){
        return <div>
            <h1>Styled Components 5</h1>
            <Title>Styled Components 5</Title>
            <Title large>Styled Components 5</Title>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4o3oFxWl4diNNHJIQixTBh6UohQM2lnWok0h0TtW8wowJQc9iRivJgetArm1LQigwbFs&usqp=CAU" alt="" ></Image>
            <Container size="small"></Container>
            <Container size="moderate"></Container>
                <NewImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4o3oFxWl4diNNHJIQixTBh6UohQM2lnWok0h0TtW8wowJQc9iRivJgetArm1LQigwbFs&usqp=CAU" alt="" ></NewImage>
            <Container size="Huge">
            </Container>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4o3oFxWl4diNNHJIQixTBh6UohQM2lnWok0h0TtW8wowJQc9iRivJgetArm1LQigwbFs&usqp=CAU" alt="" ></Image>
            <Container></Container>
        </div>;
    }
}
export default StyledComponents5