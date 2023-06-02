const axiosButton = document.getElementById('axiosButton');
const fetchButton = document.getElementById('fetchButton');
const responseElement = document.getElementById('response');

// Axios POST request
axiosButton.addEventListener('click', async () => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'Axios Post',
      body: 'This is a post request using Axios',
      userId: 1
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_token_here'
      }
    });

    responseElement.innerText = JSON.stringify(response.data, null, 2);
  } catch (error) {
    responseElement.innerText = 'Error: ' + error.message;
  }
});

// Fetch POST request
fetchButton.addEventListener('click', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your_token_here'
      },
      body: JSON.stringify({
        title: 'Fetch Post',
        body: 'This is a post request using Fetch',
        userId: 1
      })
    });

    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }

    const data = await response.json();
    responseElement.innerText = JSON.stringify(data, null, 2);
  } catch (error) {
    responseElement.innerText = 'Error: ' + error.message;
  }
});
