import React, { useState } from "react";
import { Switch, Spacer } from "@nextui-org/react";

export default function Static() {

    return (
        <>
            <section className="directions">
                <ul className="direction_items">
                    <h1 className="title">Guruhlar Ro'yxati</h1>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="img/svg/savodxonlik.svg" alt="" />
                            </span>
                            Kompyuter Savodxonligi
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="img/svg/dev.svg" alt="" />
                            </span>
                            Frontend Dasturlash
                            <span className="sub_arrow"></span>
                        </a>
                        <ul className="direction_groups">
                            <li>
                                <a href="#">1-guruh</a>
                            </li>
                            <li>
                                <a href="#">2-guruh</a>
                            </li>
                            <li>
                                <a href="#">3-guruh</a>
                            </li>
                            <li>
                                <a href="#">4-guruh</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="img/svg/layers.svg" alt="" />
                            </span>
                            Backend Dasturlash
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="img/svg/mobile.svg" alt="" />
                            </span>
                            Mobil Dasturlash
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="img/svg/design.svg" alt="" />
                            </span>
                            Grafik va WEB Dizayn
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="img/svg/3d.svg" alt="" />
                            </span>
                            3D Modellashtirish
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="img/svg/robot.svg" alt="" />
                            </span>
                            Mobil Robototexnika
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="img/svg/math.svg" alt="" />
                            </span>
                            IT Matematika
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <img src="img/svg/english.svg" alt="" />
                            </span>
                            IT English
                        </a>
                    </li>
                </ul>
                <div className="direction_item_content">
                    <div className="direction_item_group_title">Frontend N3 Group</div>
                    <table className="direction_item_group_users">
                        <thead>
                            <tr>
                                <th>T/R</th>
                                <th>Ism Familiya</th>
                                <th>18.02</th>
                                <th>18.02</th>
                                <th>18.02</th>
                                <th>18.02</th>
                                <th>18.02</th>
                                <th>18.02</th>
                                <th>18.02</th>
                                <th>18.02</th>
                                <th>18.02</th>
                                <th>18.02</th>
                                <th>18.02</th>
                                <th>18.02</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Muxriddin Rustamov Mirzohid o'g'li</td>
                                <td><Switch bordered size="xs" color="success" /></td>
                                <td><Switch bordered size="xs" color="success" /></td>
                                <td><Switch bordered size="xs" color="success" /></td>
                                <td><Switch bordered size="xs" color="success" /></td>
                                <td><Switch bordered size="xs" color="success" /></td>
                                <td><Switch bordered size="xs" color="success" /></td>
                                <td><Switch bordered size="xs" color="success" /></td>
                                <td><Switch bordered size="xs" color="success" /></td>
                                <td><Switch bordered size="xs" color="success" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}