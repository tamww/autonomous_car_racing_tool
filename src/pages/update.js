import React, {Component} from "react";
// import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state={
            TeamName:"",
            LapTime:"",
        }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        // axios.post()
    }
    render() {
        const {TeamName, LapTime} = this.state;

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input
                            type="text"
                            name = "TeamName"
                            value={TeamName}
                            onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text"
                               name = "LapTime"
                               value={LapTime}
                               onChange={this.changeHandler}/>
                    </div>
                    <button type="submit"> Submit </button>
                </form>
            </div>
        )
    }
}
export default PostForm