// public_html/index.js
document.addEventListener("DOMContentLoaded", function () {
  const numFollowersSpan = document.getElementById('numFollowers');
  const latestFollowerUsernameSpan = document.getElementById('latestFollowerUsername');
  const numSubscribersSpan = document.getElementById('numSubscribers');
  const latestSubscriberUsernameSpan = document.getElementById('latestSubscriberUsername');

  function fetchData() {
    // Replace the URL with the endpoint you want to fetch data from
    axios.get('/your-api-endpoint-here')
      .then((response) => {
        const {
          numFollowers,
          latestFollowerUsername,
          numSubscribers,
          latestSubscriberUsername,
        } = response.data;

        // Set the content of the spans with the fetched data
        numFollowersSpan.textContent = numFollowers;
        latestFollowerUsernameSpan.textContent = latestFollowerUsername;
        numSubscribersSpan.textContent = numSubscribers;
        latestSubscriberUsernameSpan.textContent = latestSubscriberUsername;
      })
      .catch((error) => {
        console.error(error);
        // Optionally handle errors here
      });
  }

  // Fetch data initially and set an interval to refresh every 15 seconds (adjust as needed)
  fetchData();
  setInterval(fetchData, 15000);
});
