import initialFriends from './data';
import Friends from './Friends';

const FriendsList = () => {
  const friends = initialFriends;

  return (
    <div>
      {friends.map((friend) => (
        <Friends friend={friend} key={friend.id} />
      ))}
    </div>
  );
};

export default FriendsList;
