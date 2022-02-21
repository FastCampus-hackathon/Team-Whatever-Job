import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import MyPage from './pages/MyPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
