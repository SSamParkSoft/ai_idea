import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Placeholder data
const userName = "박종인";
const todayDebateCompleted = false; // Change this to true to see the "completed" state
// const todayQuestionAnswered = false; // Change this to true to see the "answered" state
const friends = [
  { id: 1, name: '압둘', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e' },
  { id: 2, name: '정예주', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f' },
  { id: 3, name: '압둘라', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704a' },
];
const notifications = [
    { id: 1, type: 'message', from: '압둘', text: '압둘, 주말에 뭐해?' },
    { id: 2, type: 'debate', text: '새로운 토론 주제가 등록되었습니다: "인공지능과 미래"' },
    { id: 3, type: 'question', text: '오늘의 질문에 답변할 시간입니다!' },
];

const Home = () => {
  const [timeLeft, setTimeLeft] = useState(31 * 60 + 52); // 31분 52초 = 1912초

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-background h-full overflow-y-auto">
      <div className="container mx-auto p-8">

      <div className="flex justify-between items-center">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-text-primary">안녕하세요, {userName}님!</h1>
          <p className="text-lg text-text-secondary mt-2">오늘도 즐거운 하루 보내세요.</p>
        </header>

        <div className="flex justify-end mb-8">
            <Link to="/debate_mine" className="btn btn-primary px-6 py-3 text-base font-semibold">
              토론 생성하기
            </Link>
          </div>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Today's Debate */}
          <div className="bg-surface p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-text-primary">초대받은 토론</h2>
              {todayDebateCompleted ? (
                <span className="text-sm font-semibold text-green-600">완료</span>
              ) : (
                <span className="text-sm font-semibold text-gray-500 font-mono">{formatTime(timeLeft)}</span>
              )}
            </div>
            <p className="text-lg text-text-secondary mb-4">"인공지능은 인류에게 위협이 될 것인가, 아니면 새로운 기회를 제공할 것인가?"</p>
            <div className= "flex justify-end gap-2">
              <div className="flex justify-end">
                <Link to="/debate" className="btn btn-primary">토론 참여하기</Link>
              </div>
              <div className="flex justify-end">
                <Link to="/" className="btn bg-[#797378] hover:bg-opacity-90">토론 거절하기</Link>
              </div>
            </div>
          </div>

          {/* Today's Question */}
          <div className="bg-surface p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-text-primary mb-4">오늘의 질문</h2>
            <p className="text-lg text-text-secondary mb-4">
              "가장 기억에 남는 축하나 기념일은 언제인가요? 어떤 특별한 경험을 하셨나요?"
            </p>
            <div className="flex items-center justify-end">
              {/* {todayQuestionAnswered ? (
                <p className="text-green-600 font-semibold">답변 완료</p>
              ) : (
                <p className="text-red-600 font-semibold">질문에 답변하지 않았습니다.</p>
              )} */}
              <Link to="/today-question" className="btn btn-accent">질문 보러가기</Link>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-8">
          {/* Friends */}
          <div className="bg-surface p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-text-primary">함께하는 친구들</h2>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="w-5 h-5 text-text-secondary hover:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <ul className="space-y-4">
              {friends.map(friend => (
                <li key={friend.id} className="flex items-center">
                  <img src={friend.avatar} alt={friend.name} className="w-10 h-10 rounded-full mr-3" />
                  <span className="font-medium text-text-secondary">{friend.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Notifications */}
          <div className="bg-surface p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-text-primary mb-4">알림 목록</h2>
            <ul className="space-y-3">
              {notifications.map(notif => (
                <li key={notif.id} className="text-sm text-text-secondary p-3 bg-gray-50 rounded-lg">
                  {notif.type === 'message' ? `💬 ${notif.from}님으로부터 새 메시지: "${notif.text}"` : `🔔 ${notif.text}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;