import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Nadiia Doe</h1>
      <h2>user</h2>
      <form>
        <div>
          <label htmlFor="name"></label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="birthdate"></label>
          <input type="date" />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="phone"></label>
          <input type="phone" />
        </div>
        <div>
          <label htmlFor="skype"></label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
