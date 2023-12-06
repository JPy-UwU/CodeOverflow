import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

import "./create.scss";
import TagsInput from "../../components/tags-input/TagsInput";
import { DarkModeContext } from "../../context/darkModeContext";

const CreatePage = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);
  const [value, setValue] = useState("**Hello world!!!**");


  return (
    <div className="create">
      <div className="container">
        <div className="item">
          <h2>Title</h2>
          <p>
            Be specific and imagine you&apos;re asking a question to another
            person.
          </p>
          <input
            type="text"
            placeholder="e.g. Why is server-side redenring useful in Next.js?"
          />
        </div>
        <div className="item" data-color-mode={`theme-${darkMode ? "dark" : "light"}`}>
          <h2>Description</h2>
          <p>
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </p>
          <MDEditor value={value} onChange={setValue} />
        </div>
        <div className="item">
          <h2>Tags</h2>
          <p>
            Add up to 5 tags to describe what your question is about. Tags are
            optional.
          </p>
          <TagsInput />
        </div>
        <div className="item">
          <button onClick={() => navigate("/home")}>Create</button>
          <button onClick={() => navigate("/home")}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
