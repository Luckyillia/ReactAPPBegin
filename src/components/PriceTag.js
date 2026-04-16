import React from 'react'; 

class PriceTag extends React.Component{
    render() {
        return <p>Cena: {this.props.price} zł</p>;
    }
}
export default PriceTag;