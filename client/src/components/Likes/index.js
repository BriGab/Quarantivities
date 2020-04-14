import React, { Component } from "react";
import API from "../../utils/API";

class Likes extends Component {
    state = {
        count: 0
    }

    incrementLikes = () => {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount,    
        })
       this.updateLikes()
    //    this.getUpdateLikes(this.props.id);
    }

    // componentDidMount() { 
    //     this.getUpdateLikes();
    // }

    updateLikes = () => {
        console.log("Got here!", this.props.id)
        API.fetchLikeUpdate(this.props.id)
        .then(likes => {
            console.log("likes", likes);
        })   
    }

    // onLikeChange = (event) => {
    //     this.setState({likes: event.target.value})
    // }


    // getUpdateLikes = (id) => {
    //     // console.log("getUpdateLikes");
    //     API.fetchSavedLikes(this.props.id)
    //     .then(likes => {
    //         console.log("new likes count", likes);
    //     })
    // }


    render() {
        return (
            <div>
                <button onClick={this.incrementLikes}><span role="img" aria-label="purple heart">💜</span>Likes: {this.state.count} </button>
            </div>
        )
    }

}

export default Likes;