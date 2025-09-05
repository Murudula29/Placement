import React from "react";

const steps = [
  { title:"CS Fundamentals", pct: 80, tip:"OS, DBMS, CN, OOP" },
  { title:"DSA Mastery", pct: 65, tip:"Arrays → Graphs → DP" },
  { title:"Language Track", pct: 70, tip:"Java / C++ / Python" },
  { title:"Projects & Git", pct: 55, tip:"2–3 solid projects + README" },
  { title:"System Design (basic)", pct: 35, tip:"Caching, scaling basics" },
  { title:"Interview Prep", pct: 50, tip:"Mock, STAR method" },
];

export default function Roadmap(){
  return (
    <div className="card">
      <h3>Roadmap / Learning Map</h3>
      <div className="grid">
        {steps.map(s => (
          <div key={s.title} className="card" style={{gridColumn:"span 6"}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <div style={{fontWeight:700}}>{s.title}</div>
              <span className="pill">{s.pct}%</span>
            </div>
            <div className="progress" style={{marginTop:10}}>
              <span style={{width:`${s.pct}%`}}></span>
            </div>
            <div style={{marginTop:10, fontSize:12, color:"#aab3ff"}}>Hint: {s.tip}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
