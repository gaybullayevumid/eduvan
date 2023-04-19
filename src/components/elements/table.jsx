import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";

export default function DataTableExample() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <DataTable
        value={posts}
        responsiveLayout="scroll"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        dataKey="id"
        emptyMessage="Ma'lumotlar Topilmadi!"
        className="datatable-responsive"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
        rows={5}
      >
        <Column field="id" sortable header="T/R"></Column>
        <Column field="name" sortable header="Ism Familiya"></Column>
        <Column field="phone" sortable header="Telefon"></Column>
        <Column field="phone" sortable header="Telefon++"></Column>
        <Column field="suite" sortable header="Azolik Sanasi"></Column>
        <Column field="id" sortable header="Shartnoma"></Column>
        <Column field="id" sortable header="Chegirma"></Column>
        <Column field="id" sortable header="Status"></Column>
        <Column field="id" sortable header="Hujjat"></Column>
        <Column field="id" header="Taxrirlash"></Column>
      </DataTable>
    </div>
  );
};