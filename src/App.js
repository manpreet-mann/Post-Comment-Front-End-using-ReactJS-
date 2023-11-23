import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value)
  };
  return <div className='post-comment'>
    {comments.map((text) => (
      <div className='comment-container'>{text}</div>
    ))}
    <div className='comment-flexbox'>
      <h2 className='comment-text'>Post A Doubt</h2>
      <textarea
        value={comment}
        onChange={onChangeHandler}
        className='input-box'
      />
      <button onClick={onClickHandler} className='comment-button'>Post</button>
    </div>
  </div>;
}

export default App;
