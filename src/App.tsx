import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Search from './pages/Search';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import theme from './styles/theme';

function App() {
  return (
    <div className="App">
      <Reset />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/search" element={<Search />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
