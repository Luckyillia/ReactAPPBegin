import React from 'react'; 
import Card from './Card';
import PriceTag from './PriceTag';

class Product extends React.Component {
    render() {
        return (
            <Card srcImg={this.props.srcImg}>
                <h5 className="card-title">{this.props.name}</h5>
                <p className="card-text">
                    <PriceTag price={this.props.price} />
                    {this.props.description}
                </p>
            </Card>
        );
    }
}

export default Product;
