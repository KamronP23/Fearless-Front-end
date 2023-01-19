import React, {useEffect, useState} from 'react';

function PresentationForm() {

    const [conferences, setConferences] = useState([]);
    const [presenterName, setPresenterName] = useState('');
    const [presenterEmail, setPresenterEmail] = useState('');
    const [title, setTitle] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [conference, setConference] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [conId, setConId] = useState('');

    const fetchData = async () => {
        const url = 'http://localhost:8000/api/conferences/';
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setConferences(data.conferences);
        }
      }
    useEffect(() => {
        fetchData();
      }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.conference = conference;
        data.presenter_name = presenterName;
        data.presenter_email = presenterEmail;
        data.title = title;
        data.synopsis = synopsis;
        data.company_name = companyName;
        data.id = conId
        console.log(data)

        const conferenceId = conId;
        const url = `http://localhost:8000/api/conferences/${conferenceId}/presentations/`;
        const fetchOptions = {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
        };
        const presentationResponse = await fetch(url, fetchOptions);
        if (presentationResponse.ok) {
        setConference('');
        setPresenterName('');
        setPresenterEmail('');
        setSynopsis('');
        setTitle('');
        setCompanyName('');
        setConId('');
        }
    }

    const handleChangeConference = (event) => {
        const value = event.target.value;
        setConference(value);
      }


    const handleChangeName = (event) => {
        const value = event.target.value;
        setPresenterName(value);
      }

      const handlePresenterEmailChange = (event) => {
        const value = event.target.value;
        setPresenterEmail(value);
      }

    const handleChangeSynopsis = (event) => {
        const value = event.target.value;
        setSynopsis(value);
      }

    const handleChangeTitle = (event) => {
        const value = event.target.value;
        setTitle(value);
      }

    const handleChangeCompanyName = (event) => {
        const value = event.target.value;
        setCompanyName(value);
      }

    let spinnerClasses = 'd-flex justify-content-center mb-3';
    let dropdownClasses = 'form-select d-none';
    if (conferences.length > 0) {
        spinnerClasses = 'd-flex justify-content-center mb-3 d-none';
        dropdownClasses = 'form-select';
    }

    let messageClasses = 'alert alert-success d-none mb-0';
    let formClasses = '';


    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new presentation</h1>
            <form onSubmit={handleSubmit} id="create-location-form">
              <div className="form-floating mb-3">
                <input onChange={handleChangeName} placeholder="presenter_name" required type="text" name="presenter_name" id="presenter_name" className="form-control"value={presenterName}/>
                <label htmlFor="presenter_name">Presenter name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handlePresenterEmailChange} placeholder="Presenter email" required type="text" name="presenter_email" id="presenter_email" className="form-control" value={presenterEmail}/>
                <label htmlFor="presenter_email">Presenter email</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleChangeCompanyName} placeholder="Company name" required type="text" name="company_name" id="company_name" className="form-control" value={companyName}/>
                <label htmlFor="company_name">Company name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleChangeTitle} placeholder="Title" required type="text" name="title" id="title" className="form-control" value={title}/>
                <label htmlFor="title">Title</label>
              </div>
              <div className="mb-3">
                <label  htmlFor="synopsis" className="form-label" value={synopsis}>Synopsis</label>
                <textarea onChange={handleChangeSynopsis} className="form-control" id="synopsis" rows="3"></textarea>
              </div>
              <div className="mb-3">
              <select onChange={handleChangeConference} name="conference" id="conference" className={dropdownClasses} value={conference} required>
                    <option value="">Choose a conference</option>
                    {conferences.map(conference => {
                      return (
                        <option key={conference.id} value={conference.id}>{conference.name}</option>
                      )
                    })}
                  </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default PresentationForm;