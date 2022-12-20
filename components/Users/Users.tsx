import { FC, useState, useEffect } from "react";
import { useGetByNameQuery } from "../../components/api/api";
import css from "../../styles/Users.module.scss";
import { setAddFavourite, setRemoveFavourite } from "../features/gitHubSlice";
import Link from "next/link";
import { MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Favorite from "../../pages/favorite";
import { Spin } from "antd";
import { Alert } from "antd";

const Users: FC<{ user: string }> = ({ user }) => {
  const [showFav, setShowFav] = useState(false);

  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useGetByNameQuery(user);
  const favourites = useAppSelector((state) => state.gitHub.favourites);

  const clickFavoriteButton = (e: string) => {
    console.log(e);
    setShowFav(!showFav);
    if (showFav) {
      dispatch(setRemoveFavourite(e));
    } else {
      dispatch(setAddFavourite(e));
    }
  };

  useEffect(() => {
    favourites.map((item) => {
      item === data?.login && setShowFav(!showFav);
    });
  }, [data?.login]);

  return (
    <>
      {isLoading && <Spin />}
      <li className={css.usersItem}>
        <Link
          className={css.usersLink}
          key={data?.login}
          href={`/users/${data?.login}`}
        >
          <img
            className={css.usersImg}
            src={data?.avatar_url}
            alt={data?.login}
          />
          <div className={css.usersWraperName}>
            <h2 className={css.usersTitle}>{data?.login}</h2>
            <p className={css.usersLocation}>{data?.location}</p>
          </div>
          <div className={css.usersWraperStatistics}>
            <p className={css.usersFollowers}>
              {data?.followers} <span className={css.usersSpan}>followers</span>
            </p>
            <p className={css.usersFollowers}>
              {data?.following} <span className={css.usersSpan}>following</span>
            </p>
          </div>
        </Link>
        {data && (
          <svg
            onClick={() => clickFavoriteButton(data.login)}
            className={
              showFav ? css.usersFavouriteTrue : css.usersFavouriteFalse
            }
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>heart</title>
            <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
          </svg>
        )}
        {/* <button className={css.usersFavourite} type='button' onClick={() => dispatch(setAddFavourite(data?.login))}> favor</button>
            <button className={css.usersFavourite} type='button' onClick={()=>dispatch(setRemoveFavourite(data?.login))}> Remove</button> */}
      </li>
    </>
  );
};
export default Users;
