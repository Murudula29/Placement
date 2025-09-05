// import React from "react";

// export default function Placeholder({ title = "Coming soon" }) {
//   return (
//     <div className="card pp-card pp-shadow">
//       <div className="card-body text-center">
//         <h2 className="h5">{title}</h2>
//         <p className="text-muted small mb-0">We’ll wire this up next.</p>
//       </div>
//     </div>
//   );
// }




import React from "react";

export default function Placeholder({ title = "Coming Soon" }) {
  return (
    <div className="card pp-card pp-shadow my-4">
      <div className="card-body text-center py-5">
        <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🚧</div>
        <h2 className="h5 mb-2">{title}</h2>
        <p className="text-muted small mb-0">
          We’ll wire this up in the next phase.
        </p>
      </div>
    </div>
  );
}
