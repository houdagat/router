import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
const UserCard = ({ user }) => {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <CardBody>
          <CardTitle tag="h5">{user.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {user.username}
          </CardSubtitle>
          <CardText>{user.email}</CardText>
          <Button style={{ height: "60px", backgroundColor: "blue" }}>
            <Link to={`/profile/${user.id}`}> Go to Profile </Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};
export default UserCard;
