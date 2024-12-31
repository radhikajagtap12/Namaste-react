
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <br />
                <br />
                {/* <User name="John Doe (Function)" location="Bhosari, Pune" role="Software Engineer"/> */}
                <UserClass name="John Doe (Class)" location="Bhosari, Pune" role="Software Engineer"/>
            </div>
        );
    }
}

export default About;