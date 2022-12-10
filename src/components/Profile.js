import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Profile = ({login}) => {

    const history = useHistory();

    useEffect(()=>{
        if (!login) {
            history.push('/');
        }
    }, []);
    return (
        <h1>
            Profile page  
        </h1>
    );
};

export default Profile;