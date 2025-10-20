import Section from "@/components/Section";
import {
  Target,
  Users,
  Shield,
  Sparkles,
  Heart,
  TrendingUp,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-background pt-16 pb-12">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-soft">
            <Heart className="w-4 h-4 text-secondary-500" />
            <span className="text-sm font-medium text-text">
              농업 공동체를 위한 플랫폼
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            단감은 <span className="gradient-text">어떤 플랫폼</span>인가요?
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            농업의 미래를 위한 가장 간단하고 안전한 일감 매칭 서비스를
            제공합니다
          </p>
        </div>
      </section>

      {/* Mission */}
      <Section background="white" title="우리의 미션" centered>
        <div className="card max-w-4xl mx-auto">
          <Target className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <p className="text-xl text-text-light leading-relaxed text-center">
            단감은{" "}
            <span className="font-semibold text-text">
              농촌의 고질적인 일손 부족 문제
            </span>
            를 해결하고, 누구나{" "}
            <span className="font-semibold text-text">일감을 등록하고 참여</span>할 수
            있도록 돕는 메시징 기반 매칭 플랫폼입니다. 우리는 복잡한 절차와
            높은 수수료 없이, 전화번호 노출 없이 안전하게 소통할 수
            있는{" "}
            <span className="font-semibold text-text">
              가장 간단하고 안전한 방법
            </span>
            을 제공하여 농업 생태계의 지속 가능한 발전에 기여하고자 합니다.
          </p>
        </div>
      </Section>

      {/* Problems We Solve */}
      <Section background="gray" title="우리가 해결하는 문제" centered>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="card">
            <div className="w-14 h-14 bg-primary-500 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-4">일감 등록자의 인력난</h3>
            <ul className="space-y-3 text-text-light">
              <li className="flex items-start gap-3">
                <span className="text-primary-500 font-bold mt-1">•</span>
                <span>
                  적시에 필요한 인력을 구하기 어렵고, 기존 중개 방식은 비용
                  부담이 큼
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-500 font-bold mt-1">•</span>
                <span>전화번호 노출 우려와 스팸 전화로 인한 피로감</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-500 font-bold mt-1">•</span>
                <span>신뢰할 수 있는 지원자를 찾기 어려움</span>
              </li>
            </ul>
          </div>

          <div className="card">
            <div className="w-14 h-14 bg-secondary-500 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-4">
              일감 참여자의 일자리 불안정
            </h3>
            <ul className="space-y-3 text-text-light">
              <li className="flex items-start gap-3">
                <span className="text-secondary-500 font-bold mt-1">•</span>
                <span>
                  계절에 따라 일감을 찾아 이동해야 하는 참여자들은 안정적인
                  정보 확보에 어려움
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary-500 font-bold mt-1">•</span>
                <span>높은 중개 수수료로 실질 소득 감소</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary-500 font-bold mt-1">•</span>
                <span>먼 거리 이동으로 인한 시간과 비용 부담</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Our Solution */}
      <Section
        background="white"
        title="단감의 솔루션"
        subtitle="누구나 일감을 등록하고 참여할 수 있는 안전한 연결을 통해 이러한 문제들을 해결합니다"
        centered
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "⚡",
              title: "간단한 일감 등록",
              description:
                "누구나 3분 내에 일감을 등록하고, 위치 기반으로 실시간 일감 정보를 확인합니다",
            },
            {
              icon: "🔒",
              title: "안전한 인앱 메시징",
              description:
                "전화번호 노출 없이 1:1 채팅으로 안전하게 소통하고, 채팅 내에서 계약서를 작성할 수 있습니다",
            },
            {
              icon: "💝",
              title: "완전 무료 서비스",
              description:
                "중개 수수료 없이 모든 서비스를 무료로 제공하여 일감 등록자와 참여자 모두에게 경제적 부담을 덜어줍니다",
            },
          ].map((item, idx) => (
            <div key={idx} className="card card-hover text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-text mb-3">{item.title}</h3>
              <p className="text-text-light">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Core Values */}
      <Section background="gradient" title="우리의 핵심 가치" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Sparkles,
              title: "간단함",
              subtitle: "Simplicity",
              description:
                "누구나 쉽게 사용할 수 있도록 가장 직관적이고 간단한 사용자 경험을 제공합니다",
              color: "primary",
            },
            {
              icon: Shield,
              title: "안전",
              subtitle: "Safety",
              description:
                "전화번호 노출 없이 안전한 메시징과 신뢰할 수 있는 정보 교환을 최우선으로 합니다",
              color: "secondary",
            },
            {
              icon: Target,
              title: "투명성",
              subtitle: "Transparency",
              description:
                "모든 정보는 명확하게 공개되며, 숨겨진 수수료나 불이익이 없습니다",
              color: "primary",
            },
            {
              icon: Heart,
              title: "상생",
              subtitle: "Co-prosperity",
              description:
                "일감 등록자와 참여자 모두에게 이익이 되는 지속 가능한 생태계를 구축합니다",
              color: "secondary",
            },
          ].map((value, idx) => (
            <div key={idx} className="card card-hover">
              <div
                className={`w-14 h-14 ${value.color === "primary" ? "bg-primary-500" : "bg-secondary-500"} rounded-2xl flex items-center justify-center mb-4`}
              >
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text mb-1">
                {value.title}
              </h3>
              <p className="text-sm text-text-lighter mb-3">{value.subtitle}</p>
              <p className="text-text-light">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Vision */}
      <Section background="white">
        <div className="card bg-primary-500 text-white text-center max-w-4xl mx-auto">
          <TrendingUp className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">우리의 비전</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                phase: "Phase 1",
                title: "현재",
                description: "MVP 출시, 핵심 가치 검증",
              },
              {
                phase: "Phase 2",
                title: "단기",
                description: "사용자 피드백 기반 개선",
              },
              {
                phase: "Phase 3",
                title: "장기",
                description: "농업 공동체의 필수 플랫폼",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-sm text-white opacity-60 mb-2">
                  {item.phase}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-white opacity-80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
