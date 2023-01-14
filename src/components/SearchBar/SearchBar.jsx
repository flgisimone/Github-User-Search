import React, {useState} from 'react'
import "./SearchBar.scss"

const SearchBar = (props) => {

  const {inputChangeHandler, inputSubmitHandler, user} = props
 

  return (
    <section className="searchBar">
      <h1 className='heading'>Github's Users Search</h1>
      <form name="inputForm" className='inputForm' onSubmit={inputSubmitHandler}>
        <img src="https://seeklogo.com/images/G/github-logo-45146A3FBE-seeklogo.com.png" alt="logo-github" />
        <input type="text" onChange={inputChangeHandler} placeholder="Search Github's User..." required />
        <button type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </section>
  )
}

export default SearchBar