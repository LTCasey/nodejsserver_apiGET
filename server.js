const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public_html'));
app.use(cors());

// Define your API endpoint here
const apiEndpoint = 'https://your-api-endpoint-here';

app.get('/getData', async (req, res) => {
  try {
    const response = await axios.get(apiEndpoint);
    const { followers, subscribers } = response.data;

    // Extract the required data
    const dataToSend = {
      numFollowers: followers.num_followers,
      latestFollowerUsername: followers.latest_follower.username,
      numSubscribers: subscribers.num_subscribers,
      latestSubscriberUsername: subscribers.latest_subscriber.user,
    };

    res.json(dataToSend);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the data' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
