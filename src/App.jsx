import { AuthGoogleProvider } from "./contexts/authGoogle";
import AppRoutes from "./routes/routes";

const App = () => {
  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
  );
};

export default App;
