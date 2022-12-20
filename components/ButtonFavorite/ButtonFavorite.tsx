import { FC } from 'react';
import Link from "next/link";
import css from '../../styles/SearchUsers.module.scss';

const ButtonFavorite: FC = () => { 
    return (<>
        <button className={css.homeFavorite}>
      <Link href={`favorite`}>Favorite</Link></button></>)
}

export default ButtonFavorite;