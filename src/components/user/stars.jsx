
export default function ProfileStars() {
    return (
        <section className="profile-star-page-section">
            <div className="profile-start-page-btn-container">
                <p>Lists {0}</p>
                <div>
                    <button className="drop-down-btn">
                        <p>Sort</p>
                        <i class="fa-solid fa-sort-down"></i>
                    </button>
                    <button className="create-list-btn">Create list</button>
                </div>
            </div>

            <div className="profile-star-page-create-star-container">
                <i class="fa-regular fa-star"></i>
                <h2>Create your first list</h2>
                <p>Lists make it easier to organize and create repositories that you have started.<sapn>Create your first list.</sapn></p>
            </div>
        </section>
    )
}