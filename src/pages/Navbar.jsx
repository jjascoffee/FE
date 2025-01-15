import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { getUser } from '../apis/userapis/getuser';
import { logout } from '../apis/userapis/logout';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Fetch user information when the component mounts or updates
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser();
      setUser(res);

    };
    fetchUser();
  }, [location.pathname]); // 사용자 상태를 경로 변경에 따라 업데이트

  const handleLogout = async (event) => {
    event.preventDefault();
    await logout(navigate);
    setUser(null); // Clear user state after logout
  };

  return (
    <header className={styles.navbarContainer}>

      {/* Navigation Menu */}
      <nav className={styles.navbarMenu}>

        {user ? (
          <>
            <button
              className={styles.navbarButton}
              onClick={handleLogout}
              aria-label="로그아웃"
            >
              로그아웃
            </button>
          </>
        ) : (
          <NavLink to="/" className={styles.navbarButton}>
            로그인
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
