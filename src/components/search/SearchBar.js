import React, { Component } from 'react'

class SearchBar extends Component {
    //initialize state
    state = { term: '' };

    //use arrow function to bind this
    onFormSubmit = (e) => {
        e.preventDefault();
        //onSubmit is an props name from App.js
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="two fields">
                        <div className="field">
                            <input
                                type="text"
                                placeholder="Search images"
                                value={this.state.term}
                                onChange={(e) => { this.setState({ term: e.target.value }) }}
                            />
                        </div>
                        <div className="field">
                            <button onClick={this.onFormSubmit} className="ui positive basic button">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;