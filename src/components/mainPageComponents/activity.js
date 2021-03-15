import React, { useState, useEffect, useContext } from 'react'
import Slider from "../sliderComponent/slider";
import postPic from "../../Imgs/bg.jpg";
import authorIcon from "../../Imgs/Oval Copy.svg";
import likeIcon from "../../Imgs/Shape Copy 21.svg";
import commentIcon from "../../Imgs/Shape Copy 9.svg";
import addIcon from "../../Imgs/Path Copy 47.svg";
import userIcon2 from "../../Imgs/Oval Copy.svg";
import axios from 'axios';
import { AuthContext } from '../../context/auth';


const Activity = () => {
    const context = useContext(AuthContext)
    //POSTS API
    const [activities, setActivities] = useState([])

    useEffect(() => {
        axios.post('https://api-dev.inspocreate.com/posts/activities', {}, {
            headers: {
                Authorization: "Bearer " + context.state.token
            }
        })
            .then(response => {
                // console.log(response.data)
                setActivities(response.data.posts)
            }).catch(error => {
                console.error(error)
            })

    }, []);


    //GET USES TO FOLLOWERS API
    const [suggestions, setSuggestions] = useState([])


    useEffect(() => {
        axios.post('https://api-dev.inspocreate.com/users/suggestions', {}, {
            headers: {
                Authorization: "Bearer " + context.state.token
            }
        })
            .then(response => {
                console.log(response)
                setSuggestions(response.data)
            }).catch(error => {
                console.error(error)
            })

    }, []);



    return (
        <div className="wrapper">
            <Slider />
            <div className="activity">
                <div className="scroll-posts">
                    {activities?.map(item => (
                        <div className="scroll-post" key={item.id}>
                            <div className="post-author">
                                <div className="author-icon-name">
                                    <div className="author-icon">
                                        <img src={item.user.profile} />
                                    </div>
                                    <div className="author-name">
                                        <h1 className="pt-2">{item.user.firstName} {item.user.lastName}</h1>
                                        <p>{item.user.username}</p>
                                    </div>
                                </div>
                                <div className="post-time">
                                    <p>{item.createdAt}</p>
                                </div>
                            </div>
                            <div className="post-pic">
                                <img src={item.image} />
                            </div>
                            <div className="post-desc">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                            <div className="post-res">
                                <p><img src={addIcon} />Like</p>
                                <p><img src={commentIcon} />Comment</p>
                                <p><img src={likeIcon} />Add to Collection</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="should-follow">
                    <h2>You Should Follow</h2>
                    {suggestions.map(item => (
                        <div className="user-details">
                            <div className="user-icon-name">
                                <div className="user-img">
                                    <img src={item.profile} />
                                </div>
                                <div className="user-name">
                                    <h1 className="pt-2">{item.firstName} {item.lastName}</h1>
                                    <p>{item.username}</p>
                                </div>
                            </div>
                            <div className="user-follow">
                                <button>Follow</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Activity


