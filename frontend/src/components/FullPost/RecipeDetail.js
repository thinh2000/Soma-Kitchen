import React, { Component } from 'react';
import axios from 'axios';

import './RecipeDetail.css';

class FullPost extends Component {
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
    

    componentDidUpdate() {
        if(this.props._id){
            if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost._id !== this.props._id) ){
                try{
                    axios.get('/recipes' + this.props._id)
                    .then(response => {
                        console.log(response);
                        this.setState({loadedPost: response.data})
                    })
                    .then(res => res.json())

                    
                }
                catch(err){
                    console.log("Failed to fetch recipes posts: ", err.message);
                }
            }
               
        }
    }

    deletePostHandler = () => {
        axios.delete('/recipes' + this.props._id)
            .then(response => {
                console.log(response)
            })
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;

        if(this.props._id){
            post = <p style={{textAlign: 'center'}}>Loading... </p>
        }

        if (this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <p>{this.state.loadedPost.ingredients}</p>
                    <p>{this.state.loadedPost.guide}</p>
                    <p>{this.state.loadedPost.image}</p>
                    <div className="Edit">
                        <button className="Delete"
                        onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;