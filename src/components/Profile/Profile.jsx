import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <img className={s.forest}
                 src='https://cdn2.wanderlust.co.uk/media/1037/forest-web.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132605629110000000'
                 alt=''/>

            <div>ava+description</div>
            <MyPosts/>
        </div>
    )
}

export default Profile;