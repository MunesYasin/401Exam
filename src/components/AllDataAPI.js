import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios'
import CardOfAllData from './CardOfAllData'
class AllDataAPI extends Component {
constructor(props){
    super(props);
    this.state={
        allData : [],
    }
}

addFavorite = async (title,imgUrl)=>{
    console.log(imgUrl)
let addData = `${process.env.REACT_APP_SERVER}/addData?title=${title}&img=${imgUrl}`
let addFavoriteData = await axios.post(addData)

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
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3>
                {this.state.allData.map((item,index)=>{

                  return(<CardOfAllData item = {item} key={index} add ={this.addFavorite}/>) 
                    

                })}
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
