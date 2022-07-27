import React from "react";
import HornedBeast from './HornedBeast.js';
import { Container, Row } from "react-bootstrap";

class Main extends React.Component{
    render(){

        let mainBeasts = this.props.Beasts.map((element, index) => {
            return (<HornedBeast 
                title={element.title}
                key={index} 
                imageUrl={element.image_url}
                description={element.description} 
                handleOnShowModal={this.props.handleOnShowModal}
                />)});
        return(
            <main>
                <Container fluid="md">
                    <Row>
                        {mainBeasts}
                    </Row>
                </Container>
            </main>
        );
    }
}

export default Main;