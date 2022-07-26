import React from "react";
import HornedBeast from './HornedBeast.js';
import Beasts from './Data/Data.json';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';

class Main extends React.Component{
    render(){
        console.log(Beasts);
        let mainBeasts = Beasts.map((element) => {
            return (<HornedBeast title={element.title} imageUrl={element.image_url} description={element.description} />)});
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