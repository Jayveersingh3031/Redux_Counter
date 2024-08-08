import React, { useState } from "react";
import { removeCount } from "../Slice/CountSlice";
import { useDispatch,useSelector } from "react-redux";

function RemoveButton() {
  const dispatch = useDispatch();
  const count = useSelector(state=>state.count)
  let total = useSelector(state=>state.total)
  return (
    <button
      className="p-2 bg-neutral-400 rounded-lg hover:bg-slate-500 font-semibold"
      onClick={() => {
        total=count-1
        console.log(total)
        count>0 ?dispatch(removeCount(total)):0;
        // dispatch(removeCount(total));
      }}
    >
      RemoveButton
    </button>
  );
}

export default RemoveButton;
