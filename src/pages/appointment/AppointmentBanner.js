import React from "react";
import chair from "../../assets/images/appointment.jpg";
import { DayPicker } from "react-day-picker";

function AppointmentBanner({ selectedDate, setSelectedDate }) {
  return (
    <header className="my-6 bannerBg">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="chair"
          />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppointmentBanner;
