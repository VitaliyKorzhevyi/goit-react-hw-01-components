import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span className={isOnline ? css.online : css.offline}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="Avatar" />
      <p className={css.name}>{name}</p>
    </>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
