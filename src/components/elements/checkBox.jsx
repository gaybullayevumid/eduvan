import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";
export default function checkBox() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <InputSwitch checked = { checked } onChange = {(e) => setChecked(e.value)} />
    </>
  )
}