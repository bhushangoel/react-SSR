import React, { Component } from "react";
import axios from "axios";

class sessions extends Component {
  static getInitialProps() {
    var promise = axios
      .get("http://localhost:4040/sessions")
      .then((resp) => {
        return {
          hasErrored: false,
          sessionData: resp.data,
        };
      })
      .catch((err) => {
        return {
          hasErrored: true,
          message: err.message,
        };
      });

    return promise;
  }

  constructor(props) {
    super(props);
    this.state = {
      hasErrored: props.hasErrored,
      sessionData: props.sessionData,
      message: props.message,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <ul>
        {this.state.sessionData.map((session) => (
          <li key={session.id}>
            {session.title} {session.id}
          </li>
        ))}
      </ul>
    );
  }
}

sessions.propTypes = {};
sessions.defaultProps = {};

export default sessions;
