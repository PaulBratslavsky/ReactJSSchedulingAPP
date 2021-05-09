import React from "react";
import "./event-attendee.scss";

export default function EventAttendee({name, photoURL, handle}) {
  return (
    <div className='pb_event-attendee me-2'>
      <div className='text-center'>
        <img
          className='pb_event-attendee-image'
          src={photoURL}
          alt='Attendee'
        />
  
  
            <h5 className='pb_event_text'>
              <a href='/'>{name}</a>
            </h5>
            { handle && <span className='pb_event_subtext'>@marthaa</span> }

      </div>
    </div>
  );
}
