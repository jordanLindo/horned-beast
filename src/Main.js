import React from "react";
import HornedBeast from './HornedBeast.js';

class Main extends React.Component{
    render(){
        return(
            <main>
                <HornedBeast title="Narwhal" 
                imageUrl="/Holloway-Narwhals.jpg"
                description="Unicorn of the sea. - Photograph from Alamy" />
                <HornedBeast title="Rhino" 
                imageUrl="/black-rhino.jpg"
                description="Black Rhinoceros. - worldwildlife.org" />
            </main>
        );
    }
}

export default Main;