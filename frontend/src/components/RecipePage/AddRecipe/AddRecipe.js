//import axios from "axios";
import React, { Component } from "react";

import "./AddRecipe.css";

class AddRecipe extends Component {
  constructor(props){
    super(props);
    this.state = {
      post: [],
      title: '',
      body: '',
      ingredients: '',
      guide: '',
      // image: null,
    };
  }
 

  fetchData(){    
    const url = "http://localhost:9000/recipes";
    fetch(url, {mode: "cors"})
        .then(response => response.json())
        .then(json=>this.setState({post: json}))
        .catch(err => console.log(err))                     
  }

  componentDidMount(){
    this.fetchData();
  }

  // onImageChange = event => {
  //   if (event.target.files && event.target.files[0]) {
  //     let img = event.target.files[0];
  //     this.setState({
  //       image: URL.createObjectURL(img)
  //     });
  //   }
  // };

  postDataHandler = () => {
    // const data = {
    //   title: this.state.title,
    //   body: this.state.content,
    //   ingredients: this.state.ingredients,
    //   guide: this.state.guide,
    //   image: this.state.image,
    // };
    // axios.post("/recipes", data).then((response) => {
    //   console.log(response);
    // });
    const url = "http://localhost:9000/recipes";
    fetch(url, {
      mode: 'cors',
      method: 'post',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({ 
        title: this.state.title, 
        body: this.state.body,
        ingredients: this.state.ingredients,
        guide: this.state.guide,
        
      })

    })
    .then(response => response.json())
    .then(json => this.fetchData(json))
    .catch(err => console.log(err))    
  };

  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Body</label>
        <input
          type="text"
          value={this.state.body}
          onChange={(event) => this.setState({ body: event.target.value })}
        />
        <label>Ingredients</label>
        <input
          type="text"
          value={this.state.ingredients}
          onChange={(event) => this.setState({ ingredients: event.target.value })}
        />
        <label>Guide</label>
        <input
          type="text"
          value={this.state.guide}
          onChange={(event) => this.setState({ guide: event.target.value })}
        />
        {/* <label>Select Image</label>
        <input type="file" name="myImage" onChange={this.onImageChange} /> */}
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default AddRecipe;
