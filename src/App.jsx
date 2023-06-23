import { useState } from "react";

import "./App.css";
import Slot from "./components/Slot";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [value, onChange] = useState(new Date());
  const [selectedSlot, setSelectdSlot] = useState(null);

  console.log(selectedSlot);

  return (
    <div className="flex p-10">
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>

      <div className="p-2">
        <p className="py-2 text-center">{new Date(value).toDateString()}</p>

        <div>
          <Slot
            slotDuration={30}
            startTime={"9:00"}
            endTime={"21:00"}
            getSelectedSlot={(val) => setSelectdSlot(val)}
          />
        </div>

        <div>
          Selected Slot ---
          {new Date(selectedSlot).getHours() +
            ":" +
            new Date(selectedSlot).getMinutes()}
        </div>
      </div>
    </div>
  );
}

export default App;
