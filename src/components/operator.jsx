import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Table from './elements/table';
import AddStudent from "./elements/add_student";
import regTable from './elements/regTable'
import regTable2 from './elements/regTable2'
import StudentsData from './students.json'


export default function Static() {
    const [course, setCourse] = useState(StudentsData['savodxonlik']);
    const choosCourse = (key) => {
        if (StudentsData[key]) {
            setCourse(StudentsData[key]);
        }
    };

    const [group, setGroup] = useState(course[0]);
    const choosGroup = (id) => {
        if (id < course.length) {
            setGroup(course[id]);
        }
    };

    return (
        <>
            <section className="operator">
                <article className="add_student">
                    <AddStudent />
                </article>
                <article className="new_groups_list">
                    <Tabs>
                        <TabList>
                            <Tab onClick={() => choosCourse('savodxonlik')}>
                                <span><img src="img/svg/savodxonlik.svg" alt="" /></span>
                                Savodxonlik
                            </Tab>
                            <Tab onClick={() => choosCourse('frontend')}>
                                <span><img src="img/svg/dev.svg" alt="" /></span>
                                Frontend
                            </Tab>
                            <Tab onClick={() => choosCourse('backend')}>
                                <span><img src="img/svg/layers.svg" alt="" /></span>
                                Backend
                            </Tab>
                            <Tab onClick={() => choosCourse('mobil')}>
                                <span><img src="img/svg/mobile.svg" alt="" /></span>
                                Mobil
                            </Tab>
                            <Tab onClick={() => choosCourse('grafik_dizayn')}>
                                <span><img src="img/svg/design.svg" alt="" /></span>
                                Grafik Dizayn
                            </Tab>
                            <Tab onClick={() => choosCourse('3d_max')}>
                                <span><img src="img/svg/3d.svg" alt="" /></span>
                                3d Max
                            </Tab>
                        </TabList>
                        <TabPanel>
                            <section className="directions">
                                <ul className="direction_items">
                                    <h1 className="title">Guruhlar Ro'yxati</h1>
                                    <li>
                                        <a href="#">
                                            <span className="icon">
                                                <img src="img/svg/savodxonlik.svg" alt="" />
                                            </span>
                                            {StudentsData.savodxonlik[0].turi}
                                            <span className="sub_arrow"></span>
                                        </a>
                                        {course.map((data, id) => (
                                            <ul className="direction_groups">
                                                <li>
                                                    <a href="#" onClick={() => choosGroup(`${data.id}`)}>{data.id + 1}-guruh</a>
                                                </li>
                                            </ul>
                                        ))}
                                    </li>
                                </ul>
                                <div className="direction_item_content">
                                    <div className="direction_item_group_title">
                                        {group.nomi}
                                        <ul className="title_items">
                                            <li>
                                                <span>
                                                    <img src="./img/svg/check.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.sana}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/days.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.kunlar}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/time.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.soat}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/student.svg" alt="" />
                                                </span>
                                                {group['o\'quvchilar'].length} ta
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
                                            {group["o'quvchilar"].map((data, id) => (
                                                <tr>
                                                    <td><span>{data.id}</span></td>
                                                    <td><span>{data.ismi} {data.familiyasi} {data.sharifi}</span></td>
                                                    <td><span>{data.telefon1}</span></td>
                                                    <td><span>{data.telefon2}</span></td>
                                                    <td><span>{data.chegirma}</span></td>
                                                    <td><span>{data.azolik_sanasi}</span></td>
                                                    <td><span><a href={data.hujjat} download={`${data.ismi}_${data.familiyasi}_${data.sharifi}.jpg`}>Yuklab olish</a></span></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </TabPanel>
                        <TabPanel>
                            <section className="directions">
                                <ul className="direction_items">
                                    <h1 className="title">Guruhlar Ro'yxati</h1>
                                    <li>
                                        <a href="#">
                                            <span className="icon">
                                                <img src="img/svg/savodxonlik.svg" alt="" />
                                            </span>
                                            {group.turi}
                                            <span className="sub_arrow"></span>
                                        </a>
                                        {course.map((data, id) => (
                                            <ul className="direction_groups">
                                                <li>
                                                    <a href="#" onClick={() => choosGroup(`${data.id}`)}>{data.id + 1}-guruh</a>
                                                </li>
                                            </ul>
                                        ))}
                                    </li>
                                </ul>
                                <div className="direction_item_content">
                                    <div className="direction_item_group_title">
                                        {group.nomi}
                                        <ul className="title_items">
                                            <li>
                                                <span>
                                                    <img src="./img/svg/check.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.sana}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/days.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.kunlar}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/time.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.soat}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/student.svg" alt="" />
                                                </span>
                                                {group['o\'quvchilar'].length} ta
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
                                            {group["o'quvchilar"].map((data, id) => (
                                                <tr>
                                                    <td><span>{data.id}</span></td>
                                                    <td><span>{data.ismi} {data.familiyasi} {data.sharifi}</span></td>
                                                    <td><span>{data.telefon1}</span></td>
                                                    <td><span>{data.telefon2}</span></td>
                                                    <td><span>{data.chegirma}</span></td>
                                                    <td><span>{data.azolik_sanasi}</span></td>
                                                    <td><span><a href={data.hujjat} download={`${data.ismi}_${data.familiyasi}_${data.sharifi}.jpg`}>Yuklab olish</a></span></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </TabPanel>
                        <TabPanel>
                            <section className="directions">
                                <ul className="direction_items">
                                    <h1 className="title">Guruhlar Ro'yxati</h1>
                                    <li>
                                        <a href="#">
                                            <span className="icon">
                                                <img src="img/svg/savodxonlik.svg" alt="" />
                                            </span>
                                            {group.turi}
                                            <span className="sub_arrow"></span>
                                        </a>
                                        {course.map((data, id) => (
                                            <ul className="direction_groups">
                                                <li>
                                                    <a href="#" onClick={() => choosGroup(`${data.id}`)}>{data.id + 1}-guruh</a>
                                                </li>
                                            </ul>
                                        ))}
                                    </li>
                                </ul>
                                <div className="direction_item_content">
                                    <div className="direction_item_group_title">
                                        {group.nomi}
                                        <ul className="title_items">
                                            <li>
                                                <span>
                                                    <img src="./img/svg/check.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.sana}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/days.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.kunlar}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/time.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.soat}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/student.svg" alt="" />
                                                </span>
                                                {group['o\'quvchilar'].length} ta
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
                                            {group["o'quvchilar"].map((data, id) => (
                                                <tr>
                                                    <td><span>{data.id}</span></td>
                                                    <td><span>{data.ismi} {data.familiyasi} {data.sharifi}</span></td>
                                                    <td><span>{data.telefon1}</span></td>
                                                    <td><span>{data.telefon2}</span></td>
                                                    <td><span>{data.chegirma}</span></td>
                                                    <td><span>{data.azolik_sanasi}</span></td>
                                                    <td><span><a href={data.hujjat} download={`${data.ismi}_${data.familiyasi}_${data.sharifi}.jpg`}>Yuklab olish</a></span></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </TabPanel>
                        <TabPanel>
                            <section className="directions">
                                <ul className="direction_items">
                                    <h1 className="title">Guruhlar Ro'yxati</h1>
                                    <li>
                                        <a href="#">
                                            <span className="icon">
                                                <img src="img/svg/savodxonlik.svg" alt="" />
                                            </span>
                                            {group.turi}
                                            <span className="sub_arrow"></span>
                                        </a>
                                        {course.map((data, id) => (
                                            <ul className="direction_groups">
                                                <li>
                                                    <a href="#" onClick={() => choosGroup(`${data.id}`)}>{data.id + 1}-guruh</a>
                                                </li>
                                            </ul>
                                        ))}
                                    </li>
                                </ul>
                                <div className="direction_item_content">
                                    <div className="direction_item_group_title">
                                        {group.nomi}
                                        <ul className="title_items">
                                            <li>
                                                <span>
                                                    <img src="./img/svg/check.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.sana}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/days.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.kunlar}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/time.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.soat}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/student.svg" alt="" />
                                                </span>
                                                {group['o\'quvchilar'].length} ta
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
                                            {group["o'quvchilar"].map((data, id) => (
                                                <tr>
                                                    <td><span>{data.id}</span></td>
                                                    <td><span>{data.ismi} {data.familiyasi} {data.sharifi}</span></td>
                                                    <td><span>{data.telefon1}</span></td>
                                                    <td><span>{data.telefon2}</span></td>
                                                    <td><span>{data.chegirma}</span></td>
                                                    <td><span>{data.azolik_sanasi}</span></td>
                                                    <td><span><a href={data.hujjat} download={`${data.ismi}_${data.familiyasi}_${data.sharifi}.jpg`}>Yuklab olish</a></span></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </TabPanel>
                        <TabPanel>
                            <section className="directions">
                                <ul className="direction_items">
                                    <h1 className="title">Guruhlar Ro'yxati</h1>
                                    <li>
                                        <a href="#">
                                            <span className="icon">
                                                <img src="img/svg/savodxonlik.svg" alt="" />
                                            </span>
                                            {group.turi}
                                            <span className="sub_arrow"></span>
                                        </a>
                                        {course.map((data, id) => (
                                            <ul className="direction_groups">
                                                <li>
                                                    <a href="#" onClick={() => choosGroup(`${data.id}`)}>{data.id + 1}-guruh</a>
                                                </li>
                                            </ul>
                                        ))}
                                    </li>
                                </ul>
                                <div className="direction_item_content">
                                    <div className="direction_item_group_title">
                                        {group.nomi}
                                        <ul className="title_items">
                                            <li>
                                                <span>
                                                    <img src="./img/svg/check.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.sana}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/days.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.kunlar}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/time.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.soat}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/student.svg" alt="" />
                                                </span>
                                                {group['o\'quvchilar'].length} ta
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
                                            {group["o'quvchilar"].map((data, id) => (
                                                <tr>
                                                    <td><span>{data.id}</span></td>
                                                    <td><span>{data.ismi} {data.familiyasi} {data.sharifi}</span></td>
                                                    <td><span>{data.telefon1}</span></td>
                                                    <td><span>{data.telefon2}</span></td>
                                                    <td><span>{data.chegirma}</span></td>
                                                    <td><span>{data.azolik_sanasi}</span></td>
                                                    <td><span><a href={data.hujjat} download={`${data.ismi}_${data.familiyasi}_${data.sharifi}.jpg`}>Yuklab olish</a></span></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </TabPanel>
                        <TabPanel>
                            <section className="directions">
                                <ul className="direction_items">
                                    <h1 className="title">Guruhlar Ro'yxati</h1>
                                    <li>
                                        <a href="#">
                                            <span className="icon">
                                                <img src="img/svg/savodxonlik.svg" alt="" />
                                            </span>
                                            {group.turi}
                                            <span className="sub_arrow"></span>
                                        </a>
                                        {course.map((data, id) => (
                                            <ul className="direction_groups">
                                                <li>
                                                    <a href="#" onClick={() => choosGroup(`${data.id}`)}>{data.id + 1}-guruh</a>
                                                </li>
                                            </ul>
                                        ))}
                                    </li>
                                </ul>
                                <div className="direction_item_content">
                                    <div className="direction_item_group_title">
                                        {group.nomi}
                                        <ul className="title_items">
                                            <li>
                                                <span>
                                                    <img src="./img/svg/check.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.sana}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/days.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.kunlar}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/time.svg" alt="" />
                                                </span>
                                                {group.tuzilishi.soat}
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="./img/svg/student.svg" alt="" />
                                                </span>
                                                {group['o\'quvchilar'].length} ta
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
                                            {group["o'quvchilar"].map((data, id) => (
                                                <tr>
                                                    <td><span>{data.id}</span></td>
                                                    <td><span>{data.ismi} {data.familiyasi} {data.sharifi}</span></td>
                                                    <td><span>{data.telefon1}</span></td>
                                                    <td><span>{data.telefon2}</span></td>
                                                    <td><span>{data.chegirma}</span></td>
                                                    <td><span>{data.azolik_sanasi}</span></td>
                                                    <td><span><a href={data.hujjat} download={`${data.ismi}_${data.familiyasi}_${data.sharifi}.jpg`}>Yuklab olish</a></span></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </TabPanel>
                    </Tabs>
                </article>
            </section>
        </>
    )
}