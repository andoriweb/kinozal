import React from 'react'

class Search extends React.Component {
  state = {
    search: '',
    type: 'all'
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  }

  handelFilter = (event) => {
    this.setState(() => ({type: event.target.dataset.type}), () => {
      this.props.searchMovies(this.state.search, this.state.type);
    });
    this.props.searchMovies(this.state.search);
  }

  render () {
    return <div className="row">
            <div className="input-field">
              <input 
                type = "search" 
                className = "validate"
                placeholder = "Search"
                value = {this.state.search}
                onChange = {(e) => this.setState({search: e.target.value})}
                onKeyDown = {this.handleKey}
              />
              <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Seach</button>
            </div>
            <div>
              <label>
                <input 
                  className="with-gap" 
                  name="type" 
                  type="radio" 
                  data-type="all" 
                  onChange={this.handelFilter}
                  checked={this.state.type === 'all'}
                />
                <span>All</span>
              </label>
              <label>
                <input 
                  className="with-gap" 
                  name="type" 
                  type="radio" 
                  data-type="movie" onChange={this.handelFilter} 
                  checked={this.state.type === 'movie'}
                />
                <span>Movies</span>
              </label>
              <label>
                <input 
                  className="with-gap" 
                  name="type" 
                  type="radio" 
                  data-type="series" onChange={this.handelFilter}
                  checked={this.state.type === 'series'} 
                />
                <span>Series</span>
              </label>
            </div>
          </div>
  }
}
export {Search}