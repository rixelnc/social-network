import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/imges/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let User = (currentPage, totalUsersCount, pageSize, onPageChanged,users, ...props) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i < 11) pages.push(i);
        if (i > pagesCount - 11) pages.push(i);
    }

    return(
    <div>
            {/*<span>*/}
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                         className={styles.userPhoto}/>
                </NavLink>
            </div>
            <div>
                {u.followed
                    ? <button disabled={props.followingInProgress
                        .some(id => id === u.id)}
                              onClick={() => {
                                  props.unfollow(u.id);
                              }}> Unfollow </button>

                    : <button disabled={props.followingInProgress
                        .some(id => id === u.id)}
                              onClick={() => {
                                  props.follow(u.id);
                              }}> Follow </button>}
            </div>
            {/*</span>*/}
            {/*    <span>*/}
            {/*<span>*/}
            <div>{u.name}</div>
            <div>{u.status}</div>
            {/*</span>*/}
            {/*<span>*/}
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
            {/*</span>*/}
            {/*</span>*/}
        ))
        }
    </div>
}
)

export default User;