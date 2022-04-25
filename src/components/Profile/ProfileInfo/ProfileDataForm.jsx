import React from "react";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile}) => {
    return <form>
        <div>
            <button onClick={() => {
            }}>save
            </button>
        </div>
        <div>
            <b>Full name</b>: {createField('Full name', [], 'fullName', Input)}
        </div>
        <div>
            <b>Looking for job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDeckription}
        </div>
        }
        <div>
            <b>About me</b>:{profile.aboutMe}
        </div>
        {/*<div>*/}
        {/*    <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {*/}
        {/*    return <Contact contactTitle={key} contactValue={profile.contacts[key]}/>*/}
        {/*})}*/}
        {/*</div>*/}
    </form>
}
const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm;