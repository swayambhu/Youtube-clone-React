import React, {Component} from 'react';

class SearchBar extends Component {
    state = {
        term : "",
    
    }
    onInputChange = (e) => {
        this.setState({
            term : e.target.value
        })
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
        this.setState({
            term : ''
        })
        // TODO : Make sure we call
        // Callback from parent component
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <div className="ui form">
                    <form  onSubmit={this.onFormSubmit} className="field">
                        <label>Video Search : </label>
                        <input 
                        type="text"
                        placeholder="Search..." 
                        onChange={this.onInputChange}
                        value={this.state.term}/>
                    </form>
                </div>
            </div>
        )
    }
    
}
 
export default SearchBar;