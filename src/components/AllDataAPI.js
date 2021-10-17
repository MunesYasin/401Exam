import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios'
import CardOfAllData from './CardOfAllData'
import './grid.css'
class AllDataAPI extends Component {
constructor(props){
    super(props);
    this.state={
        allData : [],
    }
}

addFavorite = async (title,imgUrl)=>{

    
    let  titlee =title 
    let img =imgUrl 
    let email2 = this.props.auth0.user.email
  

    console.log(imgUrl)
let addData = `${process.env.REACT_APP_SERVER}/addData?title=${titlee}&img=${img}&email=${email2}`
let addFavoriteData = await axios.post(addData)
console.log(addFavoriteData)

}

componentDidMount =async()=>{
    let getData = `${process.env.REACT_APP_SERVER}/getAllData`
    let newData = await axios.get(getData)
    console.log(newData)
    this.setState({
        allData : newData.data
    })
}

    render() {
        return (
            <div >
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>
                {this.state.allData.map((item,index)=>{

                  return(
                  
                  <div className="grid">
                  <CardOfAllData item = {item} key={index} add ={this.addFavorite} />
                  
                  
                  </div>
                  ) 
                    

                })}
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
