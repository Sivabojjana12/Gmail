import React from "react";
import './index.css'
import {
  Box,
  Button,
  Typography,
  IconButton,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";




const QuickSettings=()=> {
  return (
     <div className="panel">
      {/* Header */}
      <div className="panel-header">
        <h2>Quick settings</h2>
        <button className="close-btn">✖</button>
      </div>

      {/* See all settings */}
      <button className="btn-full">See all settings</button>

      {/* Apps in Gmail */}
      <div className="section">
        <h3>Apps in Gmail</h3>
        <div className="section-row">
          <span>Chat and Meet</span>
          <button className="link">Customize</button>
        </div>
      </div>

      {/* Density */}
      <div className="section">
        <h3>Density</h3>
        <div className="radio-group">
          <label>
            <input type="radio" name="density" defaultChecked /> Default
          </label>
          <label>
            <input type="radio" name="density" /> Comfortable
          </label>
          <label>
            <input type="radio" name="density" /> Compact
          </label>
        </div>
      </div>

      {/* Theme */}
      <div className="section">
        <h3>Theme</h3>
        <div className="section-row">
          <div className="theme-preview"></div>
          <button className="link">View all</button>
        </div>
      </div>

      {/* Inbox type */}
      <div className="section">
        <h3>Inbox type</h3>
        <div className="section-row">
          <label>
            <input type="radio" name="inbox" defaultChecked /> Default
          </label>
          <button className="link">Customize</button>
        </div>
      </div>
    </div>
  );
}

export default QuickSettings;