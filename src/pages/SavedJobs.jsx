import React from "react";

export default function SavedJobs() {
  const items = [
    { title: "Backend Developer", company: "CloudFox", location: "Bengaluru" },
    { title: "ML Engineer Intern", company: "VisionAI", location: "Hyderabad" },
  ];

  return (
    <div className="row g-3">
      <div className="col-12">
        <div className="card pp-card pp-shadow">
          <div className="card-body">
            <h2 className="h5 mb-3">Saved Jobs</h2>
            <p className="text-muted mb-4">Jobs you’ve saved to apply later.</p>

            <div className="row g-3">
              {items.map((j, i) => (
                <div key={i} className="col-12 col-md-6">
                  <div className="p-3 border rounded-3 h-100">
                    <div className="fw-semibold">{j.title}</div>
                    <div className="text-muted">{j.company} • {j.location}</div>
                    <div className="mt-2 d-flex gap-2">
                      <button className="btn btn-sm btn-primary">Apply</button>
                      <button className="btn btn-sm btn-outline-primary">View</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="small text-muted mt-3">Hook this to real saved jobs later.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
