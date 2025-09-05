import React, { useState } from "react";

const categories = [
  "Operating Systems","DBMS","Java OCA","Java","Python","C","C++","React","HTML/CSS/JS"
];
const bank = {
  "Operating Systems":[
    { q:"Which scheduling algorithm may cause starvation?", a:["FCFS","SJF","Round Robin","Priority (non-preemptive)"], c:1 },
    { q:"Which is not a page replacement algorithm?", a:["LRU","Optimal","FIFO","Shortest Job First"], c:3 }
  ],
  "DBMS":[
    { q:"Which SQL clause filters groups?", a:["WHERE","HAVING","GROUP BY","ORDER BY"], c:1 },
    { q:"Which normal form removes transitive dependency?", a:["1NF","2NF","3NF","BCNF"], c:2 }
  ],
  "Java":[
    { q:"Which keyword prevents inheritance?", a:["static","final","const","sealed"], c:1 },
    { q:"Default value of int in class field?", a:["0","null","undefined","garbage"], c:0 }
  ]
};

export default function Quizzes(){
  const [active, setActive] = useState(null);
  const [i, setI] = useState(0);
  const [ans, setAns] = useState(null);
  const [score, setScore] = useState(0);

  const start = (cat)=> { setActive(cat); setI(0); setAns(null); setScore(0); }
  const list = bank[active] || [
    { q:"React is a ____ library.", a:["UI","DB","Server","Styling"], c:0 }
  ];

  const submit = ()=>{
    if(ans===null) return;
    if(ans===list[i].c) setScore(s=>s+1);
    if(i < list.length-1){ setI(i+1); setAns(null); }
    else alert(`Quiz finished! Score ${score + (ans===list[i].c?1:0)} / ${list.length}`);
  }

  return (
    <div className="card">
      <h3>Quizzes for Preparation</h3>
      {!active ? (
        <div className="grid">
          {categories.map(c => (
            <div key={c} className="card" style={{gridColumn:"span 3"}}>
              <div style={{fontWeight:700}}>{c}</div>
              <div style={{fontSize:12, color:"#aab3ff"}}>10 questions · 15 min</div>
              <button className="chip" style={{marginTop:12}} onClick={()=>start(c)}>Start Quiz</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="card">
          <div className="badge">{active}</div>
          <div style={{fontWeight:700, marginTop:10}}>{list[i].q}</div>
          <div style={{display:"grid", gap:8, marginTop:12}}>
            {list[i].a.map((opt,idx)=> (
              <button key={idx} className={`chip ${ans===idx?"active":""}`} onClick={()=>setAns(idx)}>{opt}</button>
            ))}
          </div>
          <div style={{marginTop:12, display:"flex", gap:8, alignItems:"center"}}>
            <button className="chip" onClick={submit}>Submit</button>
            <button className="chip" onClick={()=>{ setActive(null); setAns(null); }}>Exit</button>
            <span style={{fontSize:12, color:"#aab3ff"}}>Score: {score}</span>
          </div>
        </div>
      )}
    </div>
  );
}
