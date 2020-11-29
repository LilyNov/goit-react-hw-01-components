import s from '../FriendList/FriendList.module.css';
import FriendsListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  console.log(friends);

  return (
    <ul>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <FriendsListItem
            status={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}

// FriendList.propTypes = {
//   friends: PropTypes.objectOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }),
//   ),
// };
