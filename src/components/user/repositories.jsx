import { useState } from "react";
import { Link } from "react-router-dom";
import RepositoryCard from "./RepositoryCard";

export default function ProfileRepositories() {
    const [typeDropDownOpen, setTypeDropDownOpen] = useState(false);
    const [langDropDownOpen, setLangDropDownOpen] = useState(false);
    const [orderDropDownOpen, setOrderDropDownOpen] = useState(false);

    const repoTypeList = [
        "All",
        "Public",
        "Private",
        "Sources",
        "Forks",
        "Archived",
        "Can be sponsored",
        "Mirrors",
        "Templates",
    ];

    const repoLangList = ["All", "CSS", "JavaScript", "EJS", "HTML"];

    const repoSortList = ["Last updated", "Name", "Stars"];

    const repositoriesList = [
        {
            title: "reat-time-chat-app",
            visibility: "Public",
            description: "This is first build chat application with socket.io",
            dated: "Dec 15, 2025"
        },
        {
            title: "todo-list-with-react-app",
            visibility: "Public",
            description: "This best handle with hooks and event handler and components.",
            dated: "Dec 15, 2025"
        },
        {
            title: "Wanderlust full stack project",
            visibility: "Public",
            description: "A full-stack Node.js web application using Express, EJS, and MongoDB with Cloudinary integration for image uploads and Passport.js for secure user authentication. Perfect for dynamic travel listing…",
            dated: "Aug 30, 2025"
        },
        {
            title: "chat-app-with-mongoose",
            visibility: "Public",
            description: "The first chat app with mongodb and operation like (create chat, edit , delete )",
            dated: "Aug 2, 2025"
        },
        {
            title: "Testing-SP",
            visibility: "Public",
            description: "This is first sigma project testing.",
            dated: "Mar 19, 2025"
        },
        {
            title: "Python Tkinter",
            visibility: "Public",
            description: "My first GUI Text editor Application build for Tkinter python library using for example notepad but advance feature include alignment,text color,and clear all screen text",
            dated: "Sep 7, 2024"
        },
        {
            title: "Temperature Mapping",
            visibility: "Public",
            description: "This is temperature mapping project with Celsius and Fahrenheit converter building using HTML , CSS and JavaScipt",
            dated: "Dec 3, 2023"
        },
        {
            title: "MessageStore",
            visibility: "Public",
            description: "It is a simple message store project for using with HTML, CSS and JavaScript",
            dated: "Dec 3, 2023"
        },
        {
            title: "Food-Corporation-Website-with-Responsive",
            visibility: "Public",
            description: "Food corporation website responsive using html5 and css3",
            dated: "Nov 29, 2023"
        },
        {
            title: "My_First_Responsive_Project_With_Bootsrap5 Public",
            visibility: "Public",
            description: "My first responsive project using bootstrap 5",
            dated: "Fec 7, 2023"
        },
        {
            title: "MERN-Project",
            visibility: "Public",
            description: "This is a simpe mern project with logIn, Registeration,And Logout.",
            dated: "Jan 18, 2023"
        },
    ]

    return (
        <section className="profile-repo-section-container">

            <form
                className="profile-repositories-form"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    type="text"
                    placeholder="Find a repository..."
                    autoComplete="off"
                />

                {/* TYPE DROPDOWN */}
                <div
                    className="profile-repositories-drop-down-list"
                    onClick={() => {
                        setTypeDropDownOpen((prev) => !prev);
                        setLangDropDownOpen(false);
                        setOrderDropDownOpen(false);
                    }}
                >
                    <button type="button" className="drop-down-btn">
                        <p>Type</p>
                        <i className="fa-solid fa-caret-down"></i>
                    </button>

                    {typeDropDownOpen && (
                        <div className="drop-down-list-container">
                            <div>
                                <p>Select type</p>
                                <button
                                    type="button"
                                    className="close-drop-down-list"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setTypeDropDownOpen(false);
                                    }}
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>

                            <ul>
                                {repoTypeList.map((curType, idx) => (
                                    <li key={idx}>
                                        <input
                                            type="radio"
                                            name="type"
                                            value={curType}
                                        />
                                        <p>{curType}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* LANGUAGE DROPDOWN */}
                <div
                    className="profile-repositories-drop-down-list"
                    onClick={() => {
                        setLangDropDownOpen((prev) => !prev);
                        setTypeDropDownOpen(false);
                        setOrderDropDownOpen(false);
                    }}
                >
                    <button type="button" className="drop-down-btn">
                        <p>Language</p>
                        <i className="fa-solid fa-caret-down"></i>
                    </button>

                    {langDropDownOpen && (
                        <div className="drop-down-list-container">
                            <div>
                                <p>Select language</p>
                                <button
                                    type="button"
                                    className="close-drop-down-list"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setLangDropDownOpen(false);
                                    }}
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>

                            <ul>
                                {repoLangList.map((curLang, idx) => (
                                    <li key={idx}>
                                        <input
                                            type="radio"
                                            name="language"
                                            value={curLang}
                                        />
                                        <p>{curLang}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* SORT DROPDOWN */}
                <div
                    className="profile-repositories-drop-down-list"
                    onClick={() => {
                        setOrderDropDownOpen((prev) => !prev);
                        setTypeDropDownOpen(false);
                        setLangDropDownOpen(false);
                    }}
                >
                    <button type="button" className="drop-down-btn">
                        <p>Sort</p>
                        <i className="fa-solid fa-caret-down"></i>
                    </button>

                    {orderDropDownOpen && (
                        <div className="drop-down-list-container">
                            <div>
                                <p>Select order</p>
                                <button
                                    type="button"
                                    className="close-drop-down-list"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setOrderDropDownOpen(false);
                                    }}
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>

                            <ul>
                                {repoSortList.map((curSort, idx) => (
                                    <li key={idx}>
                                        <input
                                            type="radio"
                                            name="sort"
                                            value={curSort}
                                        />
                                        <p>{curSort}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* NEW REPO BUTTON */}
                <Link to="/createrepo" className="new-repo-btn">
                    <i className="fa-solid fa-network-wired"></i>
                    <p>New</p>
                </Link>
            </form>
            <ul>
                {
                    repositoriesList.map((curRepository, idx) => {
                        return (
                            <RepositoryCard
                                key={idx}
                                curRepository={curRepository}
                            />
                        );
                    })
                }

            </ul>
        </section>
    );
}
