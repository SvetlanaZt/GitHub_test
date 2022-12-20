import { FC } from 'react';
import { useDispatch } from "react-redux";
import { setUsersName } from '../features/gitHubSlice';
import { useState, ChangeEvent, FormEvent } from "react";
import css from '../../styles/SearchUsers.module.scss';
import { useAppDispatch } from '../app/hooks';


const SearchUsers: FC = () => {
    const [name, setName] = useState('');
    
    const dispatch = useAppDispatch();

   const onChange = (e: ChangeEvent<HTMLInputElement>)=> {
   setName(e.currentTarget.value.trim())
}
    const onSuubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setUsersName(name))
  };

    return ( <div className={css.searchWraper}>
      <h1 className={css.searchTitle}>Search Users</h1>
      <form className={css.searchForm} onSubmit={onSuubmit}>
        <input className={css.searchInput}
          type="text"
          name="name"
          onChange={onChange}
          placeholder="Enter name"
          required
        />
        <button className={css.searchButton} type="submit">Search</button>
      </form>
    </div>)
}
export default SearchUsers;