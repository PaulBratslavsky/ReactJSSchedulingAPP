import React from "react";
import EventsListItem from "../EventsListItem/EventsListItem";

export default function EventsList({ events, handleSelectedEvent, handleDeleteEvent }) {

  return (
    <div>
      {events.map((item) => (
        <EventsListItem key={item.id} item={item} handleSelectedEvent={handleSelectedEvent} handleDeleteEvent={handleDeleteEvent}/>
      ))}
    </div>
  );
}
