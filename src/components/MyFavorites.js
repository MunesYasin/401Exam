import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';
import CardOfFavoriteData from './CardOfFavoriteData'
import axios from 'axios'
import FormUpdate from './FormUpdate'
class MyFavorites extends React.Component {

  constructor(props){
    super(props);
    this.state={
        favoriteData : [],
        showForm : false,
        formInfo : {}
    }
}

delete=async(item)=>{
  
 let dataId = item
 let deleteData = `${process.env.REACT_APP_SERVER}/delete?dataID=${dataId}`
let getdata = await axios.delete(deleteData)
this.setState({
  favoriteData : getdata.data
})
console.log(this.state.favoriteData)
}

showFormUpdate=(item)=>{
  
  this.setState({
    showForm : true,
    formInfo:item 
  })

}

update =async (e)=>{
  e.preventDefault();

 let title = e.target.title.value
 //let imageUrl = e.target.url.vale
 let dataID = this.state.formInfo._id


 let getdata = `${process.env.REACT_APP_SERVER}/update?title=${title}&id=${dataID}`
 let newData = await axios.put(getdata)
 this.setState({
  favoriteData : newData.data
})

}

componentDidMount =async()=>{
  let getData = `${process.env.REACT_APP_SERVER}/getFavorite`
  let newData = await axios.get(getData)
  console.log(newData)
  this.setState({
    favoriteData : newData.data
  })
}






  render() {
    return(
      <>
        <h1>My Favorites</h1>
        <p>
          This is a collection of my favorites
        </p>
        {this.state.favoriteData.map((item,index)=>{
        return(<CardOfFavoriteData item={item} key={index} delete={this.delete} update={this.showFormUpdate}/>)   
        })
       
       }
       {this.state.showForm &&
           <FormUpdate info = {this.state.formInfo} upd={this.update}/>
}

      </>
    )
  }
}

export default withAuth0(MyFavorites);

