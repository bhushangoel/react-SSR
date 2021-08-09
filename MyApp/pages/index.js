// home page: run on both client and server
import React from "react";
import DigitalClock from "../src/DigitalClock";

class Index extends React.Component {
  static getInitialProps() {
    // mismatch fix
    // return {
    //   time: new Date(),
    // };

    // handling async requests
    const promise = new Promise((resolve, reject) => {
      setInterval(() => {
        resolve({
          time: new Date(),
        });
      }, 3000);
    });

    return promise;
  }

  constructor(props) {
    super(props);
    this.state = {
      time: props.time,
    };
  }

  tick() {
    this.setState(() => {
      return {
        time: new Date().getTime(),
      };
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <DigitalClock time={this.state.time} />;
  }
}

export default Index;
