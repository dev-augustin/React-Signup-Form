import React from 'react';
//import Form from './Form';

export default function UserInfo(props) {
    return (
        <div>
            <p>{props.UserName}</p>
            {props.Password}
            {props.age}
            {props.gender}
            {props.occupation}
        </div>
    )
}
