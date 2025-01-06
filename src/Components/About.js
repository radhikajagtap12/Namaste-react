
import UserContext from "../utils/userContext";
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
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
                {/* <User name="John Doe (Function)" location="Bhosari, Pune" role="Software Engineer"/> */}
                <UserClass name="John Doe (Class)" location="Bhosari, Pune" role="Software Engineer"/>
            </div>
        );
    }
}

export default About;