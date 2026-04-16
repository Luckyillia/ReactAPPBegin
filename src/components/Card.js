import React from 'react'; 

class Card extends React.Component{
    constructor(args){
        super(args);
        this.children = args.children;
    }
    render(){
        this.srcImg = this.props.srcImg;
        return(
            <div className='card' style={{width: "18rem"}}>
                {this.srcImg ?
                (<img class="card-img-top" src={this.srcImg} alt="Card image cap"/>):
                (<></>)}
                <div className="card-body">
                    {this.children}
                </div>      
            </div>
        )
    }
}

export default Card;