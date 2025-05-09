import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {

    constructor(props) {
        super(props);
        // console.log("Parent constructor called")
    }

    componentDidMount() {
        // console.log("Parent component did mount");
    }

    render() {
        // console.log("Parent render called");
        return (
            <div>
                <h1 className="text-2xl m-2 p-4">About Us</h1>
                <h2 className="text-xl m-2 p-4">This is a Learning course</h2>
                <UserClass name="Yaswanth" location="Dehradun"/>
            </div>
        )
    }
}

export default About;