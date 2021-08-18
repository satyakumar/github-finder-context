import React from 'react'

const Search: React.FC = () => {
    return (
      <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" required/>
          <label className="label-icon" html-for="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
    )
}

export default Search
