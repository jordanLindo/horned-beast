import React from "react";
import HornedBeast from './HornedBeast.js';
import { Container, Form, FormGroup, FormSelect, ListGroup, Row } from "react-bootstrap";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredData: this.props.Beasts,
        };
    }

    handleSelect = (event) => {
        let selected = event.target.value;
        let result = this.props.Beasts;
        if (selected !== "all") {
            console.log(selected);
            result = result.filter((val) => {
                let filterResult = false;
                if (val.horns === parseInt(selected)) {
                    filterResult = true;
                }
                return filterResult;
            }
            );
        }
        this.setState({ filteredData: result });
        console.log(this.state);
    }

    handleSearh = (event) => {
        let criteria = event.target.value;
        let result = this.props.Beasts;
        result = result.filter((val) => {
            let filterResult = false;
            let title = val.title.toLowerCase();
            let keyword = val.keyword.toLowerCase();
            if(title.startsWith(criteria) || keyword.startsWith(criteria)){
                filterResult = true;
            }
            return filterResult;
        });
        this.setState({ filteredData: result });

    };

    render() {
        let mainBeasts = this.state.filteredData.map((element, index) => {
            return (<HornedBeast
                title={element.title}
                key={index}
                imageUrl={element.image_url}
                description={element.description}
                handleOnShowModal={this.props.handleOnShowModal}
            />)
        });
        return (
            <main>
                <Container>
                    <Row>
                        <Form>
                            <FormGroup>
                                <Form.Control type="text" placeholder="Search"
                                    onKeyUp={this.handleSearh}>
                                </Form.Control>
                            </FormGroup>
                            <Row lg={4} md={2}>
                            <FormGroup>
                                <p>Select Number of Horns</p>
                                <FormSelect name="selected"
                                    onChange={this.handleSelect}
                                    className="md-2">
                                    <option value='all'>All</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='100'>100</option>
                                </FormSelect>
                            </FormGroup>
                            </Row>
                        </Form>
                    </Row>
                    <ListGroup>
                        <Row lg={3} md={2} xs={1}>
                            {mainBeasts}
                        </Row>
                    </ListGroup>
                </Container>
            </main>
        );
    }
}

export default Main;