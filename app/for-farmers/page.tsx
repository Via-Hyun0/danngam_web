import Section from "@/components/Section";
import Button from "@/components/Button";
import Link from "next/link";
import {
  Users,
  Shield,
  CheckCircle,
  Phone,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function ForFarmersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-background pt-16 pb-12">
        <div className="container-custom text-center">
          <Users className="w-16 h-16 text-primary-500 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            일감 등록할 때, <span className="gradient-text">간단하게</span> 시작하세요
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto mb-8">
            3분 만에 일감 등록, 메시징으로 안전하게 소통하세요
          </p>
          <Button size="xl" className="group">
            지금 시작하기
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Pain Points */}
      <Section
        background="white"
        title="일감 등록할 때 겪는 어려움"
        subtitle="단감이 이해하고 해결합니다"
        centered
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "일손 구하기 어려움",
              problem: "수확 시즌마다 인력 부족, 지역 게시판으로는 한계",
              solution: "위치 기반으로 근처 작업자들에게 자동 노출",
            },
            {
              title: "복잡한 절차 부담",
              problem: "복잡한 앱 사용이 어려움",
              solution: "3단계만으로 일감 등록 완료, 큰 글씨와 간단한 UI",
            },
            {
              title: "전화번호 노출 우려",
              problem: "번호 공개 시 스팸 전화 걱정",
              solution: "인앱 메시징으로 전화번호 노출 없이 안전하게 소통",
            },
            {
              title: "높은 중개 수수료",
              problem: "기존 플랫폼의 10-20% 수수료",
              solution: "100% 무료, 영원히",
            },
            {
              title: "믿을 수 있는 지원자 선택",
              problem: "어떤 지원자가 좋을지 모름",
              solution: "지원자 정보, 메시지 내용을 보고 채팅으로 소통 후 선택",
            },
          ].map((item, idx) => (
            <div key={idx} className="card card-hover">
              <h3 className="text-xl font-bold text-text mb-3">{item.title}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-secondary-500 font-bold mt-1">
                    문제:
                  </span>
                  <p className="text-text-light">{item.problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary-500 font-bold mt-1">해결:</span>
                  <p className="text-text">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section background="gray" title="단감을 선택하는 이유" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: "⚡",
              title: "빠른 등록",
              items: [
                "3분 이내 일감 등록 완료",
                "즉시 지원자들에게 노출",
                "수정도 언제든지 가능",
              ],
            },
            {
              icon: "🔒",
              title: "안전한 인앱 메시징",
              items: [
                "전화번호 노출 없이 채팅으로 소통",
                "1:1 메시징으로 안전한 대화",
                "개인정보보호법 완벽 준수",
              ],
            },
            {
              icon: "👥",
              title: "선택권은 일감 작성자께",
              items: [
                "지원자들의 메시지를 확인",
                "마음에 드는 지원자만 선택",
                "여러 지원자와 동시 채팅 가능",
              ],
            },
            {
              icon: "💰",
              title: "100% 무료",
              items: ["가입비 없음", "중개 수수료 없음", "숨겨진 비용 없음"],
            },
          ].map((benefit, idx) => (
            <div key={idx} className="card card-hover text-center">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-text mb-4">
                {benefit.title}
              </h3>
              <ul className="space-y-2 text-sm text-text-light text-left">
                {benefit.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Use Cases */}
      <Section
        background="white"
        title="단감 활용 시나리오"
        subtitle="이런 상황에 단감을 활용하세요"
        centered
      >
        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            {
              title: "사과 수확 시즌 🍎",
              description:
                "사과 수확 시즌에 긴급하게 5명의 인력이 필요했습니다. 단감에 일감을 등록한 후 하루 만에 12명의 지원자로부터 메시지를 받았고, 채팅으로 소통한 후 경험이 있고 가까운 거리에 사는 지원자 5명을 선택했습니다.",
            },
            {
              title: "포도밭 전지 작업 🍇",
              description:
                "포도밭 전지 작업에 2주간 도움이 필요했습니다. 단감에서 메시징으로 소통하니, 지원자들과 편리하게 조건을 협의할 수 있었고, 채팅 내에서 바로 계약서를 작성했습니다.",
            },
            {
              title: "딸기 하우스 정리 🍓",
              description:
                "딸기 하우스 정리에 단기 인력이 필요했습니다. 작은 일이라 부담스러웠는데, 단감은 수수료가 없어서 부담 없이 등록할 수 있었습니다.",
            },
          ].map((useCase, idx) => (
            <div key={idx} className="card card-hover">
              <h3 className="text-2xl font-bold text-text mb-3">
                {useCase.title}
              </h3>
              <p className="text-lg text-text-light leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Features for Farmers */}
      <Section background="gradient" title="일감 등록자를 위한 주요 기능" centered>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: Phone,
              title: "간단한 일감 등록",
              desc: "3단계 스텝으로 쉽게",
            },
            {
              icon: Users,
              title: "채팅으로 지원자와 대화",
              desc: "1:1 메시징으로 안전하게",
            },
            {
              icon: CheckCircle,
              title: "계약서 작성",
              desc: "채팅 내에서 바로 계약서 작성",
            },
            { icon: Shield, title: "푸시 알림", desc: "새 메시지 즉시 확인" },
            {
              icon: Sparkles,
              title: "일감 수정/삭제",
              desc: "언제든지 관리 가능",
            },
          ].map((feature, idx) => (
            <div key={idx} className="card card-hover text-center">
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text mb-2">
                {feature.title}
              </h3>
              <p className="text-text-light">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div className="card bg-gradient-to-br from-primary-500 to-primary-700 text-white text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
          <p className="text-xl mb-8 text-primary-50">
            일감 등록하기, 단감으로 간단하고 안전하게
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/how-it-works">
              <Button size="lg" variant="secondary">
                사용 방법 알아보기
              </Button>
            </Link>
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
            >
              앱 다운로드
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
