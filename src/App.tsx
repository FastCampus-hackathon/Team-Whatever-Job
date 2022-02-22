import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Compare from './pages/Compare';
import Home from './pages/Home';
import Memo from './pages/Memo';
import MyPage from './pages/MyPage';
import Search from './pages/Search';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import theme from './styles/theme';

function App() {
  const [token, setToken] = useState<string | null>(null);
  const [selectedCardIds, setSelectedCardIds] = useState<number[]>([]);

  useEffect(() => {
    // TODO: useSelector 등으로 리팩토링
    if (localStorage.getItem('authToken') !== null) {
      setToken(localStorage.getItem('authToken'));
    }
  }, []);

  return (
    <div className="App">
      <Reset />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home token={token} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/search" element={<Search token={token} />} />
          <Route
            path="/mypage"
            element={<MyPage
              selectedCardIds={selectedCardIds}
              setSelectedCardIds={setSelectedCardIds}
            />}
          />
          <Route path="/memo/*" element={<Memo />} />
          <Route
            path="/compare"
            element={<Compare
              selectedCardIds={selectedCardIds}
              setSelectedCardIds={setSelectedCardIds}
            />}
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
