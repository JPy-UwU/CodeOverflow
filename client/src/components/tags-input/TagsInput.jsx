import React, { useState } from "react";
import toast from "react-hot-toast";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import "./tags-input.scss";

const TagsInput = () => {
  const [tags, setTags] = useState([]);

  const handleTags = (event) => {
    if (
      event.key === "Enter" &&
      event.target.value !== "" &&
      tags.length < 10
    ) {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    } else if (tags.length < 1 && event.key === "Backspace") {
      toast.error("Since there is no tags you can't able to delete any tags");
    } else if (event.target.value === "" && event.key === "Enter") {
      toast.error("The tag should be one character long!");
    } else if (tags.length >= 10) {
      toast.error("You can't add more than 10 tags!");
    }
  };

  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };

  return (
    <div className="tags-input">
      <input
        type="text"
        placeholder="Write some tag and press enter"
        onKeyDown={(event) => handleTags(event)}
      />
      {tags.map((tag, index) => (
        <div className="single-tag" key={index}>
          <span>{tag}</span>
          <i>
            <CloseOutlinedIcon onClick={() => removeTags(index)} />
          </i>
        </div>
      ))}
    </div>
  );
};

export default TagsInput;
