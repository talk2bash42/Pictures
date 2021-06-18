import React from 'react'

class SearchBar extends React.Component {
  //initialize our state  
  state = {term: ''};
    //it prevents the form from refreshing,
    //it is passed into onSubmit
  onFormSubmit = (e) => {
    e.preventDefault();
    
    this.props.onSubmit(this.state.term)
  }

    render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label htmlFor="">Image Search</label>
                <input 
                type="text"
                 value={this.state.term}
                 onChange={(e) => this.setState({term: e.target.value})} />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;