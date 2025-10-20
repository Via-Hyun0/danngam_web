import Section from "@/components/Section";
import {
  Phone,
  MapPin,
  Shield,
  Clock,
  Bell,
  MessageCircle,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Sparkles,
  Users,
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: Phone,
      title: "카카오/Apple 로그인으로 간편 가입",
      description:
        "복잡한 절차 없이 카카오톡 또는 Apple ID로 1분 내에 서비스를 시작할 수 있습니다. 본인인증 불필요, 즉시 이용 가능.",
      color: "primary",
      badge: "필수",
    },
    {
      icon: Users,
      title: "3분 내 일감 등록",
      description:
        "작물, 기간, 급여, 위치 등 핵심 정보만으로 빠르게 일감을 등록할 수 있습니다. 큰 글씨와 버튼으로 사용 편리.",
      color: "primary",
      badge: "핵심",
    },
    {
      icon: MapPin,
      title: "위치 기반 실시간 일감 탐색",
      description:
        "내 현재 위치 근처의 농업 일감 정보를 지도와 리스트로 실시간 확인합니다. 작물별 아이콘, 거리 표시, 자동 클러스터링.",
      color: "secondary",
      badge: "핵심",
    },
    {
      icon: MessageCircle,
      title: "1:1 인앱 메시징",
      description:
        "전화번호 노출 없이 안전한 1:1 채팅으로 소통합니다. 실시간 메시지 전송, 읽음 확인, 메시지 히스토리 관리.",
      color: "primary",
      badge: "핵심",
    },
    {
      icon: CheckCircle,
      title: "선택형 답변 시스템",
      description:
        "타이핑이 어려운 사용자를 위한 빠른 응답 버튼을 제공합니다. 자주 사용하는 답변을 미리 설정하여 원터치로 응답.",
      color: "secondary",
      badge: "편의",
    },
    {
      icon: Shield,
      title: "채팅 내 계약서 작성",
      description:
        "대화 중에 바로 계약서를 작성하고 양방향 서명할 수 있습니다. 전화번호 노출 없이 안전하게 계약을 체결.",
      color: "primary",
      badge: "핵심",
    },
    {
      icon: Sparkles,
      title: "완전 무료 서비스",
      description:
        "중개 수수료 없이 모든 기능을 무료로 이용할 수 있어 일감 등록자와 참여자 모두에게 경제적 부담이 없습니다. 영원히 무료.",
      color: "secondary",
      badge: "혜택",
    },
    {
      icon: Users,
      title: "양방향 사용 가능",
      description:
        "역할 구분 없이 누구나 일감을 등록하고 참여할 수 있습니다. 농한기에는 일감을 찾고, 농번기에는 일감을 등록하는 등 상황에 따라 자유롭게 이용.",
      color: "primary",
      badge: "혁신",
    },
    {
      icon: AlertTriangle,
      title: "신고 기능 및 자동 제재",
      description:
        "부적절한 일감이나 사용자를 신고할 수 있으며, 일정 횟수 이상 신고 시 자동 제재 시스템이 작동하여 안전한 환경을 유지합니다.",
      color: "primary",
      badge: "안전",
    },
    {
      icon: TrendingUp,
      title: "메시지 현황 관리",
      description:
        "내가 보낸 메시지의 상태(대기중, 읽음, 만료됨)를 한눈에 확인하고 관리할 수 있습니다. 진행 상태 추적 및 알림.",
      color: "secondary",
      badge: "관리",
    },
    {
      icon: Bell,
      title: "실시간 푸시 알림",
      description:
        "새로운 메시지, 계약서 작성 요청 등 중요한 정보를 실시간 푸시 알림으로 받아볼 수 있습니다. 5초 이내 즉시 전송.",
      color: "primary",
      badge: "필수",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-background pt-16 pb-12">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            <span className="gradient-text">단감의 핵심 기능</span>
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            누구나 일감을 등록하고 참여할 수 있는 11가지 주요 기능을 소개합니다
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <Section background="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="card card-hover group">
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-14 h-14 bg-gradient-${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <span className={`badge badge-${feature.color}`}>
                  {feature.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-text mb-3">
                {feature.title}
              </h3>
              <p className="text-text-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Technical Excellence */}
      <Section
        background="gray"
        title="기술적 우수성"
        subtitle="빠르고 안정적인 서비스를 위한 기술적 특징"
        centered
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-text mb-3">빠른 성능</h3>
            <ul className="text-text-light space-y-2">
              <li>앱 초기 로딩 &lt; 3초</li>
              <li>쿼리 응답 &lt; 1초</li>
              <li>지도 렌더링 60 FPS</li>
            </ul>
          </div>

          <div className="card text-center">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-text mb-3">오프라인 지원</h3>
            <ul className="text-text-light space-y-2">
              <li>캐시된 데이터 조회 가능</li>
              <li>네트워크 복구 시 자동 동기화</li>
              <li>안정적인 사용 경험</li>
            </ul>
          </div>

          <div className="card text-center">
            <div className="text-5xl mb-4">🔐</div>
            <h3 className="text-2xl font-bold text-text mb-3">보안</h3>
            <ul className="text-text-light space-y-2">
              <li>Firebase 인증</li>
              <li>Firestore Security Rules</li>
              <li>Rate Limiting (하루 20건)</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Feature Categories */}
      <Section background="white" title="기능별 분류" centered>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="card">
            <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-4">
              일감 등록자를 위한 기능
            </h3>
            <ul className="space-y-3 text-text-light">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>3분 내 간단한 일감 등록</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>1:1 채팅으로 지원자와 소통</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>채팅 내에서 계약서 작성 및 서명</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>푸시 알림으로 새 메시지 즉시 확인</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="w-14 h-14 bg-gradient-secondary rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-4">
              일감 참여자를 위한 기능
            </h3>
            <ul className="space-y-3 text-text-light">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                <span>위치 기반 실시간 일감 탐색</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                <span>간편한 메시지 보내기 및 1:1 채팅</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                <span>내 메시지 현황 추적</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                <span>알림으로 새 메시지 즉시 확인</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="card bg-gradient-to-br from-primary-500 to-primary-700 text-white text-center max-w-3xl mx-auto">
          <Sparkles className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            모든 기능을 무료로 이용하세요
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            단감은 영원히 무료입니다. 중개 수수료 없이 모든 기능을 이용하세요.
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {[
              "가입비 없음",
              "수수료 없음",
              "숨겨진 비용 없음",
              "모든 기능 무료",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
