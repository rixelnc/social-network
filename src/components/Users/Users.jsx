import React from "react";
import styles from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://i.pinimg.com/564x/e9/ff/ab/e9ffab0b910ac5f3e4898dc1c31038ed.jpg',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://klike.net/uploads/posts/2019-06/1560329641_2.jpg',
                    followed: false,
                    fullName: 'Andrew',
                    status: 'I am a boss too',
                    location: {city: 'Kiev', country: 'Ukraina'}
                },
            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}> Unfollow </button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}> Follow </button>}

                            </div>
                            </span>
                <span>
                            <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                            </span>
                            <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                            </span>
                            </span>
            </div>)
        }
    </div>
}

export default Users;
