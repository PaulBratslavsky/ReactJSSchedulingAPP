import React from "react";
import Card from "../Card/Card";
import "./events-list-item.scss";

import { AiOutlineCalendar } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import EventAttendee from "../EventAttendee/EventAttendee";

export default function EventsListItem({ title }) {
  return (
    <Card>
      <div className='row'>
        <div className='col-md-4'>
          <img
            className='pb_event-image'
            src='https://source.unsplash.com/random'
            alt='Avatar'
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
                date
              </span>
              <span>
                <BiMap />
                location
              </span>
              <span>hosted by: Paul</span>

            </div>
              </div>
            </div>
            


            
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,tempore!</p>

            <ul className='pb_event-attendees'>
              <EventAttendee withName isHost/>
              <EventAttendee withName/>
              <EventAttendee withName/>
              <EventAttendee withName/>
              <EventAttendee withName/>
              <EventAttendee withName/>

            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}
