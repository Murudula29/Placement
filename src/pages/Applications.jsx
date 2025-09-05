import React from "react";

export default function Applications() {
  return (
    <div className="row g-3">
      <div className="col-12">
        <div className="card pp-card pp-shadow">
          <div className="card-body">
            <h2 className="h5 mb-3">My Applications</h2>
            <p className="text-muted mb-4">
              Track the status of jobs you’ve applied to.
            </p>

            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Role</th>
                    <th>Company</th>
                    <th>Applied</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* sample rows */}
                  <tr>
                    <td>Software Engineer</td>
                    <td>TechNova</td>
                    <td>Today</td>
                    <td><span className="badge bg-warning-subtle text-warning-emphasis">Under review</span></td>
                  </tr>
                  <tr>
                    <td>Frontend Intern</td>
                    <td>Acme Labs</td>
                    <td>2 days ago</td>
                    <td><span className="badge bg-info-subtle text-info-emphasis">Assessment sent</span></td>
                  </tr>
                  <tr>
                    <td>Data Analyst</td>
                    <td>InsightWorks</td>
                    <td>Last week</td>
                    <td><span className="badge bg-success-subtle text-success-emphasis">Interview scheduled</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="small text-muted">Note: replace with real data later.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
