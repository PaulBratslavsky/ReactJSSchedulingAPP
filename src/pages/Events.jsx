import React from "react";
import EventsList from "../components/EventsList/EventsList";
import Form from "../components/Form/Form";
import Pannel from "../components/Pannel/Pannel";

export const sampleData = [
  {
    id: "1",
    title: "Trip to Empire State building",
    date: "2018-03-21",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "NY, USA",
    venue: "Empire State Building, 5th Avenue, New York, NY, USA",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-18",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg",
      },
    ],
  },
];

export default function Events({
  showForm,
  handleCloseForm,
  handleSelectedEvent,
  selectedEvent,
}) {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    setEvents(sampleData);
  }, []);

  function handleDeleteEvent(eventId) {
    setEvents(events.filter((item) => item.id !== eventId));
    handleCloseForm();
  }

  return (
    <div className='container my-3'>
      <div className='row'>
        <div className='col-lg-8'>
          <EventsList
            events={events}
            handleSelectedEvent={handleSelectedEvent}
            handleDeleteEvent={handleDeleteEvent}
          />
        </div>
        <div className='col-lg-4'>
          {showForm && (
            <Pannel>
              <Form
                handleCloseForm={handleCloseForm}
                setEvents={setEvents}
                selectedEvent={selectedEvent}
                key={selectedEvent ? selectedEvent.id : null}
              />
            </Pannel>
          )}
        </div>
      </div>
    </div>
  );
}
