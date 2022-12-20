import { useState, useEffect } from "react";
import Link from "next/link";
import { Pagination } from "antd";
import { setData } from "../components/features/gitHubSlice";
import { useGetByUsersNameQuery } from "../components/api/api";
import SearchUsers from "../components/SearchUsers/SearchUsers";
import ButtonFavorite from "../components/ButtonFavorite/ButtonFavorite";
import Users from "../components/Users/Users";
import { useAppDispatch, useAppSelector } from "../components/app/hooks";
import css from "../styles/Home.module.scss";
import { Spin } from "antd";
import { Alert } from "antd";

export default function Home() {
  const [page, setPage] = useState(1);

  const dispatch = useAppDispatch();

  const name = useAppSelector((state) => state.gitHub.usersName);
  const dataUsers = useAppSelector((state) => state.gitHub.data);
  const { data, isLoading, isError } = useGetByUsersNameQuery({ name, page });
  // { skip: searchUserName.length === 0 }
  const totalCount = data?.total_count;

  useEffect(() => {
    dispatch(setData(data?.items));
  }, [data, dispatch]);

  const onChangePagination = (e: number) => {
    setPage(e);
  };

  return (
    <>
      {isLoading && <Spin />}
      <SearchUsers />
      <ButtonFavorite />
      <ul className={css.wraperUsers}>
        {dataUsers?.map((user) => (
          <Users key={user.id} user={user.login} />
        ))}
      </ul>
      <footer>
        {totalCount && (
          <Pagination
            className={css.homePagination}
            onChange={onChangePagination}
            total={totalCount}
            showSizeChanger={false}
          />
        )}
      </footer>
    </>
  );
}
