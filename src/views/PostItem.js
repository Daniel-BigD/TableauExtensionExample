import React from 'react';

const PostItem = ({ key, post, user }) => {
    return (
        <div key={key} style={{ paddingBottom: '1rem', backgroundColor: '#ccc' }}>
            <p style={{ fontSize: '2rem', textDecoration: 'underline', marginBottom: 10 }}>Title: {post.title}</p>
            <p>Post Body: </p>
            <p>{post.body}</p>
            <p>Posted By: {user.name}</p>
        </div>
    );
};

export default PostItem;
