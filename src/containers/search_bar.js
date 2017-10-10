import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {term: ''}

    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this) //bind the onInputChange function to SearchBar and replace Component's onInputChange with this new bound function
  }

  onInputChange(event) {
    console.log(event.target.value) //vanilla js
    this.setState({term: event.target.value})
  }


  onFormSubmit(event) {
    event.preventDefault() //prevent submit
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }

  // this.onInputChange is a callback and we need to bind it
  // use form because the eventHandler for submitting with enter key is already dealt with
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        placeholder="Get a five day forecast in your favourite cities"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

/* makes sure action flows down from middleware to redux */
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather },dispatch)
  }

/* Takes mapDispatchToProps function and SearchBar to make it a container */
  export default connect(null,mapDispatchToProps)(SearchBar)
