import initialFriends from './data';
import FormAddFriend from './FormAddFriend';
import FriendsList from './FriendsList';
import Button from './Button';

function App() {
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
    </div>
  );
}

export default App;
