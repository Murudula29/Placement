import React from "react";

const companies = [
  { name:"Google", applicants: 120, hires: 12, avgCtc:"₹45 LPA" },
  { name:"TCS", applicants: 500, hires: 85, avgCtc:"₹5.5 LPA" },
  { name:"Adobe", applicants: 90, hires: 10, avgCtc:"₹30 LPA" },
];

export default function CompanyInsights(){
  return (
    <div className="card">
      <h3>Company Insights</h3>
      <div className="grid">
        {companies.map(c => (
          <div key={c.name} className="card" style={{gridColumn:"span 4"}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <div style={{fontWeight:800}}>{c.name}</div>
              <span className="pill">{c.avgCtc}</span>
            </div>
            <div style={{marginTop:12}}>
              <div style={{fontSize:12, color:"#aab3ff"}}>Applicants</div>
              <div className="progress"><span style={{width: Math.min(100, c.applicants/5) + "%"}}></span></div>
            </div>
            <div style={{marginTop:12}}>
              <div style={{fontSize:12, color:"#aab3ff"}}>Hires</div>
              <div className="progress"><span style={{width: Math.min(100, c.hires/1.2) + "%"}}></span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
