import React, {Component} from "react"
import { connect } from "react-redux";
import axios from 'axios'


import "antd/dist/antd.css";
import { Table } from "antd";

import store from '../store'

import {getlist, inputchange, selectchange, submit}from '../store/actionCreator'


class Inventory extends Component{
   
    componentDidMount = () =>{
        const action = getlist();
        store.dispatch(action);
    }

    render(){
        const columns = [
            {
              title: "id",
              dataIndex: "id",
              key: "id",
              render: (text) => <a>{text}</a>
            },
            {
                title:"images",
                dataIndex: "images",
                key: "images",
                render: (url) => <img src={url}></img>
            },
            {
                title:"make",
                dataIndex: "make",
                key: "make"
            },
            {
                title:"color",
                dataIndex: "color",
                key: "color"
            },
            {
                title:"price",
                dataIndex: "price",
                key: "price"
            }
          ];
    
          const data = [] 
            for(let i = 0; i<this.props.carlists.length; i++){
            let newcar = {}
            newcar["id"] = this.props.carlists[i].id
            newcar["images"] =  this.props.carlists[i].images
            newcar["make"] =  this.props.carlists[i].make
            newcar["color"] =  this.props.carlists[i].color
            newcar["price"] =  this.props.carlists[i].price  
            data.push(newcar)    
        }
    
        return(
            <div>
               <Table columns={columns} dataSource={data} />
               <p>筛选</p>
                <select onChange={this.props.handleSelectChange}>
                    <option>color</option>
                    <option>make</option>
                </select>
                <input onChange ={this.props.handleInputChange}/>
                <button onClick={this.props.handleSubmit}>sumbit</button>             
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        carlists: state.showlist
    } 
}
const mapDispatchToProps = dispatch =>{
  return{
      handleInputChange(event){
          const action = inputchange(event.target.value)
          dispatch(action)
      },
      handleSelectChange(event){
        const action = selectchange(event.target.value)
        dispatch(action)
    },
    handleSubmit(){
        const action = submit()
        dispatch(action)
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Inventory);
  
