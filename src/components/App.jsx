import { Profile } from 'components/Profile/Profile';

// eslint-disable-next-line
import { FriendList } from 'components/FriendList/FriendList';
// eslint-disable-next-line
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
// eslint-disable-next-line
import { Statistics } from 'components/Statistics/Statistics';
// eslint-disable-next-line
import { TransactionHistore } from 'components/TransactionHistory/TransactionHstory';

import user from '../data/user.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
