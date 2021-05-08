import React from 'react'
import EventsList from '../EventsList/EventsList'
import Form from '../Form/Form'
import InputField from '../InputField/InputField'
import Pannel from '../Pannel/Pannel'

export default function Dashboard() {
  return (
      <div class='row'>
          <div class='col-lg-8'>
            <EventsList />
          </div>
          <div class='col-lg-4'>
            <Pannel>
              <Form>
                <InputField name="eventTitle" label="Event Title"/>
                <InputField name="eventCategory" label="Category"/>
                <InputField name="eventDescription" label="Description"/>
                <InputField name="eventCity" label="City"/>
                <InputField name="eventVenu" label="Venue"/>
              </Form>
            </Pannel>
          </div>
        </div>
  )
}
