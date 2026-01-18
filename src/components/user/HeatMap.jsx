import React, { useEffect, useState } from "react";
import HeatMap from "@uiw/react-heat-map";

// Generate random activity
const generateActivityData = (startDate, endDate) => {
    const data = [];
    let current = new Date(startDate);

    while (current <= endDate) {
        data.push({
            date: current.toISOString().split("T")[0],
            count: Math.floor(Math.random() * 5),
        });
        current.setDate(current.getDate() + 1);
    }
    return data;
};

// GitHub-style colors
const panelColors = {
    0: "#ebedf0",
    1: "#9be9a8",
    2: "#40c463",
    3: "#30a14e",
    4: "#216e39",
};

export default function HeatMapProfile() {
    const TOTAL_WEEKS = 52; // 👈 change this
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - TOTAL_WEEKS * 7);

    const [activityData, setActivityData] = useState([]);

    useEffect(() => {
        const data = generateActivityData(startDate, endDate);
        setActivityData(data);
    }, []);

    return (
        <HeatMap
            value={activityData}
            startDate={startDate}
            rectSize={13}
            space={3}
            panelColors={panelColors}
            weekLabels={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
            rectProps={{ rx: 2.5 }}
        />
    );
}
