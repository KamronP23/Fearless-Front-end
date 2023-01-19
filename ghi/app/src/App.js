import React from 'react';
import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import PresentationForm from './PresentationForm';
import AttendConferenceForm from './AttendConferenceForm';
import MainPage from './MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
     <BrowserRouter>
      <Nav />
     <div className="container">
     <Routes>
          <Route path="mainpage">
            <Route path="" element={<MainPage />} />
          </Route>
      </Routes>
      <Routes>
          <Route path="locations">
            <Route path="new" element={<LocationForm />} />
          </Route>
      </Routes>
      <Routes>
        <Route path="conferences">
          <Route path="new" element={<ConferenceForm />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="attendees">
          <Route path="" element={<AttendeesList attendees={props.attendees} />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="attendees">
          <Route path="new" element={<AttendConferenceForm />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="presentations">
          <Route path="new" element={<PresentationForm />} />
        </Route>
      </Routes>
      {/* <AttendeesList attendees={props.attendees} /> */}
      {/* <ConferenceForm /> */}
      {/* <AttendConferenceForm /> */}
     </div>
     </BrowserRouter>
  );
}

export default App;