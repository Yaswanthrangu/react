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
            <div className="w-[250px] h-[400px] bg-[#f0f0f0] m-2 p-2 rounded-xl hover:border hover:border-black transition-transform hover:scale-105 flex flex-col">
                <img
                    className="w-full h-1/2 object-cover rounded-md"
                    src={avatar_url}
                    alt="user avatar"
                />

                <div className="flex flex-col justify-evenly flex-grow mt-2 text-center text-sm text-gray-800">
                    <h2 className="font-semibold">Name: {name}</h2>
                    <h3>Location: {location}</h3>
                    <h4 className="text-blue-600 font-medium">Contact: @yaswanthrangu</h4>
                </div>
            </div>
        )
    }
}

export default UserClass;