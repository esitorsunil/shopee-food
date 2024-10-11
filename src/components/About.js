import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
    constructor (props){
      super(props);
      
    }

    componentDidMount(){
        
    }

    render(){
        

    return (
        <div>
            <div>
                LoggedIn User
                <UserContext.Consumer>
                    {({loggedInUser}) => (
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
            </div>
            <UserClass name={"Sunil"}/>

        </div>
    );
    };
}
export default About;