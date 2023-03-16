import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from './FriendListLi';

export const FriendList = ({ array }) => {
  return (
    <ul className={css.friendList}>
      {array.map(item => (
        <li key={item.id} className={css.item}>
          <FriendListItem friend={item} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  array: PropTypes.array.isRequired,
};
