"use client";
import { useState } from "react";

const SubmissionForm = () => {
  const [content, setContent] = useState();

  const handleChange = (e) => {
    setContent(e.target.value);
  };
  return (
    <div className="submission-form-wrapper">
      <textarea
        className="submission-textarea"
        value={content}
        onChange={handleChange}
        placeholder="Say something..."
      ></textarea>
      <div className="submission-form-container">
        <button className="button button-primary">Say it</button>
      </div>
    </div>
  );
};

export default SubmissionForm;
