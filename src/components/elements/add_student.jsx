import React, { useState } from "react";

export default function AddStudent() {
  return (
    <>
      <form action="#" method="get">
        <div className="input_area">
          <label htmlFor="">Ism</label>
          <input type="text" />
        </div>
        <div className="input_area">
          <label htmlFor="">Familiya</label>
          <input type="text" />
        </div>
        <div className="input_area">
          <label htmlFor="">Sharif</label>
          <input type="text" />
        </div>
        <div className="input_area">
          <label htmlFor="">Telefon</label>
          <input type="text" />
        </div>
        <div className="input_area">
          <label htmlFor="">Telefon++</label>
          <input type="text" />
        </div>
        <div className="input_area">
          <label htmlFor="">Yo'nalishi</label>
          <select name="" id="" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Tanlash..</option>
            <option value="">SAVODXONLIK</option>
            <option value="">FRONTEND</option>
            <option value="">BACKEND</option>
            <option value="">3D MAX</option>
            <option value="">GRAFIK DIZAYN</option>
            <option value="">ROBOTOTEXNIKA</option>
          </select>
        </div>
        <div className="input_area">
          <label htmlFor="">Kunlar</label>
          <select name="" id="" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Tanlash..</option>
            <option value="">JUFT KUNLAR</option>
            <option value="">TOQ KUNLAR</option>
            <option value="">HAR KUNI</option>
          </select>
        </div>
        <div className="input_area">
          <label htmlFor="">dars vaqti</label>
          <select name="" id="" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Tanlash..</option>
            <option value="">09:00 - 11:00</option>
            <option value="">11:00 - 13:00</option>
            <option value="">14:00 - 16:00</option>
            <option value="">16:00 - 18:00</option>
          </select>
        </div>
        <div className="input_area">
          <label htmlFor="">Chegirma</label>
          <select name="" id="">
            <option value="DEFAULT" disabled>Tanlash..</option>
            <option value="">Yoshlar daftari</option>
            <option value="">Temir daftar</option>
            <option value="">Chegirma 3</option>
            <option value="">Chegirma 4</option>
          </select>
        </div>
        <div className="input_area">
          <label htmlFor="">Status</label>
          <select name="" id="" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Tanlash..</option>
            <option value="">Do'stlar</option>
            <option value="">Ijtimoiy Tarmoq</option>
            <option value="">WEB Sayt</option>
            <option value="">Reklama Banneri</option>
          </select>
        </div>
        <div className="input_area">
          <label htmlFor="">hujjat</label>
          <input type="file" name="" id="" />
        </div>
        <br />
        <button className="direction_group_add_button"><img src="img/svg/plus.svg" alt="" />Ro'yxatga olish</button>
      </form>
    </>
  )
}
