import './App.scss';

import AppMain from '../AppMain';
import { AuthContext } from '../../context';
import { useGuestSession } from '../../hooks/useGuestSession';
import { useGenres } from '../../hooks/useGenres';

const App = () => {
  const guestSession = useGuestSession();
  const genres = useGenres();
  return (
    <AuthContext.Provider value={{ guestSession, genres }}>
      <AppMain />
    </AuthContext.Provider>
  );
};
export default App;
