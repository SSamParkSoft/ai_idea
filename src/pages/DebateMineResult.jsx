import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const debateTopic = '"원격 근무와 사무실 근무, 어느 것이 더 생산적인가?"';

const DebateMineResult = () => {
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
              <div className="bg-surface p-6 rounded-xl shadow-lg">
                <p className="text-text-secondary">
                  <span className="font-bold text-primary text-xl border-b-2 border-primary mr-4">토론 주제</span>
                  {debateTopic}
                </p>
              </div>
            </div>

            {/* Video Conference Window */}
            <div className="flex-1 flex flex-col bg-surface rounded-xl shadow-lg p-6">
              {/* Empty State */}
              <div className="flex-1 flex flex-col items-center justify-center mb-6">
                <div className="text-center">
                  <svg className="mx-auto h-24 w-24 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-text-primary mb-2">아직 아무도 참가하지 않았어요</h3>
                  <p className="text-lg text-text-secondary">친구들이 토론에 참가하기를 기다리는 중입니다.</p>
                </div>
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

          {/* Invited Friends */}
          <div className="w-80 bg-surface p-8 rounded-xl shadow-lg flex flex-col">
            <h3 className="text-xl font-bold mb-4 text-text-primary">초대된 친구</h3>
            <div className="">
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704e" alt="압둘" className="w-10 h-10 rounded-full mr-3" />
                <span className="font-medium text-text-secondary">압둘</span>
                <span className="ml-auto text-sm text-gray-500">대기 중</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704f" alt="정예주" className="w-10 h-10 rounded-full mr-3" />
                <span className="font-medium text-text-secondary">정예주</span>
                <span className="ml-auto text-sm text-gray-500">대기 중</span>
              </div>
              {/* Leave Debate Button */}
              <div className="container mx-auto px-8 pt-10">
                <div className="flex justify-center">
                  <button
                    onClick={handleLeaveDebate}
                    className="btn bg-[#797378] hover:bg-opacity-90 text-white px-8 py-3 text-lg font-semibold"
                  >
                    토론 나가기
                  </button>
                </div>
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

export default DebateMineResult;