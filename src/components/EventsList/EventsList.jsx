import React from "react";
import EventsListItem from "../EventsListItem/EventsListItem";

export default function EventsList({ events, setSelectedEvent }) {

  return (
    <div>
      {events.map((item) => (
        <EventsListItem key={item.id} {...item} setSelectedEvent={setSelectedEvent}/>
      ))}
    </div>
  );
}
