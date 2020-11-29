import PropTypes from 'prop-types';
import defaultImg from '../../defaultImg.png';
import s from '../FriendListItem/FriendListItem.module.css';

export default function FriendsListItem({ status, avatar, name }) {
  return (
    <>
      <span
        className={s.status}
        style={{ backgroundColor: status ? 'green' : 'red' }}
      >
        {status}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

FriendsListItem.defaultProps = {
  avatar: defaultImg,
};

FriendsListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
