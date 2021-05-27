import s from './Profile.module.css';
import JSONDATA  from '../MOCK_DATA.json';
import React from 'react';
import { useState } from 'react';

const Profile = (props) => {
    const [searchTem, setSearchTem] = useState ('')

    return <div className={s.item}>
       <input type='text' placeholder='search..' 
       onChange={event => {setSearchTem(event.target.value)}}/>

       {JSONDATA.filter((val) => {
            if (searchTem == "") {
                return val
            } else if (val.brand.toLocaleLowerCase().includes(searchTem.toLocaleLowerCase())) {
                return val
            } else if (val.model.toLocaleLowerCase().includes(searchTem.toLocaleLowerCase())) {
                return val
            } else if (val.year.toLocaleLowerCase().includes(searchTem.toLocaleLowerCase())) {
                return val
            } else if (val.year.toLocaleLowerCase().includes(searchTem.toLocaleLowerCase())) {
                return val
            } else if (val.fuel.toLocaleLowerCase().includes(searchTem.toLocaleLowerCase())) {
                return val
            } else if (val.bodyType.toLocaleLowerCase().includes(searchTem.toLocaleLowerCase())) {
                return val
            } else if (val.price.toLocaleLowerCase().includes(searchTem.toLocaleLowerCase())) {
                return val
            }
       }).map((val, key) => {
           return <div key={key}>
               {val.brand},
               {val.model},
               {val.year},
               {val.fuel},
               {val.bodyType},
               {val.price}
           </div>
       })}
    </div>
}

export default Profile;