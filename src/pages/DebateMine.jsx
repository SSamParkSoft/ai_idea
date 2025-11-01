import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const availableFriends = [
  { id: 1, name: '압둘', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e' },
  { id: 2, name: '정예주', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f' },
  { id: 3, name: '압둘라', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704a' },
  { id: 4, name: '김민수', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704b' },
  { id: 5, name: '이영희', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704c' },
];

const aiGeneratedTopics = [
  '"인공지능은 인류에게 위협이 될 것인가, 아니면 새로운 기회를 제공할 것인가?"',
  '"원격 근무와 사무실 근무, 어느 것이 더 생산적인가?"',
];

const DebateMine = () => {
  const navigate = useNavigate();
  const [topic, setTopic] = useState('');
  const [isAiGenerated, setIsAiGenerated] = useState(false);
  const [isEditable, setIsEditable] = useState(true);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [showFriendList, setShowFriendList] = useState(false);
  const [topicIndex, setTopicIndex] = useState(0);

  const handleAiGenerate = () => {
    if (!isAiGenerated) {
      // 첫 번째 클릭: AI로 주제 자동 생성 (1번째 주제)
      setTopic(aiGeneratedTopics[0]);
      setTopicIndex(1); // 다음에 2번째 주제가 나오도록 인덱스 설정
      setIsAiGenerated(true);
      setIsEditable(false);
    } else if (!isEditable) {
      // "주제 변경하기" 버튼 클릭: 다음 AI 주제로 변경 (2번째, 3번째...)
      const nextIndex = topicIndex % aiGeneratedTopics.length;
      setTopic(aiGeneratedTopics[nextIndex]);
      setTopicIndex((prev) => (prev + 1) % aiGeneratedTopics.length);
    } else {
      // 수정 가능 상태에서 클릭: 수정 불가능하게 변경하고 다음 주제 생성
      const nextIndex = topicIndex % aiGeneratedTopics.length;
      setTopic(aiGeneratedTopics[nextIndex]);
      setTopicIndex((prev) => (prev + 1) % aiGeneratedTopics.length);
      setIsEditable(false);
    }
  };

  const handleAddFriend = (friend) => {
    if (!selectedFriends.find(f => f.id === friend.id)) {
      setSelectedFriends([...selectedFriends, friend]);
    }
  };

  const handleRemoveFriend = (friendId) => {
    setSelectedFriends(selectedFriends.filter(f => f.id !== friendId));
  };

  const handleCreate = () => {
    if (topic.trim() === '') {
      alert('토론 주제를 입력해주세요.');
      return;
    }
    // 토론 생성 로직 (나중에 구현)
    console.log('토론 생성:', { topic, selectedFriends });
    navigate('/');
  };

  return (
    <div className="h-full bg-background overflow-y-auto">
      <div className="container mx-auto p-8">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-2">토론 생성하기</h1>
          <p className="text-lg text-text-secondary">새로운 토론을 생성하고 친구들을 초대하세요.</p>
        </header>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* 토론 주제 작성 */}
          <div className="bg-surface p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-text-primary">토론 주제</h2>
              <button
                onClick={handleAiGenerate}
                className={`btn px-4 py-2 text-sm font-semibold ${
                  isAiGenerated && !isEditable
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {isAiGenerated && !isEditable ? '주제 변경하기' : 'AI 자동 생성'}
              </button>
            </div>
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              disabled={!isEditable}
              placeholder="토론 주제를 입력하거나 AI 자동 생성을 눌러주세요..."
              className={`w-full p-4 rounded-lg border-2 resize-none ${
                isEditable
                  ? 'border-gray-300 focus:border-primary focus:outline-none'
                  : 'border-yellow-300 bg-yellow-50'
              }`}
              rows={4}
            />
            {isAiGenerated && !isEditable && (
              <p className="text-sm text-yellow-600 mt-2 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                AI가 생성한 주제입니다. "주제 변경하기" 버튼을 눌러 수정할 수 있습니다.
              </p>
            )}
          </div>

          {/* 친구 초대 */}
          <div className="bg-surface p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-text-primary">친구 초대</h2>
              <button
                onClick={() => setShowFriendList(!showFriendList)}
                className="btn btn-primary px-4 py-2 text-sm font-semibold"
              >
                친구 추가하기
              </button>
            </div>

            {/* 선택된 친구 목록 */}
            {selectedFriends.length > 0 && (
              <div className="mb-4">
                <p className="text-sm text-text-secondary mb-2">초대된 친구 ({selectedFriends.length}명)</p>
                <div className="flex flex-wrap gap-2">
                  {selectedFriends.map(friend => (
                    <div
                      key={friend.id}
                      className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg"
                    >
                      <img src={friend.avatar} alt={friend.name} className="w-6 h-6 rounded-full" />
                      <span className="text-sm font-medium text-text-secondary">{friend.name}</span>
                      <button
                        onClick={() => handleRemoveFriend(friend.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 친구 목록 (드롭다운) */}
            {showFriendList && (
              <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
                <p className="text-sm font-semibold text-text-secondary mb-3">친구 선택</p>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {availableFriends
                    .filter(friend => !selectedFriends.find(sf => sf.id === friend.id))
                    .map(friend => (
                      <div
                        key={friend.id}
                        className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                        onClick={() => {
                          handleAddFriend(friend);
                          setShowFriendList(false);
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <img src={friend.avatar} alt={friend.name} className="w-10 h-10 rounded-full" />
                          <span className="font-medium text-text-secondary">{friend.name}</span>
                        </div>
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                    ))}
                </div>
                {availableFriends.filter(friend => !selectedFriends.find(sf => sf.id === friend.id)).length === 0 && (
                  <p className="text-sm text-text-secondary text-center py-4">모든 친구를 추가했습니다.</p>
                )}
              </div>
            )}
          </div>

          {/* 생성하기 버튼 */}
          <div className="flex justify-end gap-4">
            <button
              onClick={() => navigate('/')}
              className="btn bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 text-lg font-semibold"
            >
              취소
            </button>
            <button
              onClick={handleCreate}
              className="btn btn-primary px-8 py-3 text-lg font-semibold"
            >
              토론 생성하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebateMine;
