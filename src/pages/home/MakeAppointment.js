import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButtons from "../../components/PrimaryButtons";

function MakeAppointment() {
  return (
    <section
      className="mt-32"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="lg:w-1/2 hidden lg:block -mt-32 rounded-lg shadow-2xl"
            alt="no internet"
          />
          <div>
            <h4 className="text-lg text-accent font-bold">Appointment</h4>
            <h1 className="text-4xl text-white font-bold">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButtons>Appointment</PrimaryButtons>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MakeAppointment;
