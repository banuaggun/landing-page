import React from "react";

const ActionForm = ({ setView }) => {
  return (
    <div style={{ padding: "100px 24px", textAlign: "center", backgroundColor: "#f4f7f4" }}>
      <h1 className="fonts-header">Join the Movement & Plant a Tree</h1>
      <p className="fonts-body" style={{ margin: "20px 0 40px 0" }}>
        Form yapısı, ağaç dikme seçenekleri ve ödeme/katılım adımları burada yer alacak.
      </p>
      
      <button 
        onClick={() => setView("home")}
        style={{
          padding: "12px 24px",
          borderRadius: "30px",
          backgroundColor: "#1b4d22",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default ActionForm;
