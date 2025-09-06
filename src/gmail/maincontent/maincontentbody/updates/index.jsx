import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import SnoozeIcon from "@mui/icons-material/Snooze";

function UpdatesList() {
  const [hoveredId, setHoveredId] = useState(null);
  const [emails, setEmails] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedEmails, setSelectedEmails] = useState([]);

  const fetchEmails = () => {
    fetch("http://localhost:5000/updates")
      .then((response) => response.json())
      .then((data) => setEmails(data))
      .catch((error) => console.error("Fetch error:", error));
  };

  useEffect(() => {
    const sEmails = searchParams.get("selected");
    if (sEmails) {
      // Convert comma-separated string to array
      setSelectedEmails(sEmails.split(","));
    }
    fetchEmails();
  }, []);

  const deleteEmail = (id) => {
    fetch(`http://localhost:5000/updates/${id}`, { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          setEmails((prev) => prev.filter((email) => email.id !== id));
        } else {
          console.error("DELETE failed");
        }
      })
      .catch((err) => console.error(err));
  };

  const selectHandler = (id, e) => {
    const { checked } = e.target;
    if (checked) {
      setSelectedEmails((prev) => [...prev, id]);
    } else {
      setSelectedEmails((prev) => prev.filter((emailId) => emailId !== id));
    }
  };

  useEffect(() => {
    setSearchParams({ selected: selectedEmails.join(",") });
  }, [selectedEmails]);

  return (
    <div className="primarymessages">
      <Box sx={{ width: "100%" }}>
        {emails.map((email) => (
          <Box
            key={email.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #eee",
              "&:hover": { bgcolor: "#f5f5f5" },
            }}
            onMouseEnter={() => setHoveredId(email.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, minWidth: 80 }}>
              <Checkbox
                size="small"
                checked={selectedEmails.includes(email.id)}
                onChange={(e) => selectHandler(email.id, e)}
              />
              <IconButton size="small">
                <StarBorderIcon fontSize="small" />
              </IconButton>
            </Box>

            <Box sx={{ flex: 1, display: "flex", alignItems: "center", gap: 2, overflow: "hidden" }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "small",
                  fontWeight: "normal",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  minWidth: 150,
                }}
              >
                {email.from}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "small", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
              >
                {email.subject} – {email.snippet}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, minWidth: 180, justifyContent: "flex-end" }}>
              {hoveredId === email.id ? (
                <>
                  <IconButton size="small">
                    <ArchiveIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" onClick={() => deleteEmail(email.id)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <MarkunreadIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <SnoozeIcon fontSize="small" />
                  </IconButton>
                </>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  {email.time}
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
}


export default UpdatesList;