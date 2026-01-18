
export default function CreatedByMe() {
    return (
        <>
            <form className="dashboard-page-child-form">
                <div className="dashboard-page-child-form-control">
                    <div className="form-btn-container">
                        <h3>Created by me</h3>
                        <button className="dashboard-page-child-btn">
                            <p>New issue</p>
                        </button>
                    </div>
                    <div className="issue-page-input-assigned-me-box">
                        <p>is<span>issue</span> state:<span>open</span> archived:<span>false</span> author:<span>@me</span> sort:<span>updated-desc</span></p>
                        <input type="text" autoComplete="off" />
                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                </div>

                <div className="assigned-page-issue-result">
                    <p>0 result</p>
                    <div>
                        <h2>No result</h2>
                        <p>Try adjustment your search filters.</p>
                    </div>
                </div>

            </form>
        </>
    )
}