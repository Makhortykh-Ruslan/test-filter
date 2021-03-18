import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid'
import axios from "axios";
import ListUsers from "../ListUsers/ListUsers";

const UsersRequest = ({textValue, boolMale, boolFemale}) =>{
    const [state, setState] = useState({
        allUsers: [],
    })
    useEffect(() =>{
        try {
            const response = axios.get('https://venbest-test.herokuapp.com/');
            response.then(response => setState({
                allUsers: [...response.data]
            }));
        }catch (error) {
            console.log(error)
        }

        }, []);
    const male = state.allUsers.filter(user => user.sex === 'm');
    const female = state.allUsers.filter(user => user.sex === 'f');
    const arrays = (boolFemale ? (boolMale ? state.allUsers : female) : (boolMale ? male : state.allUsers))

    const results = arrays.map(users => {
        const str = String(users.age);
        if(users.name.includes(textValue) || users.lastname.includes(textValue) || str.includes(textValue)){
            return(
                <ListUsers key={uuidv4()}  name={users.name} lastname={users.lastname} age={users.age} sex={users.sex}/>
            )
        }
    });

    return(
        <div>
            {results}

        </div>
    )

}

export default UsersRequest;