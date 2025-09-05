import React from "react";

const slots = [
  { id:1, date:"Aug 20", time:"11:00 AM", mode:"Online", coach:"Anita (SDE2)", filled:false },
  { id:2, date:"Aug 22", time:"6:00 PM", mode:"Online", coach:"Rahul (FAANG)", filled:true },
  { id:3, date:"Aug 25", time:"3:00 PM", mode:"Onsite", coach:"Meera (Lead)", filled:false },
];

export default function MockInterviews(){
  return (
    <div className="card">
      <h3>Mock Interviews</h3>
      <div className="grid">
        {slots.map(s => (
          <div key={s.id} className="card" style={{gridColumn:"span 4"}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <div><strong>{s.date}</strong> · {s.time}</div>
              <span className={`pill`}>{s.filled ? "Filled":"Open"}</span>
            </div>
            <div style={{marginTop:8, fontSize:14}}>Coach: <b>{s.coach}</b></div>
            <div style={{fontSize:12, color:"#aab3ff"}}>Mode: {s.mode}</div>
            <button className="chip" style={{marginTop:12}} disabled={s.filled}>{s.filled ? "Unavailable":"Book Slot"}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
