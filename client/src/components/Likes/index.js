import React, { Component } from "react";
import API from "../../utils/API";
import "../CardList/style.css";



class Likes extends Component {
    state = {
        count: 0
    }

    incrementLikes = () => {
        console.log("state", this.state.count)
        let newCount = this.state.count + 1 
        this.setState({
            count: newCount,
        })
        console.log("newCount:", newCount)
        console.log("stateAgain", this.state.count)
        this.updateLikes()

    }

    componentDidMount() {
        this.setState({
            count: parseInt(this.props.likes)
        })
        console.log("props", this.props)
    }


    updateLikes = () => {
        API.fetchLikeUpdate(this.props.id)
        .then(response => {
            console.log("response", response)
            this.setState({count: response.data.likes})
            console.log("state2", this.state.count)
        })  
    }


    render() {
        return (
            <div>
                <button className="like-button" onClick={this.updateLikes}><span role="img" aria-label="purple heart">💜</span>Likes: {this.state.count} </button>
            </div>
        )
    }

}

export default Likes;