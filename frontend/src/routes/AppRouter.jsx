import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Companies from "../pages/Companies/Companies";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/companies" element={<Companies />} />

        {/* Future Modules */}
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/site-visits" element={<h1>Site Visits</h1>} />
        <Route path="/reports" element={<h1>Reports</h1>} />
        <Route path="/settings" element={<h1>Settings</h1>} />
      </Routes>
    </BrowserRouter>
  );
}