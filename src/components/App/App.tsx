import './App.scss';

import AppMain from '../AppMain';
import { AuthContext } from '../../context';
import { useGuestSession } from '../../hooks/useGuestSession';

const App = () => {
  const guestSession = useGuestSession();
  return (
    <AuthContext.Provider value={{ guestSession }}>
      <AppMain />
    </AuthContext.Provider>
  );
};
export default App;
