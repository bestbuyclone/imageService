import React from "react";
import ReactDOM from "react-dom";
import ImageCarousel from "./components/imageCarousel"



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      productId: 1,
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <ImageCarousel/>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('images'));
