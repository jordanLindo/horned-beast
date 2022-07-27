import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main';
import Footer from './Footer';
import Beasts from './Data/data.json';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectBeast: ''
    };
  };

  handleOnShowModal = (beast) => {
    this.setState({
      showModal: true,
      selectBeast: beast
    })
  };

  handleOnHide = () => {
    this.setState({
      showModal: false
    })
  };

  render() {
    return (
      <>
        <Header />
        <Main
          Beasts={Beasts}
          handleOnShowModal={this.handleOnShowModal}
        />
        <Footer />

        <Modal show={this.state.showModal} onHide={this.handleOnHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectBeast.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.state.selectBeast.imageUrl} alt={this.state.selectBeast.title} height="300px" />
            <p>{this.state.selectBeast.description}</p>
          </Modal.Body>
        </Modal>
      </>
    );
  };
}

export default App;
