import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer 6GdfAY6tNTnKrVUSAX4_GdKDfL6UWjSuyd94kkJERotDhDIPpQUmQhwy5BG1oIhGZuFpRfUGk6PPNwiYc-k7B4owdnkO8dnmL-JNv1J-xIriLV-ZyIMtvHHsj2IaXnYx'
    }
});
