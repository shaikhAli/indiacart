import React from 'react';

class Car extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            carName: props.name,
            colorName:props.color
        }

        // Binding this keyword
        // this.changeMe = this.changeMe.bind(this); // for regular functions
    }

    //passed parameter to arrow functions
    changeMe = arg => e => {
        console.log("arg : ", arg)
        this.setState({
            carName: arg,
            colorName:'RED'
        });
    }

    render() {
        return (
            <React.Fragment>

                <h1>Hi, I am a Car Component-Class Component</h1>
                <h2>Revised Car name is {this.state.carName}</h2>
                {this.state.colorName === 'BLUE' ? <div style={{ color: 'blue' }} >Blue Colored Car</div> : <div style={{ color: this.state.colorName}}>Not a blue car</div>}
                <button onClick={this.changeMe("SUZUKI")}> Change car name</button>
            </React.Fragment>
        )
    }
}

export default Car;