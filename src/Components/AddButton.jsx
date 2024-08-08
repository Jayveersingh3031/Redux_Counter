import React, { useState } from "react";
import { addCount } from "../Slice/CountSlice";
import { useDispatch, useSelector } from "react-redux";
function AddButton() {
  const dispatch = useDispatch();
  const count = useSelector(state=>state.count)
  let total = useSelector(state=>state.total)
  return (
    <button
      className="p-2 bg-neutral-400 rounded-lg hover:bg-slate-500 font-semibold"
      onClick={() => {
        total=count+1;
        console.log(total)
        dispatch(addCount(total));
      }}
    >
      AddButton
    </button>
  );
}

export default AddButton;
