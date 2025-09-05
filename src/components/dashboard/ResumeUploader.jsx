import React, { useState, useRef } from "react";

export default function ResumeUploader(){
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(0);
  const [skills, setSkills] = useState(["Java", "React", "DBMS", "OS"]);
  const [missing, setMissing] = useState(["REST APIs", "Docker", "OOPs", "Unit Testing"]);
  const dz = useRef(null);
  const inputRef = useRef(null);

  function handleFiles(f){
    if(!f?.length) return;
    const picked = f[0];
    setFile(picked);
    const s = 72 + Math.floor(Math.random()*15);
    setScore(s);
  }

  function onDrop(e){
    e.preventDefault();
    dz.current?.classList.remove("drag");
    handleFiles(e.dataTransfer.files);
  }
  function onDragOver(e){ e.preventDefault(); dz.current?.classList.add("drag"); }
  function onDragLeave(){ dz.current?.classList.remove("drag"); }

  return (
    <div className="grid" style={{gridTemplateColumns:"repeat(12,1fr)"}}>
      <div className="card" style={{gridColumn:"span 8"}}>
        <h3>Resume Uploader & Optimizer</h3>
        <div
          ref={dz}
          className="dropzone"
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onClick={()=>inputRef.current?.click()}
        >
          <input ref={inputRef} type="file" accept=".pdf,.doc,.docx" style={{display:"none"}} onChange={(e)=>handleFiles(e.target.files)} />
          <div>Drag & drop your resume here or <span className="kbd">browse</span></div>
          <div style={{opacity:.8, marginTop:6, fontSize:12}}>PDF / DOC / DOCX</div>
        </div>

        {file && (
          <div style={{marginTop:16, display:"grid", gridTemplateColumns:"1fr 1fr", gap:16}}>
            <div className="card">
              <h3>Detected Skills</h3>
              <div className="chips">
                {skills.map(s => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
            <div className="card">
              <h3>Suggested Additions</h3>
              <div className="chips">
                {missing.map(s => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="card" style={{gridColumn:"span 4", display:"grid", placeItems:"center"}}>
        <div className="ring" style={{["--deg"]: `${score*3.6}deg`}}>
          <div className="val">{score}%</div>
        </div>
        <div style={{marginTop:12, fontWeight:700}}>Resume Score</div>
        <div style={{fontSize:12, color:"#aab3ff"}}>Optimise ATS keywords & formatting</div>
      </div>
    </div>
  );
}
