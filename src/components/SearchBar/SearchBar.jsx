import React from 'react'
import "./SearchBar.scss"
import CH_fetch from "../../CH_fetch/CH_fetch"

const SearchBar = (props) => {

  const {inputChangeHandler, inputSubmitHandler} = props

  const {refetch} = CH_fetch

  return (
    <section className="searchBar">
      <h1 className='heading'>Github User Search</h1>
      <form name="inputForm" className='inputForm' onSubmit={inputSubmitHandler}>
        <img src="https://seeklogo.com/images/G/github-logo-45146A3FBE-seeklogo.com.png" alt="logo-github" />
        <input type="text" onChange={inputChangeHandler} placeholder="Search Github's User..." required />
        <button type='submit' onSubmit={refetch}><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </section>
  )
}

export default SearchBar      