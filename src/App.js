import { Routes, Route, Navigate } from 'react-router-dom';
import LogInPage from "./LogIn";
import MenuView from './MenuView';
import ChefView from './ChefView';
import OdersToDeliver from './OrdersToDeliver';
import AdminView from './AdminView';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/menu" element={<MenuView />} />
        <Route path="/chefview" element={<ChefView />} />
        <Route path="/deliver" element={<OdersToDeliver />} />
        <Route path="/admin" element={<AdminView />} />
      </Routes>
    </>
  );
}

export default App;
