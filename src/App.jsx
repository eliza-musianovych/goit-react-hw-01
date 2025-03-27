import Profile from "./components/profile/Profile";
import userData from "./userData.json";
import FriendList from "./components/friendsList/FriendsList";
import friends from "./friends.json";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import transactions from "./transactions.json";

export default function App() {
    return (
     <>
       <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
       />
       <FriendList friends={friends} />
       <TransactionHistory items={transactions} />
     </>
   );
  };
  