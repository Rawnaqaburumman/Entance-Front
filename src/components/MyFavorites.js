import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';
import FavCard from './favCard'
import axios from 'axios';
import FavModel from './model.js';
import { NavItem } from 'react-bootstrap';

class MyFavorites extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      favArray: [],
      show:false,
      selected:{},
      showempty:false


    }


  }

  //====================================================================================

  componentDidMount = async () => {
    const url = process.env.REACT_APP_SERVER
    await axios.get(`${url}/fav`).then(result => {

      if (result){

      this.setState({

        favArray: result.data

      })

    }


    else{

this.state({

  showempty:true
})

    }

    })



  }
  //=================================================================================================


  deleteFav = (_id) => {

    const url = process.env.REACT_APP_SERVER
    axios.delete(`${url}/fav/${_id}`).then(deletedlan => {

      if (deletedlan) {

        const newArray = this.state.favArray.filter(lan =>

          lan._id !== _id

        )
        this.setState({
          favArray: newArray




        })

      }

    })

alert("data deleted")

  }

//==============================================================



handledisplay =(lan)=>{


this.setState({
show:!this.state.show,
selected:lan


})

}

//===============================================================


handleUpdate = async (e)=>{
  console.log("Hi")
e.preventDefault();
  const url = process.env.REACT_APP_SERVER
const body ={

title:e.target.title.value,
imageUrl:e.target.imageUrl.value



}
console.log(body)

await axios.put(`${url}/fav/${this.state.selected._id}`, body).then(updatedLan =>{
console.log(updatedLan.data)
const newArray= this.state.favArray.map(lan =>{


if (lan._id === this.state.selected._id ){
lan= updatedLan.data;
return lan

}
return lan


})


this.setState({

favArray:newArray




})


});


this.handledisplay(this.state.selected)




}







  render() {
    console.log(this.state.showempty)
    return (
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>


        {this.state.showempty &&
<h1> your List is empty </h1>}

        <FavCard

          favArray={this.state.favArray}
          deleteFav={this.deleteFav}
          handledisplay={this.handledisplay}


        />


        <FavModel
            handledisplay={this.handledisplay}
            show={this.state.show}
            selected={this.state.selected}
            handleUpdate ={this.handleUpdate }
        />
      </>
    )
  }
}

export default withAuth0(MyFavorites);
// export default MyFavorites;

