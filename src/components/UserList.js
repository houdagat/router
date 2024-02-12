import { list } from "./usersData";
import UserCard from "./UserCard";
const UserList = () => {
  return (
    <div>
      <h1>List of users</h1>
      <container>
        <row>
          {list.map((user, i) => (
            <UserCard key={i} user={user} />
          ))}
        </row>
      </container>
    </div>
  );
};
export default UserList;
