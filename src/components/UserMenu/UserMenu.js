import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors';
import authOperations from '../../redux/Auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);
  //   const avatar = defaultAvatar;

  return (
    <div>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <span>{email}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
