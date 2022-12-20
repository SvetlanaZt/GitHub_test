import { FC } from 'react';
import Image from "next/image";
import img from '../../public/github.png';
import css from '../../styles/Header.module.scss';

export const Header: FC = () => {
    return (<header className={css.header}>
        <Image className={css.imgHeader} src={img}
      alt="GitHub"
      width={50}
      height={50}
            priority={true}></Image>
        <h1 className={css.title}>GitHub</h1>
    </header>)
}
export default Header;