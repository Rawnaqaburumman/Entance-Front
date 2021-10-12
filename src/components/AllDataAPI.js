import axios from 'axios';
import React, { Component } from 'react';
 import { withAuth0 } from '@auth0/auth0-react';
import LanCard from './lanCard'

class AllDataAPI extends Component {


constructor(props){
super(props)
this.state ={

lanArray:[]


}


}


componentDidMount = async ()=>{
const url=process.env.REACT_APP_SERVER
await axios.get(`${url}/lan`).then(result =>{

this.setState({

lanArray:result.data

})



})



}

//====================================================================================================

addFav = async (title,imageUrl)=>{
    const url=process.env.REACT_APP_SERVER
const body ={
title:title,
imageUrl:imageUrl,


}
console.log(body)

await axios.post(`${url}/fav` , body)
alert("lan is added ")
console.log("lan is added ")
}






    render() {
        console.log(this.state.lanArray)
        return (
         
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>

                <LanCard
                lanArray={this.state.lanArray}
                addFav={this.addFav}
                
                />
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);


// export default AllDataAPI;
