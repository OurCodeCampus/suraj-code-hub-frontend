import { Link } from "react-router-dom";

export default function DashboardFooter() {
    return (
        <footer className="dashboard-footer">
            <ul>
                <img src="/media/images/CodeHub.svg" alt="logo" />
                <p>&copy; 2026 GitHub, Inc.</p>
                <Link to="#" className="dashboard-footer-link">Terms</Link>
                <Link to="#" className="dashboard-footer-link">Privacy</Link>
                <Link to="#" className="dashboard-footer-link">Security</Link>
                <Link to="#" className="dashboard-footer-link">Status</Link>
                <Link to="#" className="dashboard-footer-link">Community</Link>
                <Link to="#" className="dashboard-footer-link">Docs</Link>
                <Link to="#" className="dashboard-footer-link">Contact</Link>
                <Link to="#" className="dashboard-footer-link">Manage cookies</Link>
                <Link to="#" className="dashboard-footer-link">Do not share my personal information</Link>
            </ul>
        </footer>
    )
}