const API = () => {
    const API_URL = 'http://jsonplaceholder.typicode.com';
    return {
        getPosts: () => fetch(`${API_URL}/posts`).then(data => data.json()),
        getUsers: () => fetch(`${API_URL}/users`).then(data => data.json())
    };
};

export default API();
