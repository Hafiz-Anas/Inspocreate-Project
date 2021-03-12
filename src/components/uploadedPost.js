import React from 'react'
import postPic from "../Imgs/bg.jpg";
import authorIcon from "../Imgs/Oval Copy.svg";
import likeIcon from "../Imgs/Shape Copy 21.svg";
import commentIcon from "../Imgs/Shape Copy 9.svg";
import addIcon from "../Imgs/Path Copy 47.svg";
import userIcon2 from "../Imgs/Oval Copy.svg";


export const UploadedPost = () => {
    return (
        <div className="uploaded-post wrapper">
            <div className="your-post">
                <div className="scroll-post">
                    <div className="post-author">
                        <div className="author-icon-name">
                            <div className="author-icon">
                                <img src={authorIcon} />
                            </div>
                            <div className="author-name">
                                <h1 className="pt-2">Motivation Company</h1>
                                <p>motivationtoday</p>
                            </div>
                        </div>
                        <div className="post-time">
                            <p>2 Minutes ago</p>
                        </div>
                    </div>
                    <div className="post-pic">
                        <img src={postPic} />
                    </div>
                    <div className="post-desc">
                        <h1>Some video title name is dolor site ament.</h1>
                        <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua pt enim ad minim</p>
                    </div>
                    <div className="post-res">
                        <p><img src={addIcon} />Like</p>
                        <p><img src={commentIcon} />Comment</p>
                        <p><img src={likeIcon} />Add to Collection</p>
                    </div>
                </div>
                <div className="comment">
                    <h2>Be The First To Write a Comment</h2>
                    <h3>Write your Comment</h3>
                    <div className="enter-comment">
                        <input type="text"/>
                        <button></button>
                    </div>
                </div>
            </div>
            <div className="should-follow">
                <div className="user-details">
                    <div className="user-icon-name">
                        <div className="user-img">
                            <img src={userIcon2} />
                        </div>
                        <div className="user-name">
                            <h1 className="pt-2">Boss Jorn</h1>
                            <p>@realjorn</p>
                        </div>
                    </div>
                    <div className="user-follow">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadedPost