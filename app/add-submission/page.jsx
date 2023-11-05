"use client";

import { useState } from "react";
import SubmissionForm from "../components/submissionForm";
import Link from "next/link";

const AddSubmission = () => {
  const [state, setState] = useState(null);
  return (
    <div className="page-wrapper">
      <h1 className="add-submission-title">Tell your 2023 story</h1>
      <SubmissionForm />
      <Link className="close-btn" href="/">
        Close
        <svg
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_10_141)">
            <path
              d="M11.0259 0.203125C5.28911 0.203125 0.729095 4.76314 0.729095 10.4999C0.729095 16.2367 5.28911 20.7968 11.0259 20.7968C16.7627 20.7968 21.3227 16.2367 21.3227 10.4999C21.3227 4.76314 16.7627 0.203125 11.0259 0.203125ZM11.0259 19.3258C6.1717 19.3258 2.20007 15.3542 2.20007 10.4999C2.20007 5.64573 6.1717 1.6741 11.0259 1.6741C15.8801 1.6741 19.8517 5.64573 19.8517 10.4999C19.8517 15.3542 15.8801 19.3258 11.0259 19.3258Z"
              fill="black"
            />
            <path
              d="M14.9976 15.6484L11.026 11.6767L7.05433 15.6484L5.87755 14.4716L9.84918 10.5L5.87755 6.52834L7.05433 5.35156L11.026 9.32319L14.9976 5.35156L16.1744 6.52834L12.2027 10.5L16.1744 14.4716L14.9976 15.6484Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_10_141">
              <rect
                width="20.5936"
                height="20.5936"
                fill="white"
                transform="translate(0.729095 0.203125)"
              />
            </clipPath>
          </defs>
        </svg>
      </Link>
    </div>
  );
};

export default AddSubmission;
