import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import SnoozeIcon from "@mui/icons-material/Snooze";

const emails2 = [
  {
    id: 1,
    from: "hirist.tech",
    subject:
      "Top Jobs from Leading IT/Tech Companies like Makemytrip, Amazon etc",
    snippet:
      "Hello Bojjana Sivananda Reddy, Below are the top Matching jobs based on your job feed tags...",
    time: "1:57 PM",
  },
  {
    id: 2,
    from: "Amazon Jobs",
    subject: "Thank you for Applying to Amazon!",
    snippet:
      "We've received your application for the Front End Engineer role...",
    time: "1:07 PM",
  },
  {
    id: 3,
    from: "Paytm Payments Bank",
    subject: "Customer Awareness Advisory",
    snippet: "Avoid becoming a victim & protect your hard-earned money...",
    time: "1:02 PM",
  },
  {
    id: 4,
    from: "Jyoti Bhasin",
    subject: "Java Fresher Dev (6–8 LPA)",
    snippet:
      "Hi, Thank you for dropping your mail! Here’s the opportunity you were looking for...",
    time: "12:53 PM",
  },
  {
    id: 5,
    from: "DigiLocker",
    subject: "OTP to access DigiLocker account",
    snippet:
      "Your one-time PIN is 442209 and is valid for the next 10 minutes...",
    time: "11:47 AM",
  },
  {
    id: 6,
    from: "Quora",
    subject: "First Post ✌️",
    snippet:
      "Check out top questions and answers trending in your area of interest...",
    time: "11:27 AM",
  },
  {
    id: 7,
    from: "Mercury Careers",
    subject: "Application Received",
    snippet:
      "Thanks for applying! We will review your application and get back soon...",
    time: "11:26 AM",
  },
  {
    id: 8,
    from: "MyCareernet",
    subject: "Good going! Application received",
    snippet:
      "Dear Sivananda Reddy, thank you for applying for the role of Auditor...",
    time: "11:19 AM",
  },
  {
    id: 9,
    from: "Zwayam Support",
    subject: "Application received for Data Scientist",
    snippet: "We have received your application for Operations Research...",
    time: "11:07 AM",
  },
  {
    id: 10,
    from: "Unstop",
    subject: "Congratulations! Application complete",
    snippet:
      "Hi Bojjana Sivananda Reddy, your application for Admin Executive is complete...",
    time: "11:01 AM",
  },
  {
    id: 11,
    from: "Unstop",
    subject: "Application for Travel Sales Consultant complete",
    snippet:
      "International Travel Sales Consultant role successfully submitted...",
    time: "11:00 AM",
  },
  {
    id: 12,
    from: "Microsoft Recruiting",
    subject: "Thank you for your Application!",
    snippet:
      "Thanks for applying to the Software Development Engineer (Job #1863473)...",
    time: "10:58 AM",
  },
  {
    id: 13,
    from: "Next Hire",
    subject: "🔥 Fresh Tech Referrals & Openings",
    snippet:
      "Join our WhatsApp channel for instant job referrals and hiring updates...",
    time: "9:15 AM",
  },
  {
    id: 14,
    from: "LinkedIn",
    subject: "You appeared in 12 searches this week",
    snippet: "Recruiters are looking at your profile. See who’s interested...",
    time: "8:42 AM",
  },
  {
    id: 15,
    from: "Naukri.com",
    subject: "New jobs matching your profile",
    snippet:
      "Hi Sivananda, we found new jobs for Software Developer roles matching your skills...",
    time: "Yesterday",
  },
  {
    id: 16,
    from: "Google Careers",
    subject: "Interview scheduled",
    snippet:
      "Your Google Software Engineer interview is scheduled for next week...",
    time: "Yesterday",
  },
  {
    id: 17,
    from: "HackerRank",
    subject: "Coding challenge invitation",
    snippet:
      "You have been invited to complete a coding challenge for Frontend Developer role...",
    time: "2 days ago",
  },
  {
    id: 18,
    from: "GitHub",
    subject: "Security alert for your repository",
    snippet: "A vulnerability has been detected in one of your dependencies...",
    time: "2 days ago",
  },
  {
    id: 19,
    from: "Stack Overflow",
    subject: "New developer survey results",
    snippet:
      "The latest Stack Overflow Developer Survey 2025 is out now! Explore industry trends...",
    time: "3 days ago",
  },
  {
    id: 20,
    from: "Coursera",
    subject: "New courses just launched",
    snippet:
      "Advance your career with new courses in AI, Machine Learning, and Cloud Computing...",
    time: "Last week",
  },
];

export default function GmailList() {
  const [hoveredId, setHoveredId] = useState(null);
  const [emails, setEmails] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedEmails, setSelectedEmails] = useState([]);
  
  const fetchEmails = () => {
    fetch("http://localhost:5000/emails")
      .then((response) => {
        return response.json(); 
      })
      .then((data) => {
        setEmails(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  useEffect(() => {
    const sEmails = searchParams.get('selected')
    console.log({sEmails})
    if(sEmails){
      setSelectedEmails(sEmails)
    }
    fetchEmails();

  }, []);

  const delecteEmail = (id) => {
    fetch(`http://localhost:5000/emails/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("DELETE: Resource deleted");
          console.log("DELETE: Resource deleted");
          fetchEmails();
        } else {
          console.error("DELETE failed");
        }
      })
      .catch((err) => console.error(err));
  };

  const selectHandler=(id, e)=>{
    const {  checked } = e.target;
     if (checked) {
      // Add item to the list
      setSelectedEmails(id);
    } else {
      // Remove item from the list
      setSelectedEmails();
    }
    
  }

  useEffect(()=>{
    setSearchParams({selected: selectedEmails})
  },[selectedEmails])
  return (
    <div className="primarymessgaes">
      <Box sx={{ width: "100%" }}>
        {emails.map((email) => (
          <Box
            key={email.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              borderBottom: "1px solid #eee",
              "&:hover": {
                bgcolor: "#f5f5f5",
              },
            }}
            onMouseEnter={() => setHoveredId(email.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                minWidth: 80,
              }}
            >
              <Checkbox size="small" checked={selectedEmails?.includes(email.id)} onChange={(e)=>selectHandler(email.id, e)} />
              <IconButton size="small">
                <StarBorderIcon fontSize="small" />
              </IconButton>
            </Box>

            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: 2,
                overflow: "hidden",
              }}
            >
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
                sx={{
                  fontSize: "small",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {email.subject} – {email.snippet}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                minWidth: 180,
                justifyContent: "flex-end",
              }}
            >
              {hoveredId === email.id ? (
                <>
                  <IconButton size="small">
                    <ArchiveIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <DeleteIcon
                      fontSize="small"
                      onClick={() => delecteEmail(email.id)}
                    />
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
