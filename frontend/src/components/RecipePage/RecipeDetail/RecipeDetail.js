import React, { Component } from 'react';
import axios from 'axios';

import './RecipeDetail.css';

const url = "http://localhost:9000/recipes/" 

class RecipeDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
          loadedPost: null,
          title: '',
          body: '',
          ingredients: '',
          guide: '',
          // image: null,
        };
      }
  
      async fetchData(){    
        
        await fetch(url + this.props.id , {mode: "cors"})
            .then(response => response.json())
            .then(json=>this.setState({ loadedPost: json }))
            .catch(err => console.log(err))                     
    }

    componentDidUpdate() {
        if(this.props.id){
            if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ){
                try{
                    this.fetchData()
                }
                catch(err){
                    console.log("Failed to fetch recipes posts: ", err.message);
                }
            }
               
        }
    }

    deleteHandler = () => {
        if(confirm('Do you want to delete?')){
            fetch(url + this.props.id, {
                method: 'delete',
            }).then(res => res.json())
            .then(json => this.fetchData())
        }
     
    }
 

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        if(this.props.id){
            post = <p style={{textAlign: 'center'}}>Loading... </p>
        }

        if (this.state.loadedPost){
            post = (
                <div className="RecipeDetail">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <p>{this.state.loadedPost.ingredients}</p>
                    <p>{this.state.loadedPost.guide}</p>
                    <p>{this.state.loadedPost.image}</p>
                    <div className="Edit">
                        <button className="Delete"
                        onClick={this.deleteHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default RecipeDetail;