import React, {useState, useEffect, useContext} from 'react'
import plusIcontwo from "../../../../../assets/Imgs/Shape Copy 212.svg";
import { AuthContext } from '../../../../../context/auth';
import axios from '../../../../../axios'
import { useHistory } from "react-router-dom";

const TagComponent = props => {
    return (
      <div className="tagComponent">
        <div className="tagComponent__text" >{props.text}</div>
        <div className="tagComponent__close" onClick={() => { props.cullTagFromTags(props.text) }}>X</div>
      </div>
    )
  }
  
const LocalPost = () => {
    const context = useContext(AuthContext)

  // API FOR FORM DATA FOR CREATE POST
const [postState, setPostState] = useState({
    "title": "",
    "description": "",
    "categories": ["anas"],
    "url": undefined,
    "image": undefined,
    "tags": [

    ],
    "public": true,
    "collection": true,
    "postType": "Image"
  })
  const history = useHistory();

  const onChangeFile = (event) => {
    // console.log(event);
    // console.log(context)
    const formData = new FormData();
    formData.append('file', event.target.files[0])
    axios.post('/media', formData, {
      headers: {
        Authorization: "Bearer " + context.state.token
      }
    })
      .then(response => {
        setPostState({
          ...postState,
          image: response.data.path
        })
        console.log(response)
      }).catch((error) => {
        console.error(error.response)
      });
  }

  // API FOR SELECT CATEGORIES
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios.get('/categories')
      .then(response => {
        setCategories(response.data)
      })
      .catch(error => {
        console.error(error.response)
      })
  }, [])


  // API FOR CREATE POST
  const pushPost = (e) => {
    e.preventDefault();
    axios.post('/posts/create', { ...postState, categories: [categories[0].id] }, {
      headers: {
        Authorization: "Bearer " + context.state.token
      }
    })
      .then(response => {
        history.push('/uploadedPost')
        console.log(response)
      }).catch((error) => {
        console.error(error.response)
      });
  }

  // TAGS IN INPUT
  const [tags, setTags] = React.useState(['JavaScript', 'TypeScript'])
  const inputRef = React.useRef();
  const [inputValue, setInputValue] = React.useState('')

  const inputValueChangeHandler = inputChange => {
    setInputValue(inputChange);
    if (inputChange[inputChange.length - 1] === ',') {
      setTags([...tags, inputChange.slice(0, inputChange.length - 1)]);
      setInputValue('');
    }
  }
  const cullTagFromTags = (tag) => {
    setTags([...tags.filter(element => element !== tag)])
  }
    return (
        <div>
            <form className="add-post-form" onSubmit={pushPost}>
                  {!postState.image && (
                    <label className="add-img">
                      <img src={plusIcontwo} />
                      <p>Add New</p>
                      <input type="file" hidden onChange={onChangeFile} />
                    </label>
                  )}
                  {!!postState.image && (
                    <img src={postState.image} />
                  )}
                  <div className="input-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder="Some Text Here" />
                  </div>
                  <div className="input-post">
                    <label htmlFor="category">Categories</label>
                    <select name="category" className="select-type">
                      {categories.map(item => (
                        <option value={item.id}>{item.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="input-post">
                    <label htmlFor="massage">Description</label>
                    <textarea type="text" rows="6" placeholder="Some Text Here" />
                  </div>
                  <div className="input-post">
                    <label htmlFor="tags">Add Tags</label>
                    <div className="tagArea">
                      <div className='tagArea__displayArea'>
                        {tags.map(tag => <TagComponent text={tag} cullTagFromTags={cullTagFromTags} />)}
                      </div>
                      <input type='text' ref={inputRef} value={inputValue} onChange={event => inputValueChangeHandler(event.target.value)} placeholder='separated by commas' className="tagArea__input" />
                    </div>
                  </div>
                  <div className="submit-btn">
                    <button type="submit">I Would Like to Post Now</button>
                  </div>
                </form>
        </div>
    )
}

export default LocalPost




// postType: postType

// useEffect(() => {
//     if(context.state){
//       setShow(false)
//     }
//   }, [context])