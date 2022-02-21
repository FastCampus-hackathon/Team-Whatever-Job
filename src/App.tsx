import { Route, Routes } from 'react-router-dom';
import { Reset } from 'styled-reset';

import Home from './pages/Home';
import MyPage from './pages/MyPage';

function App() {
  return (
    <div className="App">
      <Reset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
