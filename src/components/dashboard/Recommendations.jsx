import React, { useState } from "react";

const sample = [
  { id:1, company:"Google", role:"SWE Intern", match:92, skills:["DSA","Java","React"], location:"Bangalore", ctc:"₹20–25 LPA" },
  { id:2, company:"TCS", role:"Ninja", match:84, skills:["OOP","DBMS","OS"], location:"Hyderabad", ctc:"₹3.5–7 LPA" },
  { id:3, company:"Adobe", role:"Product Intern", match:88, skills:["C++","DSA","System Design"], location:"Noida", ctc:"₹18–22 LPA" },
  { id:4, company:"Infosys", role:"SE", match:80, skills:["Java","SQL","HTML/CSS"], location:"Pune", ctc:"₹4–7 LPA" },
];

export default function Recommendations(){
  const [filters, setFilters] = useState(["Java","React"]);
  const toggle = (tag)=> setFilters(p=> p.includes(tag) ? p.filter(x=>x!==tag) : [...p, tag]);

  const allTags = Array.from(new Set(sample.flatMap(s=>s.skills)));
  const filtered = sample.filter(s => filters.every(f=> s.skills.includes(f)) || filters.length===0);

  return (
    <div className="card">
      <h3>Recommended Companies & Role Matches</h3>
      <div className="chips" style={{marginBottom:12}}>
        {allTags.map(tag => (
          <span key={tag} className={`chip ${filters.includes(tag)?"active":""}`} onClick={()=>toggle(tag)}>{tag}</span>
        ))}
        {filters.length>0 && <span className="chip" onClick={()=>setFilters([])}>Clear</span>}
      </div>
      <div className="grid">
        {filtered.map(job=> (
          <div key={job.id} className="card" style={{gridColumn:"span 6"}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <div>
                <div style={{fontWeight:800, fontSize:16}}>{job.company}</div>
                <div className="badge">{job.role} · {job.location}</div>
              </div>
              <div className="ring" style={{["--deg"]: `${job.match*3.6}deg`}}>
                <div className="val">{job.match}%</div>
              </div>
            </div>
            <div className="chips" style={{marginTop:10}}>
              {job.skills.map(s => <span key={s} className="chip">{s}</span>)}
            </div>
            <div style={{marginTop:10, fontSize:12, color:"#aab3ff"}}>CTC: {job.ctc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
