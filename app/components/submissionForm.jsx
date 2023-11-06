"use client";
import { useState } from "react";

const SubmissionForm = () => {
  const [submission, setSubmission] = useState("");
  const [name, setName] = useState("");
  const [twitter, setTwitter] = useState(false);

  // event handlers
  const handleSubmissionChange = (e) => {
    setSubmission(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTwitterChange = (e) => {
    setTwitter(e.target.checked);
  };

  const handleClick = () => {
    const post = {
      submission,
      name,
      twitter,
    };
    console.log(post);
  };

  return (
    <div className="submission-form-wrapper">
      <textarea
        className="submission-textarea"
        value={submission}
        onChange={handleSubmissionChange}
        placeholder="Say something..."
      ></textarea>
      <div className="submission-form-container">
        <button className="button-primary" onClick={handleClick}>
          Say it
        </button>
        <div className="other-form">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="username-input"
            placeholder="@ Your username"
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={twitter}
              onChange={handleTwitterChange}
              className="checkbox"
              name="twitter"
              id=""
            />
            <h3>This is my X username</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionForm;
