import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={s.forest}
                     src='https://cdn2.wanderlust.co.uk/media/1037/forest-web.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132605629110000000'
                     alt=''/>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                    ava+description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;