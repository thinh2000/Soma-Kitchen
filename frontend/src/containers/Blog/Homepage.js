import React, { Component } from 'react';
import axios from 'axios';


import Post from '../../components/Post/Recipe';
import FullPost from '../../components/FullPost/RecipeDetail';
import NewPost from '../../components/NewPost/AddRecipe';
import './Homepage.css';

class Blog extends Component {
    state = {
        post: [],
        title: '',
        body: '',
        ingredients: '',
        guide: '',
        // image: null,
        selectedPostId: null
    }

    async fetchData(){    
        const url = "http://localhost:9000/recipes";
        await fetch(url, {mode: "cors"})
            .then(response => response.json())
            .then(json=>this.setState({post: json}))
            .catch(err => console.log(err))                     
    }
 

    componentDidMount() {
        this.fetchData();
    }

    postSelectedHandler = (_id) => {
        this.setState({selectedPostId: _id})
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if(!this.state.error) {
            posts = this.state.post.map(post => {
                return <Post key={post._id}
                 title={post.title}
                 body={post.body}
                 ingredients={post.ingredients}
                 guide={post.guide}
                //  image={post.image}
                 clicked={() => this.postSelectedHandler(post._id)} />
            });
        }
            
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
                
            </div>
        );
    }
}

export default Blog;