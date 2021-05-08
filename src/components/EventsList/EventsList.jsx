import React from "react";
import EventsListItem from '../EventsListItem/EventsListItem'

const mockEvents = [
  { id: 1, title: "Event 1" },
  { id: 2, title: "Event 2" },
  { id: 3, title: "Event 3" },
  { id: 4, title: "Event 4" },
]

export default function EventsList() {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    setEvents(mockEvents)
  },[])

  return (
    <div>
      {
        events.map(item => <EventsListItem key={item.id} {...item} />)
      }
    </div>
  );
 
}

