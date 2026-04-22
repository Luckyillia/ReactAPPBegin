import React, { Component } from 'react';

class Counter extends Component { 
    constructor(props) { 
        super(props); 
        this.state = { 
            count: 0 
        }; 
    } 
    increment = () => { 
        this.setState({ 
        count: this.state.count + 1 
        }); 
    }; 
    decrement = () => { 
        this.setState({ 
        count: this.state.count - 1 
        }); 
    }; 
    incrementTwice = () => { 
        this.setState({ 
        count: this.state.count + 1 
        }); 
        this.setState({ 
        count: this.state.count + 1 
        }); 
        // Efekt: licznik zwiększy się tylko o 1! 
    }; 
    incrementTwiceSafely = () => { 
        this.setState(prevState => ({ count: prevState.count + 1 })); 
        this.setState(prevState => ({ count: prevState.count + 1 })); 
        // Efekt: licznik zwiększy się o 2 
    };  
    render () { 
    return ( 
    <div> 
            <p>Aktualna wartość licznika Klasowego Komponentu: {this.state.count}</p> 
            <div className="d-flex justify-content-center gap-2">
                <button onClick={this.increment} className="btn btn-success">Zwiększ licznik</button> 
                <button onClick={this.decrement} className="btn btn-danger">Zmniejsz licznik</button> 
                <button onClick={this.incrementTwice} className="btn btn-warning">Zwiększ licznik "dwa razy"</button> 
                <button onClick={this.incrementTwiceSafely} className="btn btn-info">Zwiększ licznik "dwa razy" bezpiecznie</button> 
            </div>
        </div> 
    ) 
    } 
} 
export default Counter; 