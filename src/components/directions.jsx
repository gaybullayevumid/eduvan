import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Table from './elements/table'
import regTable from './elements/regTable'

export default function Directions() {
    return (
        <>
            <section className="directions">
                <ul className="direction_items">
                    <div className="direction_item_add">
                        <button className="direction_group_add_button">
                            <img src="img/svg/plus.svg" alt="" />
                            Guruh Yaratish
                        </button>
                    </div>
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
                    <Tabs>
                        <TabList>
                            <Tab>
                                <span><img src="./img/svg/users.svg" alt="" /></span>
                                O'quchilar
                            </Tab>
                            <Tab>
                                <span><img src="./img/svg/payments.svg" alt="" /></span>
                                To'lovlar
                            </Tab>
                            <Tab>
                                <span><img src="./img/svg/task.svg" alt="" /></span>
                                Davomat
                            </Tab>
                        </TabList>
                            <div className="direction_item_group_title">
                                Frontend - N3
                                <ul className="title_items">
                                    <li>
                                        <span>
                                            <img src="./img/svg/check.svg" alt="" />
                                        </span>
                                        20.01.2023
                                    </li>
                                    <li>
                                        <span>
                                            <img src="./img/svg/days.svg" alt="" />
                                        </span>
                                        toq kunlar
                                    </li>
                                    <li>
                                        <span>
                                            <img src="./img/svg/time.svg" alt="" />
                                        </span>
                                        14:00-16:00
                                    </li>
                                    <li>
                                        <span>
                                            <img src="./img/svg/student.svg" alt="" />
                                        </span>
                                        15ta
                                    </li>
                                    <li>
                                        <span>
                                            <img src="./img/svg/user.svg" alt="" />
                                        </span>
                                        Muxriddin Rustamov Mirzayevich
                                    </li>
                                </ul>
                            </div>
                        <TabPanel>
                            <Table/>
                        </TabPanel>
                        <TabPanel>
                            {/* <table className="direction_item_group_users">
                                <thead>
                                    <tr>
                                        <th>T/R</th>
                                        <th>Ism Familiya</th>
                                        <th>Yanvar</th>
                                        <th>Fevral</th>
                                        <th>Mart</th>
                                        <th>Aprel</th>
                                        <th>May</th>
                                        <th>Iyun</th>
                                        <th>Iyul</th>
                                        <th>Avgust</th>
                                        <th>Sentyabr</th>
                                        <th>Oktyabr</th>
                                        <th>Noyabr</th>
                                        <th>Dekabr</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Muxriddin Rustamov Mirzohid og'li</td>
                                        <td><span>Qilindi</span></td>
                                        <td><span>Qilindi</span></td>
                                        <td><span>Qilindi</span></td>
                                        <td><span>Qilindi</span></td>
                                        <td><span>Qilindi</span></td>
                                        <td><span>Qilindi</span></td>
                                        <td><span>Qilindi</span></td>
                                        <td>Qilinmadi</td>
                                        <td>Qilinmadi</td>
                                        <td>Qilinmadi</td>
                                        <td>Qilinmadi</td>
                                        <td>Qilinmadi</td>
                                    </tr>
                                </tbody>
                            </table> */}
                            
                        </TabPanel>
                        <TabPanel>
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
                                        <td>
                                            <span className="lesson_table_check_text">

                                            </span>
                                            <div className="lesson_table_check">
                                                <img src="img/svg/shield_check.svg" alt="" />
                                                <img src="img/svg/shield_cross.svg" alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <span className="lesson_table_check_text">

                                            </span>
                                            <div className="lesson_table_check">
                                                <img src="img/svg/shield_check.svg" alt="" />
                                                <img src="img/svg/shield_cross.svg" alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <span className="lesson_table_check_text">

                                            </span>
                                            <div className="lesson_table_check">
                                                <img src="img/svg/shield_check.svg" alt="" />
                                                <img src="img/svg/shield_cross.svg" alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <span className="lesson_table_check_text">

                                            </span>
                                            <div className="lesson_table_check">
                                                <img src="img/svg/shield_check.svg" alt="" />
                                                <img src="img/svg/shield_cross.svg" alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <span className="lesson_table_check_text">

                                            </span>
                                            <div className="lesson_table_check">
                                                <img src="img/svg/shield_check.svg" alt="" />
                                                <img src="img/svg/shield_cross.svg" alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <span className="lesson_table_check_text">

                                            </span>
                                            <div className="lesson_table_check">
                                                <img src="img/svg/shield_check.svg" alt="" />
                                                <img src="img/svg/shield_cross.svg" alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <span className="lesson_table_check_text">

                                            </span>
                                            <div className="lesson_table_check">
                                                <img src="img/svg/shield_check.svg" alt="" />
                                                <img src="img/svg/shield_cross.svg" alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <span className="lesson_table_check_text">

                                            </span>
                                            <div className="lesson_table_check">
                                                <img src="img/svg/shield_check.svg" alt="" />
                                                <img src="img/svg/shield_cross.svg" alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <span className="lesson_table_check_text">

                                            </span>
                                            <div className="lesson_table_check">
                                                <img src="img/svg/shield_check.svg" alt="" />
                                                <img src="img/svg/shield_cross.svg" alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <span className="lesson_table_check_text">

                                            </span>
                                            <div className="lesson_table_check">
                                                <img src="img/svg/shield_check.svg" alt="" />
                                                <img src="img/svg/shield_cross.svg" alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <span className="lesson_table_check_text">

                                            </span>
                                            <div className="lesson_table_check">
                                                <img src="img/svg/shield_check.svg" alt="" />
                                                <img src="img/svg/shield_cross.svg" alt="" />
                                            </div>
                                        </td>
                                        <td>
                                            <span className="lesson_table_check_text">

                                            </span>
                                            <div className="lesson_table_check">
                                                <img src="img/svg/shield_check.svg" alt="" />
                                                <img src="img/svg/shield_cross.svg" alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </TabPanel>
                    </Tabs>
                </div>
            </section>
        </>
    )
}