import React, {useState} from 'react';
import Searchbar from "../Searchbar/Searchbar";
import UsersRequest from "../UsersRequest/UsersRequest";


const FilterableUsers = () =>{
    const [state, setState] = useState({
        filterTextValue: '',
        inSex: {
            male: false,
            female: false
        }
    });

    const HandelChange = (filterTextValue) =>{
        setState({
            ...state,
            filterTextValue: filterTextValue
        })
    };
    const isHandleChecked = (isChecked) =>{
        setState({
            ...state,
            inSex: {
                ...state.inSex,
                male: isChecked
            }
        })
    }
    const onCheckedChangeFemale = (isFemale) =>{
        setState({
            ...state,
            inSex: {
                ...state.inSex,
                female: isFemale
            }
        })
    }

    return(
        <div>
            <Searchbar
                filterTextValue={state.filterTextValue}
                isChecked={state.inSex.male}
                onHandelChange={HandelChange}
                onCheckedChange={isHandleChecked}
                onCheckedChangeFemale={onCheckedChangeFemale}
                isFemale={state.inSex.female}
            />
            <UsersRequest
                boolMale={state.inSex.male}
                boolFemale={state.inSex.female}
                textValue={state.filterTextValue} />
        </div>
    )
}

export default FilterableUsers;