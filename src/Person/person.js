import React from 'react';

const person = (props) => {
    // return <p> This is a person whose age is {Math.floor(Math.random() * 100)} </p>
    return (<div>
        <p> This is {props.name} whose age is {props.age} </p>
        <p>{props.children}</p>
        </div>
    );
}

export default person;