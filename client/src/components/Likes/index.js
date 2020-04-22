import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";



class Likes extends Component {
    state = {
        count: 0
    }

    componentDidMount() {
        this.setState({
            count: parseInt(this.props.likes)
        })
    }


    updateLikes = () => {
        API.fetchLikeUpdate(this.props.id)
        .then(response => {
            this.setState({count: response.data.likes + 1})
        })  
    }


    render() {
        return (
            <div>
                <button className="btn-form btn likeButton btn-outline-secondary btn-sm" onClick={this.updateLikes}><span role="img" aria-label="purple heart">💜</span>Likes: {this.state.count} </button>
            </div>
        )
    }

}

export default Likes;