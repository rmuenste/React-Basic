import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            powerLevel: props.powerLevel,
            homeLink: "" 
        };
    }

    onIncreasePower() {
    // Careful the <this> keyword refers to the caller of the function,
    // which may be a button in case of an event. So we have to make sure
    // that <this> always refers to what it should by binding it correctly.
        this.setState(prevState => ({
            powerLevel: prevState.powerLevel + 3
        }));
    }

    onHandleChange(ev) {
        console.log("onHandleChange " + ev.target.value);
        this.setState({
            homeLink: ev.target.value
        })

    }

    onChangeLink() {
        console.log("onChangeLink  ");
        this.props.changeLink(this.state.homeLink);
    }

    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <p>Your name is {this.props.name}, your power level is {this.state.powerLevel}</p>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <button onClick={() => this.onIncreasePower()} className="btn btn-primary">Power++</button>
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        )
    };
}