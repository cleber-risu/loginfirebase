import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";

const Home = () => {
  const { user, signOut } = useContext(AuthGoogleContext);

  const loggedUser = JSON.parse(user);

  return (
    <div>
      <h1>Home</h1>
      <p>{loggedUser.displayName}</p>
      <button onClick={() => signOut()}>Sair</button>
    </div>
  );
};

export default Home;
