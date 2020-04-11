import React, { Component } from "react";

class Likes extends Component {
    state = {
        count: 0
    }

    incrementLikes = () => {
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementLikes}>💜Likes: {this.state.count} </button>
            </div>
        )
    }

}

export default Likes;