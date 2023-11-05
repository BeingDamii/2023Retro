'use client'

import { useState } from "react";

const AddSubmission = () => {
  const [state, setState] = useState(null);
  return (
    <div className="page-wrapper">
      <h1 className="add-submission-title">Tell your 2023 story</h1>
    </div>
  );
};

export default AddSubmission;
