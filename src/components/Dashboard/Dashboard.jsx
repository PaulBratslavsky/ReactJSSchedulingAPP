import React from 'react'
import EventsList from '../EventsList/EventsList'
import Pannel from '../Pannel/Pannel'

export default function Dashboard() {
  return (
      <div class='row'>
          <div class='col-lg-8'>
            <EventsList />
          </div>
          <div class='col-lg-4'>
            <Pannel>
              Side Nav
            </Pannel>
          </div>
        </div>
  )
}
