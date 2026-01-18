
export default function Inbox() {

    return (

        <div className="notification-page-child-container">
            <form className="notification-page-child-inbox-forms-container">
                <div className="notification-page-child-form-btn">
                    <button>All</button>
                    <button>Unread</button>
                </div>
                <div className="notification-page-child-inbox-input-box">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search notification" name="notification-search-notification" autoComplete="off" />
                </div>
                <div className="notification-page-child-form-dated">
                    <p>Group by:</p>
                    <select>
                        <option>Repository</option>
                        <option selected>Date</option>
                    </select>
                </div>
            </form>

            <div className="notification-page-child-clear-out-the-clutter-container">

                <div>
                    <i class="fa-regular fa-newspaper"></i>

                    <div>
                        <h4>Clear out the clutter</h4>
                        <p>
                            Get the most out of your new inbox by quickly and easily marking all of your previously read notification as done.
                        </p>
                    </div>
                </div>
                <div className="noti-inbox-btn-container">
                    <button className="noti-btn-dismiss">Dismiss</button>
                    <button className="noti-btn-get-started">Get started</button>
                </div>
            </div>


            <div className="notification-page-child-image-container">
                <img src="/media/images/noti_inbox.svg" alt="inbox-img" />
                <h3>All caught up!</h3>
                <p>Take a break, write some code, do what you do best.</p>
            </div>
        </div>
    )
}