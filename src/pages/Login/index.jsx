import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle";

const Login = () => {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);

  async function handleSigInGoogle() {
    await signInGoogle();
  }

  if (!signed) {
    return (
      <div>
        <button onClick={handleSigInGoogle}>Logar com o Google</button>
      </div>
    );
  } else {
    return <Navigate to="/home" />;
  }
};

export default Login;
