import React from "react";
class UserChild extends React.Component {
    constructor(){
        super();
        console.log("UserChild constructor");
    }

    componentDidMount(){
        console.log("UserChild componentDidMount")
    }

    render(){
        console.log("UserChild render");
        return (
            <div>
                <h1>User Child</h1>
            </div>
        )
    }
}

export default UserChild;