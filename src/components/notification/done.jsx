
export default function Done() {

    return (

        <div className="notification-page-child-container">
            <form className="notification-page-child-forms">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>is:<span>done</span></p>
                <input type="text" name="notification-save-input" autoComplete="off" />
                <i class="fa-solid fa-circle-xmark"></i>
            </form>

            <div className="notification-page-child-image-container">
                <img src="/media/images/noti_done.svg" alt="done-img" />
                <h3>Mark as done</h3>
                <p>Mark notifications as done so you can move on with your work.<br />
                    New activity appears in your inbox.</p>
            </div>
        </div>
    )
}