import React, { useState, useEffect } from "react"
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {

    const [repositories, setRepositories] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestedRepositories, setSuggestRepositories] = useState([])
    const [searchResult, setSearchResult] = useState([])

    //
    useEffect(() => {
        const userId = localStorage.getItem("userId")

        const fetchRepositories = async () => {

            try {
                const response = await fetch(`http://localhost:5000/repo/user/${userId}`)

                const data = await response.json();

                // console.log(data);
                setRepositories(data.repositories);
            } catch (err) {
                console.error("Error while fetching repositories :", err)
            }
        };

        const fetchSuggestedRepositories = async () => {

            try {
                const response = await fetch(`http://localhost:5000/repo/all`)

                const data = await response.json();

                // console.log(data);
                setSuggestRepositories(data.repositories);
            } catch (err) {
                console.error("Error while fetching repositories :", err)
            }
        };

        fetchRepositories();
        fetchSuggestedRepositories()

    }, []);

    useEffect(() => {
        if (searchQuery == '') {
            setSearchQuery(repositories);
        } else {
            const filterRepo = repositories.filter((repo) => {
                repo.name.toLowerCase().includes(searchQuery.toLowerCase())
            });
            setSearchQuery(filterRepo);
        }
    }, [searchQuery, repositories])
    return (
        <div className="dashboard-main-container">
            <Navbar />
            <Outlet />
        </div>
    )
}