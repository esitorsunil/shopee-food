import React from "react";

class UserClass extends React.Component{
    constructor (props){
      super(props);
      
    };

    componentDidMount(){
        
    }


    render(){
      
        const {name} = this.props;

        return(
           
        <div>
            <h2>Name: {name}</h2>
            <h3>Location: Coimbatore</h3>
            <h4>Contact: @sunil_viii</h4>
        </div>  
        );
    };
};

export default UserClass;