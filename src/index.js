import React from 'react';
import ReactDOM from 'react-dom/client';
import user from './components/profile/user.json';
import data from './components/statistics/data.json';
import friends from './components/friendList/friends.json';
import transactions from './components/transaction/transactions.json';
import './index.css';
import { Profile } from './components/profile/User.jsx';
import { Statistics } from './components/statistics/Statistics.jsx';
import { FriendList } from './components/friendList/FriendList.jsx';
import { TransactionHistory } from './components/transaction/Transactions.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile data={user}/>
    <Statistics title="Upload stats" array={data} />
    <FriendList array={friends} />
    <TransactionHistory items={transactions} />;
  </React.StrictMode>
);
