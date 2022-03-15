import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    let newPostElements = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <AddNewPostFormReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormReduxForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)


export default MyPosts;