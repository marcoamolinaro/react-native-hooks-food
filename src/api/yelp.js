import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 8pPm-NKOqu_AYKfEL4MxrbRvNJ2NpGY1SmKt77hjdaZe4zfIdDS6gyuqiDQ5AlZQS7BuRXG6qz6TDundXqmnHF1sJAzev6uBGOW7vM499T1dbXB7oQ2CqwVYMeERXnYx'
    }
});
