import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Post = (props) => {

    const {id} = useParams();

    console.log(props);
    const query = new URLSearchParams(useLocation().search);

    return (
        <>
            <h2>Post id via match prop = {props.match.params.id}</h2>
            <h2>Post id via useParams hook = {id}</h2>
            <h2>First name is <mark>{query.get('fname')}</mark></h2>
            <h2>Last name is <mark>{query.get('lname')}</mark></h2>
        </>
    );
};

export default Post;