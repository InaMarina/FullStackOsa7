import React from "react";
import { useHistory } from "react-router-dom";
import { useField } from "../hooks/index";

const CreateNew = (props) => {
  // const [content, setContent] = useState("");
  // const [author, setAuthor] = useState("");
  // const [info, setInfo] = useState("");

  const { reset: resetContent, ...content } = useField("text");
  const { reset: resetAuthor, ...author } = useField("text");
  const { reset: resetInfo, ...info } = useField("text");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });
    history.push("/");
  };

  const resetForm = (e) => {
    e.preventDefault();
    resetContent();
    resetAuthor();
    resetInfo();
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form>
        <div>
          content
          <input
            {...content}

            //  name="content"
            //  value={content}
            //  onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          author
          <input
            {...author}

            //  name="author"
            //  value={author}
            //  onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          url for more info
          <input
            {...info}

            //  name="info"
            //  value={info}
            //  onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>create</button>
        <button onClick={resetForm}>reset</button>
      </form>
    </div>
  );
};

export default CreateNew;
