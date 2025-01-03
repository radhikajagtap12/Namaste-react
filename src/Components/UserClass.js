import React from "react";
import UserChild from "./UserChild";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
                name: "Dummy",
                location: "Pune",
            }
        };
        
    }

    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/radhikajagtap12");

        const userData = await data.json();

        this.setState({
            userInfo: userData,
        });        
    }

    componentDidUpdate() {
        // console.log("Component did Updated");
        // perform any necessary actions here
    }
    componentWillUnmount() {
        // console.log("Component will Unmount");
        // perform any necessary actions here
    }
    render() {
        const { id, login, avatar_url} = this.state.userInfo
        // console.log(this.state.userInfo);
        return (
            <div className="userCard">
                {/* <UserChild />
                <div>{this.state.count}</div>
                 {/* Never update state variables directly }
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                 }}>Click Me</button>
                <br /> */}
                <img src={avatar_url} alt="Avtar Image"></img>
                <h1>{id}</h1>
                <h3>{login}</h3>
            </div>
        );
    }
}

export default UserClass;