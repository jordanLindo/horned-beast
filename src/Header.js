import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
    };

    setIsActive = () => {
        if (this.state.isActive) {
            this.setState({
                isActive: false
            })
        } else {
            this.setState({
                isActive: true
            })
        }
    }

    handleSearch = () => {

    }

    render() {
        const colorClass = this.state.isActive ? 'blue' : 'red';
        return (
            <>
                <header className={colorClass} onClick={this.setIsActive}>
                    <h1>{this.state.isActive ? 'Pointy Friends' : 'Horned Beasts'}</h1>
                </header>
            </>
        );
    }
}

export default Header;