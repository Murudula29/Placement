import React from "react";

const badges = [
  { id:1, name:"DSA Streak 30", note:"Solved 30 problems", level:"Gold" },
  { id:2, name:"Project Ship", note:"Deployed 2 apps", level:"Silver" },
  { id:3, name:"Interview Ready", note:"3 mocks completed", level:"Bronze" },
  { id:4, name:"Quiz Master", note:"Top 10% in OS", level:"Gold" },
];

export default function Achievements(){
  return (
    <div className="card">
      <h3>Achievements & Badges</h3>
      <div className="grid">
        {badges.map(b => (
          <div key={b.id} className="card" style={{gridColumn:"span 3", textAlign:"center"}}>
            <div className="ring" style={{["--deg"]:"300deg"}}><div className="val">{b.level}</div></div>
            <div style={{marginTop:10, fontWeight:800}}>{b.name}</div>
            <div style={{fontSize:12, color:"#aab3ff"}}>{b.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
