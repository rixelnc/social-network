import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/imges/user.png";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                {/*<img className={s.forest}*/}
                {/*     src='https://cdn2.wanderlust.co.uk/media/1037/forest-web.jpg?anchor=center&mode=crop&width=1200&height=0&rnd=132605629110000000'*/}
                {/*     alt=''/>*/}
                <div className={s.descriptionBlock}>
                    <img className={s.userPhoto} src={props.profile.photos.large || userPhoto}/>
                    <ProfileStatus status={'Hello'}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;