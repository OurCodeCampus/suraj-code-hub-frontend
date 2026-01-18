
export default function Saved() {

    return (

        <div className="notification-page-child-container">
            <form className="notification-page-child-forms">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>is:<span>saved</span></p>
                <input type="text" name="notification-save-input" autoComplete="off" />
                <i class="fa-solid fa-circle-xmark"></i>
            </form>

            <div className="notification-page-child-image-container">
                <img src="/media/images/noti_saved.svg" alt="saved-img" />
                <h3>Save something important</h3>
                <p>Notifications you save will appear here to read later.</p>
            </div>
        </div>
    )
}