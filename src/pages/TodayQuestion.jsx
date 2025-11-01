import React, { useState } from 'react';

const classmatesAnswers = [
  { id: 1, name: '압둘', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e', answer: '저는 제 고향의 전통 축제가 가장 기억에 남아요. 모두가 함께 춤추고 노래하는 게 정말 즐거웠어요.' },
  { id: 2, name: '정예주', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f', answer: '가족들과 함께 보낸 명절이요. 맛있는 음식을 많이 먹을 수 있어서 좋았어요.' },
  { id: 3, name: '압둘라', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704a', answer: '새해 첫날, 친구들과 함께 해돋이를 보러 갔던 경험이 가장 특별했어요.' },
  { id: 4, name: '제시', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704b', answer: '라마단 기간이 끝났을 때, 가족들과 다 함께 모여 축하 파티를 했던 것이 기억에 남습니다.' },
];

const TodayQuestion = () => {
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleAnswerSubmit = () => {
    // In a real app, you would submit the answer here.
    setHasAnswered(true);
  };

  return (
    <div className="h-full bg-background p-8">
      {!hasAnswered ? (
        // View 1: Answering the question
        <div className="max-w-6xl mx-auto mt-8 text-center">
          <div className="bg-surface p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-text-primary mb-4">오늘의 질문</h2>
            <p className="text-xl text-text-secondary mb-8">
              "가장 기억에 남는 축하나 기념일은 언제인가요? 어떤 특별한 경험을 하셨나요?"
            </p>
            <textarea
              className="w-full h-80 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="여러분의 소중한 경험을 공유해주세요..."
            ></textarea>
            <button
              onClick={handleAnswerSubmit}
              className="btn btn-primary mt-6 w-full"
            >
              답변하기
            </button>
          </div>
        </div>
      ) : (
        // View 2: Viewing classmates' answers
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">반 친구들의 답변</h2>
          <div className="space-y-6">
            {classmatesAnswers.map(item => (
              <div key={item.id} className="bg-surface p-6 rounded-xl shadow-lg flex items-start gap-4">
                <img src={item.avatar} alt={item.name} className="w-14 h-14 rounded-full" />
                <div className="flex-1">
                  <h3 className="font-bold text-primary">{item.name}</h3>
                  <p className="text-text-secondary mt-2">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodayQuestion;