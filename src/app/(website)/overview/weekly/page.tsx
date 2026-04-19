"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function WeeklyOverviewPage() 
{
    const [date, setDate] = useState(new Date());
    const [monday, setMonday] = useState(GetMonday(date));
    const [friday, setFriday] = useState(GetFriday(date));

    function handleDateChange(newDate: Date) 
    {
        setDate(newDate);
        setMonday(GetMonday(newDate));
        setFriday(GetFriday(newDate));
    }

    function handlePreviousWeek()
    {
        const previousWeekDate = new Date(date);
        previousWeekDate.setDate(previousWeekDate.getDate() - 7);
        handleDateChange(previousWeekDate);
    }

    function handleNextWeek()
    {
        const nextWeekDate = new Date(date);
        nextWeekDate.setDate(nextWeekDate.getDate() + 7);
        handleDateChange(nextWeekDate);
    }

    return (
        <div>
            <div className={styles.title_section}>
                <h1>Weekly Overview</h1>
                <div className={styles.date_control}>
                    <button onClick={handlePreviousWeek} className={styles.arrow_button}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <p>{monday.toDateString()} - {friday.toDateString()}</p>
                    <button onClick={handleNextWeek} className={styles.arrow_button}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    );
}

function GetMonday(date: Date) 
{
    const mondayDate = new Date(date);
    const day = mondayDate.getDay();
    const diff = (day === 0 ? -6 : 1 - day);
    mondayDate.setDate(mondayDate.getDate() + diff);
    return mondayDate;
}

function GetFriday(date: Date) 
{
    const fridayDate = new Date(date);
    const day = fridayDate.getDay();
    const diff = (5 - day + 7) % 7;
    fridayDate.setDate(fridayDate.getDate() + diff);
    return fridayDate;
}
