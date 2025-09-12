import React, { useState } from "react";
import "./index.css";
import Tooltip from "@mui/material/Tooltip";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Googleaccount() {
  const [open, setOpen] = useState(false); // initially closed
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div>
      <Tooltip title="Google Account" placement="bottom">
        <AccountCircleIcon className="account-icon"
          onClick={() => setOpen(!open)} 
          style={{ cursor: "pointer", fontSize: 25 }}
        />
      </Tooltip>

      {/* Show window only when open = true */}
      {open && (
        <div className="account-menu-container">
          <div className="header">
            <span>sivabojjana@gmail.com</span>
            <button className="close-btn" onClick={() => setOpen(false)}>
              {/* Close Icon SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="profile-section">
            <div className="avatar-wrapper">
              <img
                src="data:image/jpeg;base64,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"
                alt="Siva"
                className="avatar"
              />
              <div className="camera-icon">
                {/* Camera Icon SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width="16"
                  height="16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  />
                </svg>
              </div>
            </div>
            <h2>Hi, Siva!</h2>
          </div>

          <button className="manage-button">Manage your Google Account</button>

          <div className="divider"></div>

          <div className="toggle-section" onClick={() => setIsExpanded(!isExpanded)}>
            <span>{isExpanded ? "Hide more accounts" : "Show more accounts"}</span>
            {isExpanded ? (
              /* Chevron Up Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              /* Chevron Down Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width="20"
                height="20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </div>

          {isExpanded && (
            <div className="accounts-list">
              <div className="account-item">
                <div
                  className="account-avatar"
                  style={{ backgroundColor: "#9c27b0" }}
                >
                  O
                </div>
                <div className="account-details">
                  <span className="account-name">Osm Siva</span>
                  <span className="account-email">osmsiva68@gmail.com</span>
                </div>
              </div>
               <a style={{ textDecoration: "none", color: "inherit" }} target="_blank" href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmail.google.com%2Fmail&ec=GAlAFw&hl=en&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S2064764744%3A1757670382842938">

              <div className="menu-item">
                <svg
                  className="menu-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width="22"
                  height="22"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Add another account</span>
                
              </div>
              </a>
              <div className="menu-item">
                {/* Sign Out Icon */}
                <svg
                  className="menu-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  width="22"
                  height="22"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
                <span>Sign out of all accounts</span>
              </div>
            </div>
          )}

          <div className="divider"></div>

          <div className="storage-section">
            {/* Cloud Icon */}
            <svg
              className="menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              width="22"
              height="22"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span>0% of 2 TB used</span>
          </div>

          <div className="footer">
            <a href="https://policies.google.com/privacy?hl=en">Privacy Policy</a>
            &nbsp;•&nbsp;
            <a href="https://policies.google.com/terms?hl=en">Terms of Service</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Googleaccount;
