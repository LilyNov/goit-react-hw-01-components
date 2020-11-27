import PropTypes from 'prop-types';
import defaultImg from '../../defaultImg.png';

export default function FriendsListItem({ status, avatar, name }) {
  return (
    <>
      <span className="status">{status}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
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
