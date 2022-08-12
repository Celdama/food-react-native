import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Yd7NlI9AOPfmb8PRDXNFSJ8HhLBsxxApEYBI6c3erbzuAgSVXw60VbPsbzgV3cstYVHIDrjgXUB7UecfN4vHDBgFKvlmX8ZMH2TWFyepInsXKqktyMqTSGFRFtH0YnYx',
  },
});
