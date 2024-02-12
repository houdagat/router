import { useParams } from "react-router";
import { list } from "./usersData";
const Profile = () => {
  const { iduser } = useParams();
  console.log(iduser, "testttttttt");
  return (
    <div>
      <h1>{list.find((el) => el.id === Number(iduser)).name}</h1>
      <h3>{list.find((el) => el.id === Number(iduser)).address.city}</h3>
      <h5>{list.find((el) => el.id === Number(iduser)).email}</h5>
    </div>
  );
};
export default Profile;
