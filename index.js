window.addEventListener("load", () => {
  //   const myReactElement = React.createElement(
  //     "h1",
  //     { className: "orange" },
  //     "Hello"
  //   );

  const Hello = (props) => {
    return React.createElement(
      "h1",
      { className: "orange" },
      "Hello again!! " + props.time
    );
  };

  class HelloClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString(),
      };
    }

    tick() {
      this.setState(() => {
        return {
          time: new Date().toLocaleString(),
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
      return React.createElement(
        "h1",
        { className: "orange" },
        "Hello again from class!! " + this.state.time
      );
    }
  }

  ReactDOM.render(
    React.createElement(
      HelloClass,
      { time: new Date().toLocaleDateString() },
      null
    ),
    document.getElementById("root")
  );
});
