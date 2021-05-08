import React from "react";
import "./event-attendee.scss";

export default function EventAttendee() {
  return (
    <div className='pb_event-attendee me-2'>
      <div className='text-center'>
        <img
          className='pb_event-attendee-image'
          src='https://zenix.dexignzone.com/xhtml/images/contacts/Untitled-3.jpg'
          alt='Attendee'
        />
        <h5 className='pb_event_text'>
          <a href='#'>
            Martha
          </a>
        </h5>
        <span className='pb_event_subtext'>@marthaa</span>
      </div>
    </div>
  );
}
