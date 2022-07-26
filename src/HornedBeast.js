import React from "react";
import Col from 'react-bootstrap/Col';

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

    render() {
        return (
            <Col>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt={this.props.title} title={this.props.title} onClick={this.handleLikes} />
                <p>	&#9825;{this.state.likes}</p>
                <p>{this.props.description}</p>
            </Col>
        );
    }
}



export default HornedBeast;