import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Section from './components/Section/Section';
import friends from './friends.json';
import user from './user.json';
import statisticalData from './statistical-data.json';
import transactions from './transactions.json';

export default function App() {
  return (
    <>
      <Section>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section>
        <Statistics title="Upload stats" stats={statisticalData} />;
        {/* <Statistics stats={statisticalData} />; */}
      </Section>

      <Section>
        <FriendList friends={friends} />
      </Section>

      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
}
