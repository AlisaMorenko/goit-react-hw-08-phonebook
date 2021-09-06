import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors';
import authOperations from '../../redux/Auth/auth-operations';

import styles from './userMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <div>
      <span className={styles.span}>{email}</span>
      <button
        className={styles.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </button>
    </div>
  );
}
