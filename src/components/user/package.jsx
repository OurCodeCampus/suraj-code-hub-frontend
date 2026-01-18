import PackageCard from "./PackageCard";

export default function ProfilePackage() {
    return (
        <section className="profile-package-section-container">
            <div className="profile-package-section-header">
                <i class="fa-solid fa-hand-holding-heart"></i>
                <h1 className="profile-package-section-heading">Get started with SurajCodeHub Packages</h1>
                <p className="profile-package-section-description">Safely publish packages, store your packages alongside your code, and share your packages privately with your team.</p>
            </div>
            <PackageCard />
        </section>
    )
}