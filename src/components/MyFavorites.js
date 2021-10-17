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
  let email2=this.props.auth0.user.email
 let dataId = item
 let deleteData = `${process.env.REACT_APP_SERVER}/delete?dataID=${dataId}&emaill=${email2}`
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
  let email2=this.props.auth0.user.email
 let titleee = e.target.title.value
 console.log(titleee)
 let imageUrl = e.target.url.vale
 let dataID = this.state.formInfo._id
 console.log(dataID)

 let getdata = `${process.env.REACT_APP_SERVER}/update?title=${titleee}&id=${dataID}&emaill=${email2}&img=${imageUrl}`
 let newData = await axios.put(getdata)
 this.setState({
  favoriteData : newData.data,
  showForm : false,
})

}

closeForm = ()=>{
  this.setState({
    
    showForm : false,
  })
}

componentDidMount =async()=>{
  let email2=this.props.auth0.user.email
  let getData = `${process.env.REACT_APP_SERVER}/getFavorite?emaill=${email2}`
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
           <FormUpdate info = {this.state.formInfo} upd={this.update} close={this.closeForm}/>
}

      </>
    )
  }
}

export default withAuth0(MyFavorites);

