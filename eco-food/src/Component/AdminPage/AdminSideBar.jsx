import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const AdminSideBar = () => {
  const [show, setShow] = useState(false);

  return (
    <DIV>
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className='nav-logo-name'>Homepage</span>
            </Link>

            <div className='nav-list'>
              <Link to='/dashboard' className='nav-link active'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Dashboard</span>
              </Link>
              <Link to='/hotel' className='nav-link'>
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className='nav-link-name'>Hotel</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <i className='fas fa-image nav-link-icon'></i>
                <span className='nav-link-name'>Gallery</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <i className='fas fa-dollar-sign nav-link-icon'></i>
                <span className='nav-link-name'>Transaction</span>
              </Link>
            </div>
          </div>

          <Link to='/logout' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>

      <h1>Content</h1>
    </main>
    </DIV>
  );
};

// export default Sidebar;


const DIV = styled.div`


:root {
  /* 3rem: 3rem;
  68px: 68px; */

  /* red: #f10086; */
  /* #f582a7: #f582a7; */
  /* #ffddee: #ffddee; */
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

main {
  position: relative;
  margin: var(3rem) 0 0 0;
  padding: 0 1rem;
  font-size: 1rem;
  font-family: 'Nunito Sans', sans-serif;
  transition: 0.5s;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  height: var(3rem);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(#ffddee);
  padding: 0 1rem;
  transition: 0.5s;
}

.header-toggle {
  font-size: 1.25rem;
  cursor: pointer;
  color: var(red);
}

.sidebar {
  position: fixed;
  top: 0;
  left: -30%;
  height: 100vh;
  width: var(68px);
  background-color: var(red);
  padding-top: 1rem;
  transition: 0.5s;
}

.nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  height: 100%;
}

.nav-logo,
.nav-link {
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 2rem;
  padding: 0.5rem 0 0.5rem 1.5rem;
}

.nav-logo {
  margin-bottom: 2rem;
}

.nav-logo-icon {
  font-size: 1.25rem;
  color: var(#ffddee);
  cursor: pointer;
}

.nav-logo-name {
  font-weight: 700;
  color: var(#ffddee);
}

.nav-link {
  position: relative;
  color: var(#f582a7);
  transition: 0.5s;
  margin-bottom: 1.5rem;
}

.nav-link:hover {
  color: var(#ffddee);
  background-color: rgba(0, 0, 0, 0.1);
}

.active {
  color: var(#ffddee);
  background-color: rgba(0, 0, 0, 0.1);
}

.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 38px;
  width: 3px;
  background-color: var(#ffddee);
  transition: 0.5s;
}

.show {
  left: 0;
}

.space-toggle {
  padding-left: calc(var(68px) + 1rem);
}

@media screen and (min-width: 768px) {
  main {
    margin: calc(var(3rem) + 1rem) 0 0 0;
    padding: 0 1rem 0 calc(var(68px) + 2rem);
  }

  .header {
    height: calc(var(3rem) + 1rem);
    padding-left: calc(var(68px) + 2rem);
  }

  .sidebar {
    left: 0;
    padding: 1rem 0 0 0;
  }

  .show {
    width: calc(var(3rem) + 156px);
  }

  .space-toggle {
    padding-left: calc(var(68px) + 188px);
  }
}


`