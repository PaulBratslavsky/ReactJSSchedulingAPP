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
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            tempore!
          </p>
          <div className="pb_event-date">
            <span>
              <AiOutlineCalendar />
              date
            </span>
            <span>
              <BiMap />
              location
            </span>
          </div>
            <ul className="pb_event-attendees">
              <EventAttendee />
              <EventAttendee />
              <EventAttendee />
              <EventAttendee />
              <EventAttendee />
            </ul>
        </div>
        </div>
      </div>
    </Card>
  );
}
