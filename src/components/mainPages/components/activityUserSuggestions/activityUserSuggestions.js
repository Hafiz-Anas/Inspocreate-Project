import {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../../../../context/auth';
import axios from '../../../../axios';


const ActivityUserSuggestions = () => {
    const context = useContext(AuthContext)
    //GET USES TO FOLLOWERS API
    const [suggestions, setSuggestions] = useState([])


    useEffect(() => {
        axios.post('/users/suggestions', {}, {
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
        <div>
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
    )
}

export default ActivityUserSuggestions