import { FC } from "react";
import { useRouter } from "next/router";
import { useGetByNameQuery } from "../../components/api/api";
import css from "../../styles/User.module.scss";
import Router from "next/router";
import { Spin } from "antd";

const User: FC = () => {
  const { query } = useRouter();
  const name = query.id;
  const { data, isLoading, isError } = useGetByNameQuery(name as string);
  return (
    <div className={css.user}>
      {isLoading && <Spin />}
      <div className={css.userCard}>
        <button
          className={css.userButton}
          type="button"
          onClick={() => Router.back()}
        >
          Go Back
        </button>
        <img className={css.userImg} src={data?.avatar_url} alt={data?.login} />
        <h2 className={css.userTitle}>{data?.name}</h2>
        <p className={css.userBio}>{data?.location}</p>
        <p className={css.userBio}>{data?.bio}</p>
        <ul className={css.userList}>
          <li className={css.userItem}>
            {data?.public_repos}{" "}
            <span className={css.userSpan}>Repository</span>
          </li>
          <li className={css.userItem}>
            {data?.followers} <span className={css.userSpan}>Followers</span>
          </li>
          <li className={css.userItem}>
            {data?.following} <span className={css.userSpan}>Following</span>
          </li>
        </ul>

        <a className={css.userLink} href={data?.html_url}>
          View Profile
        </a>
      </div>
    </div>
  );
};
export default User;
