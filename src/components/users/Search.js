import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };
  
  const onChange = (event) => setText(event.target.value);

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search users..."
          value={text}
          onChange={onChange}
        ></input>
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        ></input>
      </form>
      {githubContext.users.length > 0 && (
        <button 
        className="btn btn-light btn-block" 
        onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
  }


export default Search;
