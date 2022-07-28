import React from "react";
import { Card, Col } from "react-bootstrap";
import './HornedBeast.css'

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }
    }

    handleLikes = () => {
        this.setState({
            likes: this.state.likes + 1
        });
    };

    helperPicClick = () => {
        this.handleLikes();
        this.props.handleOnShowModal(this.props);
    };

    render() {
        return (
            <Col className="mt-4">
                <Card className="h-100 p-3 card">
                    <Card.Title>
                        {this.props.title}
                    </Card.Title>
                    <Card.Img className="m-auto" src={this.props.imageUrl} alt={this.props.title} title={this.props.title} onClick={this.helperPicClick} />
                    <p>
                        &#9825;{this.state.likes}
                    </p>
                    <p>
                        {this.props.description}
                    </p>
                </Card>
            </Col>
        );
    }
}



export default HornedBeast;