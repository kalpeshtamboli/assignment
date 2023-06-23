import React, { useEffect, useState } from "react";
import { generateTimeSlots } from "../../utils/common";

function Slot({ startTime, endTime, slotDuration, getSelectedSlot }) {
  const [slots, setSlots] = useState();

  const calculateHours = () => {
    const startTimeHour = startTime.split(":")[0];
    const endTimeHour = endTime.split(":")[0];

    return endTimeHour - startTimeHour;
  };

  const slotsGenerator = () => {
    // const numberOfSlots = (calculateHours() * 60) / slotDuration;
    // let slots = [];
    // for (let i = 0; i < numberOfSlots; i++) {
    //   slots.push(startTime);
    //   // time adding logic goes here
    // }
    // setSlots(slots);
    setSlots(generateTimeSlots(null, startTime, endTime, slotDuration));
    console.log(slots);
  };

  useEffect(() => {
    slotsGenerator();
  }, []);

  return (
    <div>
      <div className="flex flex-wrap">
        {slots?.map((slot, idx) => {
          return (
            <div
              key={idx.toString()}
              className=" ml-4 my-2  p-4 border rounded-md hover:bg-slate-100 cursor-pointer"
            >
              <p onClick={() => getSelectedSlot(slot)}>
                {new Date(slot).getHours() + ":" + new Date(slot).getMinutes()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slot;
