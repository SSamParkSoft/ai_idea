import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Debate from './pages/Debate';
import DebateMineResult from './pages/DebateMineResult';
import DebateMine from './pages/DebateMine';
import TodayQuestion from './pages/TodayQuestion';
import Chat from './pages/Chat';
import MyPage from './pages/MyPage';

function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`page-transition ${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setDisplayLocation(location);
          setTransitionStage('fadeIn');
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/debate" element={<Debate />} />
        <Route path="/debate_mine" element={<DebateMine />} />
        <Route path="/debate_mine_result" element={<DebateMineResult />} />
        <Route path="/today-question" element={<TodayQuestion />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col h-screen bg-gray-100 overflow-hidden">
      <Header />
      <main className="flex-1 min-h-0 overflow-hidden relative">
        <AnimatedRoutes />
      </main>
    </div>
  );
}

export default App;
