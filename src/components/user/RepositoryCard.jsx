export default function RepositoryCard({ curRepository }) {
    return (
        <li className="repository-card-container">
            <div className="repository-card-details">
                <div>
                    <h2>{curRepository.title}</h2>
                    <span>{curRepository.visibility}</span>
                </div>

                <p>{curRepository.description}</p>

                <p className="repository-card-dated">
                    Updated on {curRepository.date}
                </p>
            </div>

            <div className="repository-card-stars">
                <div>
                    <button type="button">
                        <i className="fa-regular fa-star"></i>
                        <p>Star</p>
                    </button>

                    <button type="button">
                        <i className="fa-solid fa-caret-down"></i>
                    </button>
                </div>
            </div>
        </li>
    );
}
