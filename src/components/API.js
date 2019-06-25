const API = () => {
    const API_URL = 'http://jsonplaceholder.typicode.com/posts';
    return {
        getPosts: () => fetch(API_URL).then(data => data.json())
    };
};

export default API();
