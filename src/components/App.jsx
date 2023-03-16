
import user from './profile/user.json';
import data from './statistics/data.json';
import friends from './friendList/friends.json';
import transactions from './transaction/transactions.json';

import { Profile } from './profile/User.jsx';
import { Statistics } from './statistics/Statistics.jsx';
import { FriendList } from './friendList/FriendList.jsx';
import { TransactionHistory } from './transaction/Transactions.jsx';

export const App = () => {
  return (
    <div>
    <Profile data={user}/>
    <Statistics title="Upload stats" array={data} />
    <FriendList array={friends} />
    <TransactionHistory items={transactions} />;
    </div>
  );
};
