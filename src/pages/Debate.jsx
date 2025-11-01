import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const participants = [
  { id: 2, name: '압둘', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e', country: '한국', speaking: true },
  // { id: 2, name: '이서연', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e', country: '한국', speaking: false },
  // { id: 3, name: '박지훈', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f', country: '한국', speaking: false },
];

const aiInterpretation = {
  currentSpeaker: '압둘',
  interpretation: '현재 발언자는 한국의 집단주의 문화에 대해 설명하고 있습니다. 한국에서는 개인의 의견보다는 그룹의 조화를 중시하는 문화가 있어서, 토론 시에도 서로의 의견을 존중하면서 점진적으로 합의를 도출하려는 경향이 있습니다.',
  culturalContext: '한국의 특이한 문화: 한국에서는 "우리"라는 개념이 매우 중요합니다. 개인보다는 집단의 이익을 우선시하는 경향이 있으며, 이는 한국의 유교적 전통과 밀접한 관련이 있습니다.'
};

const Debate = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleRequestSpeech = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };

  const handleLeaveDebate = () => {
    navigate('/');
  };

  return (
    <div className="h-full bg-background">
      <div className="container mx-auto p-8 h-full">
        <div className="flex h-full gap-8">
          {/* Main content */}
          <div className="flex-1 flex flex-col gap-8">
        {/* Main Topic */}
        <div>
          {/* <h2 className="text-2xl font-bold mb-4 text-text-primary">오늘의 주제</h2> */}
          <div className="bg-surface p-6 rounded-xl shadow-lg">
            <p className="text-text-secondary">
            <span className="font-bold text-primary text-xl border-b-2 border-primary mr-4">오늘의 주제</span> "인공지능은 인류에게 위협이 될 것인가, 아니면 새로운 기회를 제공할 것인가?"
            </p>
          </div>
        </div>

        {/* Video Conference Window */}
        <div className="flex-1 flex flex-col bg-surface rounded-xl shadow-lg p-6">
          {/* Video Grid */}
          <div className="flex-1 grid grid-cols-1 gap-4 mb-6">
            {participants.map((participant) => (
              <div
                key={participant.id}
                className={`relative bg-gray-800 rounded-xl overflow-hidden ${
                  participant.speaking ? 'ring-4 ring-primary ring-offset-2' : ''
                }`}
              >
                {/* Video Placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={participant.avatar}
                    alt={participant.name}
                    className="w-50 h-50 rounded-full object-cover"
                  />
                </div>
                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{participant.name}</span>
                    {participant.speaking && (
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                        발언 중
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Request Speech Button */}
          <div className="flex justify-center">
            <button
              onClick={handleRequestSpeech}
              className="btn btn-primary px-8 py-4 text-lg font-semibold"
            >
              의견 제시하기
            </button>
          </div>
        </div>
        </div>

        {/* Participant List with AI Interpretation */}
      <div className="w-80 bg-surface p-8 rounded-xl shadow-lg flex flex-col">
        {/* <h3 className="text-2xl font-bold mb-6 text-text-primary">참여자 목록</h3>
        <ul className="space-y-4 mb-8">
          {participants.map(p => (
            <li key={p.id} className={`flex items-center p-3 rounded-lg ${p.speaking ? 'bg-primary/10 ring-2 ring-primary' : ''}`}>
              <img src={p.avatar} alt={p.name} className="w-12 h-12 rounded-full mr-4" />
              <div className="flex-1">
                <span className={`font-medium ${p.speaking ? 'text-primary' : 'text-text-secondary'}`}>
                  {p.name}
                </span>
                {p.speaking && (
                  <span className="ml-2 text-xs text-primary font-semibold">● 발언 중</span>
                )}
              </div>
            </li>
          ))}
        </ul> */}

        {/* Real-time AI Interpretation */}
        <div className="">
          <h3 className="text-xl font-bold mb-4 text-text-primary">실시간 AI 해석</h3>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-200">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="text-sm font-semibold text-gray-600">현재 발언자:</span>
                <span className="ml-2 text-sm font-bold text-primary">{aiInterpretation.currentSpeaker}</span>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                {aiInterpretation.interpretation}
              </p>
            </div>
            <div className="pt-4 border-t border-blue-200">
              <p className="text-xs font-semibold text-gray-600 mb-2">문화적 맥락:</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {aiInterpretation.culturalContext}
              </p>
            </div>
          </div>
        </div>
              {/* Leave Debate Button */}
      <div className="container mx-auto px-8 pt-10">
        <div className="flex justify-center">
          <button
            onClick={handleLeaveDebate}
            className="btn bg-red-700 hover:bg-red-600 text-white px-8 py-3 text-lg font-semibold"
          >
            토론 나가기
          </button>
        </div>
      </div>
        </div>
      </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-2xl max-w-md w-full mx-4 animate-fade-in">
            <div className="text-center">
              <div className="mb-4">
                <svg className="mx-auto h-16 w-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">발언권을 요청했어요!</h3>
              <p className="text-gray-600">곧 발언 기회가 제공될 예정입니다.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Debate;