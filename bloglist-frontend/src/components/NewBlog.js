import React, { useState } from 'react';

import { Button, TextField } from '@material-ui/core';
import HttpIcon from '@material-ui/icons/Http';
import CreateIcon from '@material-ui/icons/Create';
import TitleIcon from '@material-ui/icons/Title';

const NewBlog = (props) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const handleNewBlog = (event) => {
    event.preventDefault();

    const blog = {
      title,
      author,
      url,
    };

    props.createBlog(blog);

    setTitle('');
    setAuthor('');
    setUrl('');
  };

  const padding = {
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
  };

  const buttonStyle = {
    marginLeft: 15,
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={handleNewBlog}>
        <div>
          <CreateIcon style={{ fontSize: 60 }} />
          <TextField
            variant="outlined"
            label="Author"
            id="author"
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          <TitleIcon style={{ fontSize: 60 }} />
          <TextField
            variant="outlined"
            label="Title"
            id="title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          <HttpIcon style={{ fontSize: 60 }} />
          <TextField
            variant="outlined"
            label="URL"
            id="url"
            value={url}
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <Button
          style={buttonStyle}
          variant="contained"
          id="create"
          type="submit"
        >
          Create!
        </Button>
      </form>
    </div>
  );
};

export default NewBlog;
