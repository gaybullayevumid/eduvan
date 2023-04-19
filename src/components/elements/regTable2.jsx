import React, { useState } from 'react';

const regTable2 = () => {
  const arr = ['Salom', 'Alik'];
  const [current, setCurrent] = useState('');

  const handleButtonClick = (index) => {
    setCurrent(arr[index]);
  };

  return (
    <>
      <TabPanel>
        <section className="directions">
          <ul className="direction_items">
            <h1 className="title">Guruhlar Ro'yxati</h1>
            <li>
              <a href="#">
                <span className="icon">
                  <img src="img/svg/savodxonlik.svg" alt="" />
                </span>
                {course[0].turi}
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
                    <td><span><a href={data.ismi} download={`${data.ismi}_${data.familiyasi}_${data.sharifi}.jpg`}>Yuklab olish</a></span></td>
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
                {course[0].turi}
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
                    <td><span><a href={data.ismi} download={`${data.ismi}_${data.familiyasi}_${data.sharifi}.jpg`}>Yuklab olish</a></span></td>
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
                {course[0].turi}
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
                    <td><span><a href={data.ismi} download={`${data.ismi}_${data.familiyasi}_${data.sharifi}.jpg`}>Yuklab olish</a></span></td>
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
                {course[0].turi}
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
                    <td><span><a href={data.ismi} download={`${data.ismi}_${data.familiyasi}_${data.sharifi}.jpg`}>Yuklab olish</a></span></td>
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
                {course[0].turi}
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
                    <td><span><a href={data.ismi} download={`${data.ismi}_${data.familiyasi}_${data.sharifi}.jpg`}>Yuklab olish</a></span></td>
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
                {course[0].turi}
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
                    <td><span><a href={data.ismi} download={`${data.ismi}_${data.familiyasi}_${data.sharifi}.jpg`}>Yuklab olish</a></span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </TabPanel>
    </>
  );
};

export default regTable2;