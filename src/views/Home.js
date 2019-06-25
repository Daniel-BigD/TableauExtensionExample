import React, { useState, useEffect } from 'react';
import API from '../components/API';
import PostItem from './PostItem';

// Declare this so our linter knows that tableau is a global object

const Home = props => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        Promise.all([API.getPosts(), API.getUsers()])
            .then(([postsResponse, usersResponse]) => joinUserToPost(postsResponse, usersResponse))
            .then(data => setPosts(data))
            .catch(e => {
                console.error(e);
            });
    }, [posts]);

    return (
        <div>
            {posts.map(post => (
                <PostItem key={post.id} post={post} user={post.user} />
            ))}
        </div>
    );
};

function joinUserToPost(posts, users) {
    return posts.map(post => ({ ...post, user: users.find(user => user.id === post.userId) }));
}

export default Home;
