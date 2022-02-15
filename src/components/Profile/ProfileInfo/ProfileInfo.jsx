import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.forest}
                     src='https://cdn2.wanderlust.co.uk/media/1037/forest-web.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132605629110000000'
                     alt=''/>
                <div className={s.descriptionBlock}>
                    ava+description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;