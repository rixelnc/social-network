import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/imges/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>
                <div className={s.descriptionBlock}>
                    <img className={s.userPhoto} src={profile.photos.large || userPhoto}/>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                    <ProfileData profile={profile}/>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    )
}

const ProfileData = ({profile}) => {
    return <div>
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDeckription}
        </div>}
        <div>
            <b>About me</b>:{profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
            return (
                <Contact contactTitle={key} contactValue={profile.contacts[key]}/>
            )
        })}
        </div>
    </div>

}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b>:{contactValue}
    </div>
}

export default ProfileInfo;