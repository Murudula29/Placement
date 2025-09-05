import React from "react";

const list = [
  { id:1, name:"Placement Drive: Infosys", date:"Aug 21", time:"10:00 AM", venue:"Auditorium" },
  { id:2, name:"Resume Workshop", date:"Aug 23", time:"2:00 PM", venue:"Lab 2" },
  { id:3, name:"Alumni AMA", date:"Aug 27", time:"5:30 PM", venue:"Online" },
];

export default function Events(){
  return (
    <div className="card">
      <h3>Upcoming Events</h3>
      <div style={{display:"flex", flexDirection:"column", gap:10}}>
        {list.map(e=> (
          <div key={e.id} className="event card" style={{padding:"12px"}}>
            <span className="dot"></span>
            <div style={{flex:1}}>
              <div style={{fontWeight:700}}>{e.name}</div>
              <div style={{fontSize:12, color:"#aab3ff"}}>{e.date} · {e.time} · {e.venue}</div>
            </div>
            <button className="chip">Add to Calendar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
