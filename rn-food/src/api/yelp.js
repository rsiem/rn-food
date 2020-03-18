import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer _jG9oQREWpLU0u10RpuBTdBxn1ZAmclAiWYg8gKxnqAbz1CpJNqCTng6ukA2TKvjgNZHgVlNDL1Z7kqqy92EtqLUI-9YYnNbUSrTz5nuzorQoxJgF00kJN2Zx8RoXnYx'
    }
});