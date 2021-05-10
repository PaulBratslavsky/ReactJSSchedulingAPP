import React from "react";
import Card from "../Card/Card";
import "./events-list-item.scss";

import { AiOutlineCalendar } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import EventAttendee from "../EventAttendee/EventAttendee";
import Button from "../Button/Button";

export default function EventsListItem({ item, handleSelectedEvent, handleDeleteEvent}) {
  
  const { id, title, date, city, hostedBy, hostPhotoURL, venue, attendees, description } = item;
  
  return (
    <Card>
      <div className='row'  onClick={() => {}}>
        <div className='col-md-4'>
          <img
            className='pb_event-image'
            src={hostPhotoURL}
            alt='Host'
          />
        </div>
        <div className='col pb_event-content'>
          <div>
            <div className='d-flex align-items-between justify-content-between'>
              <div>
                <h2>{title}</h2>
                <div className='pb_event-date'>
                  <span>
                    <AiOutlineCalendar />
                    {date}
                  </span>
                  <span>
                    <BiMap />
                    {city}
                  </span>
                </div>
                <div className='pb_event-date'>
                  <span>hosted by: {hostedBy} | </span> 

                  <span>
                  {venue}
                  </span>
                </div>
              </div>
            </div>

            <p>
             {description}
            </p>

            <ul className='pb_event-attendees'>
              { attendees && attendees.map(attendee => <EventAttendee key={attendee.id} {...attendee} />)}
            </ul>
            <div className="d-flex">
              <Button value="Edit Event" addClass=" btn-sm btn-danger" margin="me-2" onClick={() => handleSelectedEvent(item)}/>
              <Button value="Delete Event" addClass="btn-sm btn-secondary" onClick={() => handleDeleteEvent(id)}/>
            </div>


          </div>
        </div>
      </div>
    </Card>
  );
}
