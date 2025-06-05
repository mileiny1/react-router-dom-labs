import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/navbar";
import MailboxList from "./components/list/mailboxList";
import MailboxForm from "./components/form/mailboxForm";
import MailboxDetails from "./components/details/mailboxDetails";
import "./App.css"; 

const App = () => {
  const [mailboxes, setMailboxes] = useState([
    { _id: 1, boxOwner: "Mileiny", size: "Small" },
    { _id: 2, boxOwner: "Leiny", size: "Medium" },
    { _id: 3, boxOwner: "Angel", size: "Large" },
    { _id: 4, boxOwner: "Carmen", size: "Small" },
  ]);

  const navigate = useNavigate();

  const addMailbox = (formData) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxOwner: formData.boxOwner,
      size: formData.size,
    };
    setMailboxes((prev) => [...prev, newMailbox]);
    navigate("/mailboxes");
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Post Office</h1>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route
          path="/new"
          element={<MailboxForm addMailbox={addMailbox} mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes/:id"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
