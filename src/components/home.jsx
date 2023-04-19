import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
} from "react-router-dom";

import Main from "./main";
import Operator from "./operator";
import Students from "./students";
import Directions from "./directions";
import LessonTable from "./lesson_table";
import LessonPlan from "./lesson_plan";


export default function Home() {

    useEffect(() => {
        let vMenuItem = document.querySelectorAll(".vmenu>a"),
            vMenuItemElement = document.querySelectorAll(".vmenu>a>li"),
            vMenuArrow = document.querySelector(".vmenu_arrow")
        for (let i = 0; i < vMenuItem.length; i++) {
            vMenuItem[i].addEventListener("click", () => {
                vMenuArrow.style.top = `${i * 2.5}vw`
                for (let a = 0; a < vMenuItem.length; a++) {
                a == i 
                    ? null
                    : vMenuItemElement[a].classList.remove("active");
                }
                vMenuItemElement[i].classList.add("active");
            })
        }
    }, [])

    return (
        <>
            <Router>

                <div className="wrapper">
                    <div className="row">
                        <aside className="mini">
                            <div className="logo">
                                {/* <img src="img/logo.png" alt="" /> */}
                                M
                            </div>
                            <ul className="vmenu">
                                <div className="vmenu_arrow"></div>
                                <Link to={"/"}>
                                    <li className="active">
                                        <span className="icon">
                                            <img src="img/svg/home.svg" alt="" />
                                        </span>
                                        <span className="data"><b>bosh sahifa</b></span>
                                    </li>
                                </Link>
                                <Link to={"/"}>
                                    <li>
                                        <span className="icon">
                                            <img src="img/svg/statistics.svg" alt="" />
                                        </span>
                                        <span className="data"><b>Hisobot</b></span>
                                    </li>
                                </Link>
                                <Link to={"/operator"}>
                                    <li>
                                        <span className="icon">
                                            <img src="img/svg/call_miss.svg" alt="" />
                                        </span>
                                        <span className="data"><b>Call Center</b></span>
                                    </li>
                                </Link>
                                <Link to={"/students"}>
                                    <li>
                                        <span className="icon">
                                            <img src="img/svg/student.svg" alt="" />
                                        </span>
                                        <span className="data"><b>Talabalar</b></span>
                                    </li>
                                </Link>
                                <Link to={"/directions"}>
                                    <li>
                                        <span className="icon">
                                            <img src="img/svg/users.svg" alt="" />
                                        </span>
                                        <span className="data"><b>Guruhlar</b></span>
                                    </li>
                                </Link>
                                <Link to={"/lesson_table"}>
                                    <li>
                                        <span className="icon">
                                            <img src="img/svg/task.svg" alt="" />
                                        </span>
                                        <span className="data"><b>Davomat</b></span>
                                    </li>
                                </Link>
                                <Link to={"/lesson_plan"}>
                                    <li>
                                        <span className="icon">
                                            <img src="img/svg/star_list.svg" alt="" />
                                        </span>
                                        <span className="data"><b>Dars Rejasi</b></span>
                                    </li>
                                </Link>
                            </ul>
                        </aside>
                        <main>
                        <header>
                            <div className="aside_mini">
                                <img src="img/svg/menu.svg" alt="" />
                            </div>
                            <nav></nav>
                            <ul className="header_buttons">
                                <li>
                                    <a href="#">
                                        <img src="img/svg/notification.svg" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a className="user_avatar" href="#">
                                        <img src="img/veymay.jpg" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </header>

                            <Routes>
                                <Route path="/" element={<Main />} />
                                <Route path="/operator" element={<Operator />} />
                                <Route path="/students" element={<Students />} />
                                <Route path="/directions" element={<Directions />} />
                                <Route path="/lesson_table" element={<LessonTable />} />
                                <Route path="/lesson_plan" element={<LessonPlan />} />
                            </Routes>

                        </main>
                    </div>
                </div>
            </Router>


        </>
    )
}