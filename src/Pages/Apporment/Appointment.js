import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBenner from './AppointmentBenner';
import AvailableAppointment from './AvailableAppointment';


const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>

            <AppointmentBenner date={date} setDate={setDate} ></AppointmentBenner>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;