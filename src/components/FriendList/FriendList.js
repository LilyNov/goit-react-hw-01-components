import FriendsListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  console.log(friends);

  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
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
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }),
//   ),
// };
