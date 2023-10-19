import ProfileDashboard from "../components/ProfileMatchups";
import "../styles/profile.css";
import Auth from "../utils/auth";

const styles = {
  grid: {
    marginTop: "50px",
    padding: "5px",
    minHeight: "600px",
  },
  divider: {
    height: "200px",
  },
};

const Profile = () => {
  return (
    <div className="ui vertical segment">
      <h1 className="greeting">Hello {Auth.getProfile().data.username}</h1>
      <div style={styles.grid} className="ui middle aligned stackable grid container">
        <ProfileDashboard />
      </div>
    </div>
  );
};
export default Profile;
