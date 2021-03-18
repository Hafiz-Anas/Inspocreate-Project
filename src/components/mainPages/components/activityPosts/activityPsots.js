import {useEffect} from 'react'
import likeIcon from "../../../../assets/Imgs/Shape Copy 21.svg";
import commentIcon from "../../../../assets/Imgs/Shape Copy 9.svg";
import addIcon from "../../../../assets/Imgs/Path Copy 47.svg";
import { loadActivities } from '../../../../reducers/rootReducers';
import { useDispatch, useSelector } from 'react-redux';


const ActivityPsots = () => {
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(loadActivities())
    }, []);
    return (
        <div>
            <div className="scroll-posts">
                {loadActivities?.map(item => (
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
        </div>
    )
}

export default ActivityPsots