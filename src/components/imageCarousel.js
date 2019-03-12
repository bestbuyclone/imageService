import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
 
class DemoCarousel extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <Carousel>
                <div>
                    <img src="./assets/images/5_Star_Rating_System_1_star_T.png" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src="./assets/images/5_Star_Rating_System_2_and_a_half_stars_T.png" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="./assets/images/5_Star_Rating_System_2_stars_T.png" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="./assets/images/5_Star_Rating_System_2_stars_T.png" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="./assets/images/5_Star_Rating_System_2_stars_T.png" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src="./assets/images/5_Star_Rating_System_2_stars_T.png" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;