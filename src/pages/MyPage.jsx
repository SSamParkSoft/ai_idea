import React from 'react';

const userInfo = {
  name: '나타샤',
  avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  country: '한국',
  email: 'natasha@example.com',
  joinDate: '2024년 1월',
};

const stats = {
  debatesParticipated: 12,
  questionsAnswered: 28,
  friendsCount: 8,
  messagesSent: 156,
};

const recentActivities = [
  { id: 1, type: 'debate', title: '인공지능과 미래', date: '2024-03-15', status: '참여 완료' },
  { id: 2, type: 'question', title: '가장 기억에 남는 축하나 기념일은?', date: '2024-03-14', status: '답변 완료' },
  { id: 3, type: 'debate', title: '환경 보호와 경제 발전', date: '2024-03-10', status: '참여 완료' },
  { id: 4, type: 'question', title: '가장 좋아하는 계절은?', date: '2024-03-08', status: '답변 완료' },
];

const MyPage = () => {
  return (
    <div className="h-full bg-background overflow-y-auto">
      <div className="container mx-auto p-8">
        {/* Profile Header */}
        <div className="bg-surface p-8 rounded-xl shadow-lg mb-8">
          <div className="flex items-center gap-6">
            <img
              src={userInfo.avatar}
              alt={userInfo.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-primary"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-text-primary mb-2">{userInfo.name}</h1>
              <p className="text-lg text-text-secondary mb-1">
                <span className="inline-flex items-center gap-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {userInfo.country}
                </span>
              </p>
              <p className="text-sm text-text-secondary mb-1">{userInfo.email}</p>
              <p className="text-sm text-gray-500">가입일: {userInfo.joinDate}</p>
            </div>
            <button className="btn btn-primary px-6 py-3">
              프로필 편집
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-text-primary">{stats.debatesParticipated}</p>
                    <p className="text-sm text-text-secondary">참여한 토론</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-text-primary">{stats.questionsAnswered}</p>
                    <p className="text-sm text-text-secondary">답변한 질문</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-text-primary">{stats.friendsCount}</p>
                    <p className="text-sm text-text-secondary">친구 수</p>
                  </div>
                </div>
              </div>

              <div className="bg-surface p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-text-primary">{stats.messagesSent}</p>
                    <p className="text-sm text-text-secondary">보낸 메시지</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-surface p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-text-primary mb-6">최근 활동</h2>
              <div className="space-y-4">
                {recentActivities.map(activity => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activity.type === 'debate' ? 'bg-blue-100' : 'bg-green-100'
                      }`}>
                        {activity.type === 'debate' ? (
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary">{activity.title}</p>
                        <p className="text-sm text-text-secondary">{activity.date}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      activity.status === '참여 완료' || activity.status === '답변 완료'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Settings */}
            <div className="bg-surface p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold text-text-primary mb-4">설정</h2>
              <ul className="space-y-3">
                <li>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-100 flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-text-secondary">프로필 설정</span>
                  </button>
                </li>
                <li>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-100 flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="text-text-secondary">알림 설정</span>
                  </button>
                </li>
                <li>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-100 flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-text-secondary">보안 설정</span>
                  </button>
                </li>
                <li>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-100 flex items-center gap-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    <span className="text-text-secondary">언어 설정</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Achievement */}
            <div className="bg-surface p-6 rounded-xl shadow-lg">
              <h2 className="text-xl font-bold text-text-primary mb-4">업적</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">첫 토론</p>
                    <p className="text-xs text-text-secondary">첫 번째 토론에 참여했습니다</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg opacity-60">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-500">10회 토론</p>
                    <p className="text-xs text-gray-400">10번의 토론에 참여하세요</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;