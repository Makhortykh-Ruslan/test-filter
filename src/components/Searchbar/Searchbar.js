import React from 'react';


const Searchbar = ({onHandelChange, onCheckedChange, isChecked, filterTextValue, onCheckedChangeFemale, isFemale}) =>{

    const handelChange = (event) =>{
        onHandelChange(event.target.value)
    }
    const checkedChange = (event) =>{
        onCheckedChange(event.target.checked)
    }
    const checkedChangeFemale = (event) =>{
        onCheckedChangeFemale(event.target.checked)
    }

    return(
        <div>
            <form>
                <input type="text" placeholder='Ваш ввод ...' value={filterTextValue} onChange={handelChange}/>
                <p>
                    <input type="checkbox"  checked={isChecked} onChange={checkedChange}/> {' '} Male
                </p>
                <p>
                    <input type="checkbox"  checked={isFemale} onChange={checkedChangeFemale}/> {' '} Female
                </p>
            </form>
        </div>
    )
}
export default Searchbar;