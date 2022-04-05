import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 12},
        {id: 2, message: 'It\'s my first post', likeCount: 11},
        {id: 3, message: 'Blabla', likeCount: 18},
        {id: 4, message: 'Dada', likeCount: 1}
    ],
}

it('length of posts should be incremented', () => {
    //  1. test data
    let action = addPostActionCreator('it-kamasutra.com');
    //   2. action
    let newState = profileReducer(state, action);
//  3. expectation
    expect(newState.posts.length).toBe(5);
})

it('message of new post should be correct', () => {
    //  1. test data
    let action = addPostActionCreator('it-kamasutra.com');
    //   2. action
    let newState = profileReducer(state, action);
//  3. expectation
    expect(newState.posts[4].message).toBe('it-kamasutra.com');
})

it('after deleting length of message should be decrement', () => {
    //  1. test data
    let action = deletePost(1);
    //   2. action
    let newState = profileReducer(state, action);
//  3. expectation
    expect(newState.posts.length).toBe(3);
})

it('after deleting length of message should be decrement if id is incorrect', () => {
    //  1. test data
    let action = deletePost(1000);
    //   2. action
    let newState = profileReducer(state, action);
//  3. expectation
    expect(newState.posts.length).toBe(4);
})
