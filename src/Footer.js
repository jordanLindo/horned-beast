import React from "react";

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isActive: false
        };
    };

    setIsActive = () =>{
        if(this.state.isActive){
            this.setState({
                isActive: false
            })
        } else {
            this.setState({
                isActive: true
            })
        }
    }

    render(){
        const colorClass = this.state.isActive ? 'blue' : 'red';
        return(
            <footer className={colorClass} onClick={this.setIsActive}>
                {this.state.isActive ? 'DeltaV, 2022' : 'Jordan Lindo, 2022'}
            </footer>
        );
    }
}

export default Footer;