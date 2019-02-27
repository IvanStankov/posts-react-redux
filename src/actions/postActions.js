import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
    fetch("http://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }));
};

export const createPost = postData => dispatch => {
    fetch("http://jsonplaceholder.typicode.com/posts?_limit=2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(postData)
            })
            .then(res => res.json())
            .then(data => dispatch({
                type: NEW_POST,
                payload: data
            }));
};