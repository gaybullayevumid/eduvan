import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Table from './elements/table';
import AddStudent from "./elements/add_student";
import regTable from './elements/regTable'
import regTable2 from './elements/regTable2'


export default function Static() {
    return (
        <>
            <section className="operator">
                <article className="add_student">
                    <AddStudent />
                </article>
                <article className="new_groups_list">
                    <Tabs>
                        <TabList>
                            <Tab>
                                <span><img src="img/svg/savodxonlik.svg" alt="" /></span>
                                Savodxonlik
                            </Tab>
                            <Tab>
                                <span><img src="img/svg/dev.svg" alt="" /></span>
                                Frontend
                            </Tab>
                            <Tab>
                                <span><img src="img/svg/layers.svg" alt="" /></span>
                                Backend
                            </Tab>
                            <Tab>
                                <span><img src="img/svg/mobile.svg" alt="" /></span>
                                Mobil
                            </Tab>
                            <Tab>
                                <span><img src="img/svg/design.svg" alt="" /></span>
                                Grafik Dizayn
                            </Tab>
                            <Tab>
                                <span><img src="img/svg/3d.svg" alt="" /></span>
                                3d Max
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <Table />
                            {/* <section className="directions">
                                <ul className="direction_items">
                                    <h1 className="title">Guruhlar Ro'yxati</h1>
                                    <li>
                                        <a href="#">
                                            <span className="icon">
                                                <img src="img/svg/savodxonlik.svg" alt="" />
                                            </span>
                                            Savodxonlik
                                            <span className="sub_arrow"></span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="direction_item_content">
                                    <div className="direction_item_group_title">
                                        Frontend
                                        <ul className="title_items">
                                            <li>
                                                <span>
                                                    <img src="./img/svg/check.svg" alt="" />
                                                </span>
                                                sana
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/days.svg" alt="" />
                                                </span>
                                                kunlar
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/time.svg" alt="" />
                                                </span>
                                                soat
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/student.svg" alt="" />
                                                </span>
                                                10 ta
                                            </li>
                                        </ul>
                                    </div>
                                    <table className="direction_item_group_users">
                                        <thead>
                                            <tr>
                                                <th>T/R</th>
                                                <th>F.I.SH</th>
                                                <th>Telefon</th>
                                                <th>Telefon++</th>
                                                <th>Chegirma</th>
                                                <th>Azolik Sanasi</th>
                                                <th>Hujjat</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span>1</span></td>
                                                <td><span>Rustamov Muxriddin</span></td>
                                                <td><span>+998 90 620 29 19</span></td>
                                                <td><span>+998 90 618 29 19</span></td>
                                                <td><span>10</span></td>
                                                <td><span>15.04.2023</span></td>
                                                <td><span>Yuklab olish</span></td>
                                            </tr>
                                            <tr>
                                                <td><span>1</span></td>
                                                <td><span>Rustamov Muxriddin</span></td>
                                                <td><span>+998 90 620 29 19</span></td>
                                                <td><span>+998 90 618 29 19</span></td>
                                                <td><span>10</span></td>
                                                <td><span>15.04.2023</span></td>
                                                <td><span>Yuklab olish</span></td>
                                            </tr>
                                            <tr>
                                                <td><span>1</span></td>
                                                <td><span>Rustamov Muxriddin</span></td>
                                                <td><span>+998 90 620 29 19</span></td>
                                                <td><span>+998 90 618 29 19</span></td>
                                                <td><span>10</span></td>
                                                <td><span>15.04.2023</span></td>
                                                <td><span>Yuklab olish</span></td>
                                            </tr>
                                            <tr>
                                                <td><span>1</span></td>
                                                <td><span>Rustamov Muxriddin</span></td>
                                                <td><span>+998 90 620 29 19</span></td>
                                                <td><span>+998 90 618 29 19</span></td>
                                                <td><span>10</span></td>
                                                <td><span>15.04.2023</span></td>
                                                <td><span>Yuklab olish</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section> */}
                        </TabPanel>
                    </Tabs>
                </article>
            </section >
        </>
    )
}