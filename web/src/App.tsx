// React modules
import { useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Services
import { UserService } from './services/UserService';
import FeedForm from './components/feed-form/FeedForm';

// Components
import Header from './components/header/Header';

// Pages
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Password from './pages/Password';
import Home from './pages/Home';
import Setting from './pages/Setting';
import Profile from './pages/Profile';
import Lab from './pages/Lab';


// Routes로 묶는 이유 -> 경로 최적화
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (userId) dispatch<any>(UserService.retrieve(userId));
    // else {
    //   nav('/signin');
    // }
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/" element={<Home/>}></Route>
          
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/password" element={<Password/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/Setting" element={<Setting/>}></Route>
        <Route path="/:username" element={<Profile/>}></Route>
        <Route path="/lab" element={<Lab/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <FeedForm />
    </BrowserRouter>
  );
}

export default App;
