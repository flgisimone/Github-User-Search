import React from 'react'
import "./SearchBar.scss"

const SearchBar = ({updateState, executionFunction}) => {

  const inputChangeHandler = (e) =>{
    updateState(e.target.value)
}

const inputSubmitHandler = (e) =>{
    e.preventDefault()
    executionFunction()
}

  return (
    <section className="searchBar">
      <h1 className='heading'>Github User Search</h1>
      <form name="inputForm" className='inputForm' onSubmit={inputSubmitHandler}>
        <img src="https://seeklogo.com/images/G/github-logo-45146A3FBE-seeklogo.com.png" alt="logo-github" />
        <input type="text" onChange={inputChangeHandler} placeholder="Search User..." className="inputValue" required />
        <input type='submit' value="Send" className='inputSend'/>
      </form>
    </section>
  )
}

export default SearchBar      