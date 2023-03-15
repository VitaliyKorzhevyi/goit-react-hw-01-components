import PropTypes from "prop-types";
import css from './FriendList.module.css';

export const FriendList = ({array}) => {
  return (
    <ul className={css.friendList}>
      {array.map(({id, avatar, name, isOnline}) => (
        <li key={id} className={css.item}>
          <span className={isOnline ? css.online : css.offline}>{isOnline}</span>
          <img className={css.avatar} src={avatar} alt="Avatar" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
    array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
