function createCard(name, description, pictureUrl, eventStart, eventEnd, locationName) {
    return `
      <div class="shadow p-3 sm-5 bg-body-tertiary rounded">
      <div class="p-8">
      <div class="card">
        <img src="${pictureUrl}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${locationName}</h6>
          <p class="card-text">${description}</p>
        <div class="card-footer"><p class="card-text">${eventStart.toLocaleDateString('en-us', {year:"numeric", month:"numeric", day:"numeric"})} - ${eventEnd.toLocaleDateString('en-us', {year:"numeric", month:"numeric", day:"numeric"})}</p></div>
      </div>
      </div>
      </div>
      </div>
      </div>

    `;
  }
  window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/conferences/';

    try {
      const response = await fetch(url);

      if (!response.ok) {
        // Figure out what to do when the response is bad
        throw new Error(response.statusText());

      } else {
        const data = await response.json();

        for (let conference of data.conferences) {
          const detailUrl = `http://localhost:8000${conference.href}`;
          const detailResponse = await fetch(detailUrl);
          if (detailResponse.ok) {
            const details = await detailResponse.json();
            const title = details.conference.name;
            const description = details.conference.description;
            const pictureUrl = details.conference.location.picture_url;
            const starts = details.conference.starts;
            const ends = details.conference.ends
            const eventStart = new Date(starts)
            const eventEnd = new Date(ends)
            const locationName = details.conference.location.name
            const html = createCard(title, description, pictureUrl, eventStart, eventEnd, locationName);
            const column = document.querySelector('.col');
            column.innerHTML += html;
          }
        }

      }
    } catch (e) {
      console.error(e);
      console.log('error');
      // Figure out what to do if an error is raised
    }

  });