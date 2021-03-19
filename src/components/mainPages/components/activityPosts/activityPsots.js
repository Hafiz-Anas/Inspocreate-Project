import {useEffect} from 'react'
import likeIcon from "../../../../assets/Imgs/Shape Copy 21.svg";
import commentIcon from "../../../../assets/Imgs/Shape Copy 9.svg";
import addIcon from "../../../../assets/Imgs/Path Copy 47.svg";
import { getPostList } from '../../../../reducers';
import { useDispatch, useSelector } from 'react-redux';

const ActivityPosts = () => {
    const state = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostList())
    }, []);

    return (
        <div>
            <div className="scroll-posts">
                {state.data.map(item => (
                    <div>{item.title}</div>
                ))}
            </div>
        </div>
    )
}

export default ActivityPosts
{/* <div className="scroll-post" key={item.id}>
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
                            <p>{item.body}</p>
                        </div>
                        <div className="post-res">
                            <p><img src={addIcon} />Like</p>
                            <p><img src={commentIcon} />Comment</p>
                            <p><img src={likeIcon} />Add to Collection</p>
                        </div>
                    </div> */}