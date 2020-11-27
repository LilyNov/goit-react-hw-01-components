import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import friends from './friends.json';
import user from './user.json';
import statisticalData from './statistical-data.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics title="Upload stats" stats={statisticalData} />; */}
      <Statistics stats={statisticalData} />;
      <FriendList friends={friends} />
    </div>
  );
}
