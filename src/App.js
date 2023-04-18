import { Routes, Route, Navigate } from 'react-router-dom';
import LogInPage from "./LogIn";
import MenuView from './MenuView';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/menu" element={<MenuView />} />
      </Routes>
    </>
  );
}

export default App;
