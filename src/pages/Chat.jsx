import React, { useState } from 'react';

const friends = [
  { id: 1, name: '압둘', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e', lastMessage: '응, 당연하지! 언제 시간 돼?', online: true },
  { id: 2, name: '정예주', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f', lastMessage: '나중에 프로젝트 회의하자.', online: false },
  { id: 3, name: '압둘라', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704a', lastMessage: '사진 고마워!', online: true },
];

const initialMessages = {
  1: [
    { id: 1, user: '압둘', text: '종인아, 주말에 뭐해?' },
    { id: 2, user: 'me', text: '아직 특별한 계획은 없어. 왜?' },
    { id: 3, user: '압둘', text: '같이 영화 볼래? 새로 나온 거 재밌대.' },
    { id: 4, user: 'me', text: '좋아! 몇 시에 볼까?' },
    { id: 5, user: '압둘', text: '응, 당연하지! 언제 시간 돼?' },
  ],
  2: [
    { id: 1, user: '정예주', text: '나중에 프로젝트 회의하자.' },
  ],
  3: [
    { id: 1, user: '압둘라', text: '사진 고마워!' },
  ],
};

const Chat = () => {
  const [selectedFriendId, setSelectedFriendId] = useState(1);
  const selectedFriend = friends.find(f => f.id === selectedFriendId);
  const messages = initialMessages[selectedFriendId];

  return (
    <div className="h-full bg-background">
      <div className="container mx-auto p-8 h-full">
        <div className="flex h-full rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Friends List */}
        <div className="w-96 bg-surface border-r border-gray-200 flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-text-primary">대화 목록</h2>
          </div>
          <ul className="flex-1 overflow-y-auto">
            {friends.map(friend => (
              <li
                key={friend.id}
                className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 ${selectedFriendId === friend.id ? 'bg-gray-100' : ''} border-b border-gray-200 last:border-b-0`}
                onClick={() => setSelectedFriendId(friend.id)}
              >
                <div className="relative">
                  <img src={friend.avatar} alt={friend.name} className="w-12 h-12 rounded-full mr-4" />
                  {friend.online && <span className="absolute bottom-0 right-4 w-3 h-3 bg-green-500 border-2 border-surface rounded-full"></span>}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-text-primary">{friend.name}</h3>
                  <p className="text-sm text-text-secondary truncate">{friend.lastMessage}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-surface">
          {/* Header */}
          <div className="p-6 border-b border-gray-200 flex items-center">
            <h2 className="text-2xl font-bold text-text-primary">{selectedFriend.name}</h2>
            <span className={`w-3 h-3 rounded-full ml-3 ${selectedFriend.online ? 'bg-green-500' : 'bg-gray-400'}`}></span>
          </div>

          {/* Messages */}
          <div className="flex-1 p-8 space-y-6 overflow-y-auto">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-start gap-3 ${msg.user === 'me' ? 'justify-end' : ''}`}>
                {msg.user !== 'me' && <img src={selectedFriend.avatar} alt={selectedFriend.name} className="w-10 h-10 rounded-full" />}
                <div className={`p-3 rounded-lg max-w-md ${msg.user === 'me' ? 'bg-primary text-white' : 'bg-gray-100 text-text-primary'}`}>
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-6 border-t border-gray-200">
            <div className="flex items-center bg-gray-100 rounded-lg">
              <input
                type="text"
                placeholder="메시지를 입력하세요..."
                className="flex-1 p-4 bg-transparent focus:outline-none text-text-primary"
              />
              <button className="p-4 text-gray-500 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </button>
              <button className="btn btn-primary m-2">
                전송
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Chat;