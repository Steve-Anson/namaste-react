import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Default Name"
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Steve-Anson");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name } = this.state.userInfo;
    return (
      <div className="user--details">
        <h1>{name}</h1>
      </div>
    );
  }
}

export default UserClass;
