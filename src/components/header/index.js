import React from 'react';
import Logo from '../../assets/logo.svg';
import styles from './header.module.scss';

const Header = (props) => {
  return (
    <header>
      <div className={styles.wrap}>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  )
}

export default Header;
