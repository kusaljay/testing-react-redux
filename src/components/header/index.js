import React from 'react';
import Logo from '../../assets/logo.svg';
import styles from './header.module.scss';

const Header = (props) => {
  return (
    <header data-test="header-component">
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <img data-test="logo-img" src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  )
}

export default Header;
