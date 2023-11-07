import { Close } from "@material-ui/icons";
import React, { useState } from "react";

function Announce() {
  const [announceType, setAnnounceType] = useState(
    "bg-[#64CCC5] font-bold text-white flex item-center justify-center"
  );

  const handleClose = () => {
    setAnnounceType(announceType + " hidden");
  };

  return (
    <div className={announceType}>
      <h2>Hurry up it's 50% sales now</h2>
      <Close className="cursor-pointer" onClick={handleClose} />
    </div>
  );
}

export default Announce;
