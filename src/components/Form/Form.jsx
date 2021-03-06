import React from "react";
import cuid from 'cuid'


import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import DateField from "../DateField/DateField";

const FORM_SCHIMA = {
  title: '',
  category: '',
  description: '',
  city: '',
  venue: '',
  date: '2021-05-13T01:14'

}

const mockData = {
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
}

export default function Form({ handleCloseForm, setEvents, selectedEvent }) {
  const [formData, setFormData] = React.useState(selectedEvent ?? FORM_SCHIMA)

  // React.useEffect(() => {
  //  setFormData(selectedEvent ?? FORM_SCHIMA)
  // },[selectedEvent])

  function resetShowForm() {
    handleCloseForm();
    setFormData(FORM_SCHIMA)
    console.log("reset and close form");
  }

  function handleChange(e) {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  function createEvent(data) {
    setEvents(prevState => [...prevState, data])
  }

  function updateEvent(updatedEvent) {
    setEvents(prevState => prevState.map(current => current.id === updatedEvent.id ? updatedEvent : current))
  }

  function handleSubmit(e) {
    e.preventDefault();

    const dataToSend = {...mockData, ...formData, id: formData.id || cuid() }    

    if (selectedEvent) {
      updateEvent(dataToSend)
      console.log(dataToSend, "THIS IS THE DATA TO SEND")
      handleCloseForm();
    } else {
      createEvent(dataToSend)
      console.log(dataToSend, "THIS IS THE DATA TO SEND")

      handleCloseForm();
    }

    setFormData(FORM_SCHIMA)
    alert('form submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedEvent ? "Edit Event" : "Create Event"}</h2>
      <InputField
        name='title'
        label='Event Title'
        onChange={handleChange}
        value={formData.title}
      />
      <InputField
        name='category'
        label='Category'
        onChange={handleChange}
        value={formData.category}
      />
      <InputField
        name='description'
        label='Description'
        onChange={handleChange}
        value={formData.description}
      />
      <InputField name='city' label='City' onChange={handleChange} value={formData.city}/>
      <InputField name='venue' label='Venue' onChange={handleChange} value={formData.venue}/>
      <DateField name='date' onChange={handleChange} value={formData.date}/>
      <div className='d-flex justify-content-between'>
        <Button type='submit' value='Submit' addClass='btn-info' />
        <Button
          value='x'
          addClass='btn-secondary'
          onClick={resetShowForm}
        />
      </div>
    </form>
  );
}
