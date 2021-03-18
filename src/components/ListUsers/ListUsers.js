import React from 'react';

const ListUsers = ({name, lastname, age, sex}) =>{
    return(
        <ul>
            <li>
                Имя:  {name}; {' '}
                Фамилия:  {lastname}; {' '}
                Возраст: {age}; {' '}
                Пол:  {sex === 'm' ? 'Мужской' : 'Женский'};
            </li>
        </ul>
    )
}

export default ListUsers;