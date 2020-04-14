import React, { Component } from "react";
import API from "../../utils/API";

class Likes extends Component {
    state = {
        count: 0
    }

    incrementLikes = () => {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
       this.updateLikes();
    }

    // componentDidMount() {
    //     let like = this.state.count;
    //     // this.updateLikes();
    //   }

    updateLikes = () => {
        console.log("Got here!", this.props.id)
        API.fetchLikeUpdate(this.props.id)
        .then(likes => {
            console.log("likes", likes);
        })   
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementLikes}><span role="img" aria-label="purple heart">💜</span>Likes: {this.state.count} </button>
            </div>
        )
    }

}

export default Likes;