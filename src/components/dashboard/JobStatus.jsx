import React from "react";

const rows = [
  { id:1, company:"Google", role:"SWE Intern", applied:"Aug 10", status:"Shortlisted" },
  { id:2, company:"TCS", role:"Ninja", applied:"Aug 12", status:"Pending" },
  { id:3, company:"Adobe", role:"Product Intern", applied:"Aug 05", status:"Rejected" },
  { id:4, company:"Infosys", role:"SE", applied:"Aug 01", status:"Selected" },
];

const color = (s) => ({
  Pending: "#d5d9ff",
  Shortlisted: "#a7f3d0",
  Rejected: "#fecaca",
  Selected: "#b7f7d5"
}[s] || "#d5d9ff");

export default function JobStatus(){
  return (
    <div className="card">
      <h3>Applied Job Status</h3>
      <table className="table">
        <thead>
          <tr><th>Company</th><th>Role</th><th>Applied On</th><th>Status</th></tr>
        </thead>
        <tbody>
          {rows.map(r=> (
            <tr key={r.id}>
              <td>{r.company}</td>
              <td>{r.role}</td>
              <td>{r.applied}</td>
              <td>
                <span className="pill" style={{background:"#0e1230", borderColor:"#2b3271", color: color(r.status)}}>{r.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
