import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "dummy",
                location: "default",
                avatar_url: "https://dummy.com"
            }      
        }
        // console.log(this.props.name + " Child constructor called");
    }

    async componentDidMount() {
        // console.log(this.props.name + " Child component did mount");
        const data = await fetch("https://api.github.com/users/Yaswanthrangu")
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        })
    }

    render() {
        // console.log(this.props.name + " Child render called");
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img className="avatar" src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @yaswanthrangu</h4>
            </div>
        )
    }
}

export default UserClass;