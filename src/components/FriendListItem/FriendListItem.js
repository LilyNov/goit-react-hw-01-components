import PropTypes from 'prop-types';
import defaultImg from '../../defaultImg.png';

export default function FriendsListItem({ status, avatar, name }) {
  return (
    <li className="item">
      <span className="status">{status}</span>
      <img
        className="avatar"
        src={avatar ?? defaultImg}
        alt={name}
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
}

FriendsListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
