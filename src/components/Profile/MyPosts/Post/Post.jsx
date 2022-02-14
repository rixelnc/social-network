import React from 'react';
import s from './Post.module.css'

const Post = (props) => {

    return (
        <div className={s.item}>
            <img
                src='https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg'
                alt=''/>
            {props.message}

            <div>
                <span>like</span>{props.likeCount}
            </div>
        </div>
    )
}
export default Post;