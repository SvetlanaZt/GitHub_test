import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../components/app/hooks';
import Users from '../components/Users/Users';
import { useLazyGetByNameQuery, useGetByNameQuery } from '../components/api/api';
import css from '../styles/Favorite.module.scss';
import { setRemoveFavourite } from '../components/features/gitHubSlice';
import { useAppDispatch } from '../components/app/hooks';

const Favorite: FC = () => {
  const [dataArray, setDataArray] = useState<any>();
  const favourites = useAppSelector((state) => state.gitHub.favourites);
    //  const [fetchByName, { data }] = useLazyGetByNameQuery();
  //  const dispatch = useAppDispatch();

  // useEffect(() => {
    // favourites?.map(i => console.log(i))
    // setDataArray(dfvdfvd)
    
  // }, [favourites, fetchByName])

  
  return (
    <div className={css.favoriteWrapper}>
      {favourites.map(item => <Users key={item} user={item} />)}
    </div>);
}
export default Favorite;