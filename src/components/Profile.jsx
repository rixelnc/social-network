import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
        <img className={s.forest}
             src='https://cdn2.wanderlust.co.uk/media/1037/forest-web.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132605629110000000'
             alt=''/>

        <div>ava+description</div>
        <div>My posts</div>
        <div>New post</div>
        <div className={s.posts}>
            <div className={s.item}>Post 1</div>
            <div className={s.item}>Post 2</div>


        </div>
    </div>

}
export default Profile;