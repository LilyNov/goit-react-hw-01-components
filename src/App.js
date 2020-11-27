import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';

export default function App() {
  return <FriendList friends={friends} />;
}
