import React from "react";

export default function Static() {
    return (
        <>
            <section className="main">
                <ul className="stats">
                    <li>
                        <a href="#">
                            <img src="img/svg/user.svg" alt="" />
                            <ul className="data">
                                <div className="data_title">
                                    O'quvchilar
                                    <span className="count">9000</span>
                                </div>
                            </ul>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/svg/end_student.svg" alt="" />
                            <ul className="data">
                                <div className="data_title">
                                    bitiruvchilar
                                    <span className="count">9000</span>
                                </div>
                            </ul>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/svg/users.svg" alt="" />
                            <ul className="data">
                                <div className="data_title">
                                    Guruhlar
                                    <span className="count">9000</span>
                                </div>
                            </ul>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/svg/bussinesman.svg" alt="" />
                            <ul className="data">
                                <div className="data_title">
                                    Xodimlar
                                    <span className="count">9000</span>
                                </div>
                            </ul>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    )
}