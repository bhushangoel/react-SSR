// home page: run on both client and server
import React from "react";
import axios from "axios";
import Link from "next/link";

class Index extends React.Component {
  static getInitialProps() {
    var promise = axios
      .get("http://localhost:4040/speakers")
      .then((resp) => {
        return {
          hasErrored: false,
          speakerData: resp.data,
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
      speakerData: props.speakerData,
      message: props.message,
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Link href="/sessions">
          <a>Sessions</a>
        </Link>
        <ul>
          {this.state.speakerData.map((speaker) => (
            <li key={speaker.id}>
              {speaker.firstName} {speaker.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Index;
