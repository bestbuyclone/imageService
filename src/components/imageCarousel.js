import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

const createRandom = () => {
  return(Math.ceil(Math.random() * 40))

}
class DemoCarousel extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <Carousel>
                <div>
                    <img src={`https://s3.us-east-2.amazonaws.com/reviews-hir-app/Product+Pictures/${this.props.productId}.jpeg`} />
                </div>
                <div>
                <img src={`https://s3.us-east-2.amazonaws.com/reviews-hir-app/Product+Pictures/${createRandom()}.jpeg`} />
                </div>
                <div>
                <img src={`https://s3.us-east-2.amazonaws.com/reviews-hir-app/Product+Pictures/${createRandom()}.jpeg`} />
                </div>
                <div>
                <img src={`https://s3.us-east-2.amazonaws.com/reviews-hir-app/Product+Pictures/${createRandom()}.jpeg`} />
                </div>
                <div>
                <img src={`https://s3.us-east-2.amazonaws.com/reviews-hir-app/Product+Pictures/${createRandom()}.jpeg`} />
                </div>
                <div>
                <img src={`https://s3.us-east-2.amazonaws.com/reviews-hir-app/Product+Pictures/${createRandom()}.jpeg`} />
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;