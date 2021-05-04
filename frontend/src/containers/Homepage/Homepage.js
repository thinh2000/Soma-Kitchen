import React, { Component } from 'react';
//import axios from 'axios';


import Recipe from '../../components/RecipePage/Recipe/Recipe';
import RecipeDetail from '../../components/RecipePage/RecipeDetail/RecipeDetail';
import AddRecipe from '../../components/RecipePage/AddRecipe/AddRecipe';
import './Homepage.css';

class Homepage extends Component {
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
                return <Recipe key={post._id}
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
                    <RecipeDetail id={this.state.selectedPostId}/>
                </section>
                <section>
                    <AddRecipe />
                </section>
                
            </div>
        );
    }
}

export default Homepage;