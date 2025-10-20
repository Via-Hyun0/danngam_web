import Section from "@/components/Section";
import Button from "@/components/Button";
import AppScreenshot from "@/components/AppScreenshot";
import Link from "next/link";
import {
  Users,
  MapPin,
  Phone,
  CheckCircle,
  Clock,
  MessageCircle,
  Bell,
} from "lucide-react";

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-background pt-16 pb-12">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-6">
            단감, <span className="gradient-text">이렇게 작동합니다</span>
          </h1>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            누구나 일감을 등록하고 참여할 수 있는 간단하고 안전한 과정을 소개합니다
          </p>
        </div>
      </section>

      {/* For Farmers */}
      <Section
        background="white"
        title="일감 등록자 가이드: 인력 구하기"
        subtitle="3단계로 끝나는 간단한 프로세스"
        centered
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              step: "1",
              icon: Phone,
              title: "일감 등록",
              description:
                "필요한 작물, 기간, 급여, 위치 등 간단한 정보만으로 3분 안에 일감을 등록합니다",
              details: [
                "작물 선택 (12가지 중 선택)",
                "일감 내용 및 기간 입력",
                "급여 정보 설정",
                "지도에서 위치 설정",
                "카카오/Apple 로그인으로 간편 가입",
              ],
              color: "primary",
            },
            {
              step: "2",
              icon: Bell,
              title: "메시지 확인",
              description:
                "관심 있는 지원자들이 보낸 메시지를 확인하고, 지원자 정보를 검토합니다",
              details: [
                "푸시 알림으로 즉시 통지",
                "1:1 채팅방에서 메시지 확인",
                "지원자 프로필 정보 확인",
                "지원자가 남긴 메시지 읽기",
              ],
              color: "primary",
            },
            {
              step: "3",
              icon: CheckCircle,
              title: "채팅으로 소통 및 계약서 작성",
              description:
                "마음에 드는 지원자와 1:1 채팅으로 소통하고, 채팅 내에서 계약서를 작성하여 양방향 서명합니다",
              details: [
                "원하는 지원자와 채팅 시작",
                "인앱 메시징으로 안전한 소통",
                "채팅 내에서 계약서 작성",
                "양방향 서명으로 계약 확정",
              ],
              color: "primary",
            },
          ].map((step, idx) => (
            <div key={idx} className="card card-hover">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div
                    className={`w-20 h-20 bg-gradient-${step.color} rounded-2xl flex items-center justify-center shadow-${step.color} mb-4 md:mb-0`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`badge badge-${step.color} text-lg font-bold`}
                    >
                      Step {step.step}
                    </span>
                    <h3 className="text-2xl font-bold text-text">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-text-light mb-4">
                    {step.description}
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {step.details.map((detail, detailIdx) => (
                      <li
                        key={detailIdx}
                        className="flex items-start gap-2 text-text-light"
                      >
                        <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 일감 등록자 앱 스크린샷 */}
        <div className="mt-12 flex justify-center gap-8">
          <AppScreenshot
            src="/images/ref_intro.PNG"
            alt="로그인 화면"
            width={180}
            height={360}
            caption="Step 1: 간편 로그인"
          />
          <AppScreenshot
            src="/images/ref_easy_join.PNG"
            alt="일감 등록 화면"
            width={180}
            height={360}
            caption="Step 2: 일감 등록"
          />
        </div>

        <div className="text-center mt-12 p-8 bg-primary-50 rounded-2xl max-w-3xl mx-auto">
          <h4 className="text-xl font-bold text-text mb-4">💡 유용한 팁</h4>
          <ul className="text-left space-y-2 text-text-light">
            <li>• 여러 지원자와 동시에 채팅 가능합니다</li>
            <li>• 일감 정보는 언제든지 수정 가능합니다</li>
            <li>• 일감이 마감되면 삭제하세요</li>
          </ul>
        </div>
      </Section>

      {/* For Workers */}
      <Section
        background="gray"
        title="일감 참여자 가이드: 일감 찾기"
        subtitle="지도에서 쉽게 찾고, 메시징으로 안전하게 소통하기"
        centered
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              step: "1",
              icon: MapPin,
              title: "내 주변 일감 탐색",
              description:
                "현재 위치를 기반으로 가까운 농가의 일감 정보를 지도 또는 리스트로 실시간 확인합니다",
              details: [
                "지도 뷰: 시각적으로 위치 확인",
                "리스트 뷰: 거리순 정렬",
                "작물별 필터링",
                "급여 조건 검색",
              ],
              color: "secondary",
            },
            {
              step: "2",
              icon: MessageCircle,
              title: "메시지 보내기",
              description:
                "관심 있는 일감에 메시지를 보내서 일감 작성자와 1:1 채팅을 시작합니다",
              details: [
                "일감 상세 정보 확인",
                "메시지 보내기 버튼 클릭",
                "간단한 인사말 작성",
                "1:1 채팅방 자동 생성",
              ],
              color: "secondary",
            },
            {
              step: "3",
              icon: Clock,
              title: "채팅으로 소통 및 계약서 서명",
              description:
                "일감 작성자와 1:1 채팅으로 소통하고, 계약서가 작성되면 서명하여 계약을 확정합니다",
              details: [
                "푸시 알림으로 새 메시지 통지",
                "채팅방에서 실시간 대화",
                "계약서 작성 시 서명 요청",
                "양방향 서명으로 계약 확정",
              ],
              color: "secondary",
            },
          ].map((step, idx) => (
            <div key={idx} className="card card-hover">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div
                    className={`w-20 h-20 bg-gradient-${step.color} rounded-2xl flex items-center justify-center shadow-${step.color} mb-4 md:mb-0`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`badge badge-${step.color} text-lg font-bold`}
                    >
                      Step {step.step}
                    </span>
                    <h3 className="text-2xl font-bold text-text">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg text-text-light mb-4">
                    {step.description}
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {step.details.map((detail, detailIdx) => (
                      <li
                        key={detailIdx}
                        className="flex items-start gap-2 text-text-light"
                      >
                        <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 일감 참여자 앱 스크린샷 */}
        <div className="mt-12 flex justify-center gap-8">
          <AppScreenshot
            src="/images/ref_work_map.PNG"
            alt="지도 화면"
            width={180}
            height={360}
            caption="Step 1: 지도에서 일감 탐색"
          />
          <AppScreenshot
            src="/images/ref_work_map_sel.PNG"
            alt="지도에서 일감 선택 화면"
            width={180}
            height={360}
            caption="Step 2: 일감 상세보기"
          />
        </div>

        <div className="text-center mt-12 p-8 bg-secondary-50 rounded-2xl max-w-3xl mx-auto">
          <h4 className="text-xl font-bold text-text mb-4">💡 유용한 팁</h4>
          <ul className="text-left space-y-2 text-text-light">
            <li>• 하루 최대 20개 일감에 메시지 보내기 가능합니다</li>
            <li>• 여러 일감에 동시에 메시지 보내기 가능합니다</li>
            <li>• 메시지는 7일 후 자동 만료됩니다</li>
          </ul>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section background="white" title="단감의 핵심 가치" centered>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card card-hover text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-text mb-3">
              수수료 없는 투명한 거래
            </h3>
            <p className="text-text-light">
              단감은 중개 수수료를 받지 않아 일감 등록자와 참여자 모두에게 이익이
              됩니다
            </p>
          </div>
          <div className="card card-hover text-center">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-text mb-3">개인정보 보호</h3>
            <p className="text-text-light">
              전화번호 노출 없이 인앱 메시징으로 안전하게 소통하여 개인정보를 보호합니다
            </p>
          </div>
        </div>
        
        {/* 프로필 관리 앱 스크린샷 */}
        <div className="mt-12 flex justify-center">
          <AppScreenshot
            src="/images/ref_profile.PNG"
            alt="프로필 화면"
            width={200}
            height={400}
            caption="Step 3: 프로필 관리 및 설정"
          />
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="card bg-gradient-to-br from-primary-500 to-primary-700 text-white text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
          <p className="text-xl mb-8 text-primary-50">
            카카오/Apple 로그인으로 간편하게 가입하여 단감의 모든 기능을 무료로 이용하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-farmers">
              <Button size="lg" variant="secondary">
                일감 등록하기
              </Button>
            </Link>
            <Link href="/for-workers">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                일감 찾기
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
