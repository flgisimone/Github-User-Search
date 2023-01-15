import CH_fetch from '../../CH_fetch/CH_fetch'
import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Error from "../../atoms/Error/Error"

import "./UserTab.scss"

const UserTab = () => {

    const [user, setUser] = useState("github")

    const inputChangeHandler = (e) =>{
        //console.log("Alfio")
        setUser(e.target.value)
    }
    
    useEffect(() => {
        console.log("onChange: " + user)
        console.log("onChange: " + urlAPI)
        console.log("onChange: " + urlAPIrepo)
    }, [user])

    const inputSubmitHandler = (e) =>{
        e.preventDefault()
        setUser(user) //se metto e.target.value torna undefined

        console.log("\n" + "\n")
        console.log("onSubmit: " + user)
        console.log("onSubmit: " + urlAPI)
        console.log("onSubmit: " + urlAPIrepo)
    }
   
    const urlAPI = `https://api.github.com/users/${user}`
    const urlAPIrepo = `https://github.com/${user}?tab=repositories`
    const {data, error, loading} = CH_fetch(urlAPI)

    if(error) return <Error />
    if(loading) return `Loading...`;

    let updateDate = data?.updated_at.substring(0, 10)
    updateDate = updateDate?.split("-").reverse().join("-");

    let joinedDate = data?.created_at.substring(0, 10)
    joinedDate = joinedDate?.split("-").reverse().join("-");

  return (
    
    <section className='container_UserTab'>

        <SearchBar inputSubmitHandler={inputSubmitHandler} inputChangeHandler={inputChangeHandler} />
 
        <div className='wrapperUser'>
            
            <div className="infoBox_primary">
                <img src={data?.avatar_url} alt={data?.name} />
                <div className="subInfo_primary">
                    <h2 className="name">{data?.name}</h2>
                    <a href={data?.html_url}>{"@" + data?.login}</a>
                    <h4 className='joined'>{"Last Update at " + updateDate}</h4>
                </div>
                <p className='bio'>{data?.bio}</p>
            </div>

            <div className="stats">
                <div className="repoCard">
                    <a href={urlAPIrepo}><h5>Repository</h5></a>
                    <a href={urlAPIrepo}><span>{data?.public_repos}</span></a>
                </div>
                <div className="followerCard">
                    <h5>Followers</h5>
                    <span>{data?.followers}</span>
                </div>
                <div className="followingCard">
                    <h5>Following</h5>
                    <span>{data?.following}</span>
                </div>
            </div>

            <div className="infoBox_secondary">
                <div className="companyCard">
                    <i className="fa-solid fa-building"></i>
                    <span>{data?.company}</span>
                </div>
                <div className="locationCard">
                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                    <span>{data?.location}</span>
                </div>
                <div className="emailCard">
                    <i className="fa-solid fa-envelope"></i>
                    <span>{data?.email}</span>
                </div>
                <div className="siteCard">
                    <i className="fa-solid fa-link"></i>
                    <a href={data?.blog}>{data?.blog}</a>
                </div>
            </div>

            <span className='joined'>{"Joined at " + joinedDate}</span>
        </div>
    </section>
  )
}

export default UserTab