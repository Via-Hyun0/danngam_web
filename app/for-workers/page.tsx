import Section from "@/components/Section";
import Button from "@/components/Button";
import {
  MapPin,
  Phone,
  Bell,
  DollarSign,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export const metadata = {
  title: "작업자를 위한 단감",
  description: "작업자님의 일자리 고민을 단감이 해결합니다",
};

export default function ForWorkers() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" className="pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            작업자님, 근처 일자리를 쉽게 찾으세요
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            지도에서 한눈에 확인, 관심 표시만 하면 농부님께서 연락드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">App Store에서 다운로드</Button>
            <Button size="lg" variant="secondary">
              Google Play에서 다운로드
            </Button>
          </div>
        </div>
      </Section>

      {/* Pain Points We Solve */}
      <Section background="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          작업자님의 고민, 단감이 해결합니다
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">1. 일거리 정보 부족</h3>
                <p className="text-gray-600 mb-2">
                  <strong>문제:</strong> 어디서 일자리를 찾아야 할지 모름
                </p>
                <p className="text-secondary font-semibold">
                  <strong>해결:</strong> 실시간으로 업데이트되는 작업 정보
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">2. 먼 거리 이동</h3>
                <p className="text-gray-600 mb-2">
                  <strong>문제:</strong> 먼 곳까지 가야 해서 시간과 비용 낭비
                </p>
                <p className="text-secondary font-semibold">
                  <strong>해결:</strong> 지도에서 가까운 작업부터 표시, 거리순
                  정렬
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">3. 농부 연락처 모름</h3>
                <p className="text-gray-600 mb-2">
                  <strong>문제:</strong> 일거리를 봐도 어떻게 연락해야 할지 모름
                </p>
                <p className="text-secondary font-semibold">
                  <strong>해결:</strong> 관심 표시만 하면 농부가 내 정보 확인 후
                  연락
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">4. 불안정한 수입</h3>
                <p className="text-gray-600 mb-2">
                  <strong>문제:</strong> 지속적인 일거리 확보가 어려움
                </p>
                <p className="text-secondary font-semibold">
                  <strong>해결:</strong> 여러 작업에 동시 지원, 다양한 선택지
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">5. 불필요한 연락</h3>
                <p className="text-gray-600 mb-2">
                  <strong>문제:</strong> 통화 어려운 시간에 전화 옴
                </p>
                <p className="text-secondary font-semibold">
                  <strong>해결:</strong> 내 통화 가능 시간 사전 공유
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section background="white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          단감을 선택하는 이유
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3">🗺️ 위치 기반 실시간 정보</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• 지도에서 근처 작업을 한눈에</li>
              <li>• 거리순으로 가까운 작업부터</li>
              <li>• 작물별 필터링</li>
            </ul>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3">📱 간편한 관심 표시</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• 버튼 하나로 관심 표시</li>
              <li>• 내 번호와 가능 시간 전달</li>
              <li>• 농부의 수락 대기</li>
            </ul>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3">🔔 즉시 알림</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• 농부가 수락하면 푸시 알림</li>
              <li>• 농부 전화번호 즉시 확인</li>
              <li>• 놓치지 않고 기회 잡기</li>
            </ul>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3">💰 완전 무료</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• 가입비 없음</li>
              <li>• 중개 수수료 없음</li>
              <li>• 모든 기능 무료</li>
            </ul>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-3">⏰ 효율적인 시간 관리</h3>
            <ul className="text-gray-600 space-y-1">
              <li>• 통화 가능 시간 미리 공유</li>
              <li>• 농부 가능 시간도 확인 가능</li>
              <li>• 불필요한 연락 방지</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Use Cases */}
      <Section background="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          이런 상황에 단감을 활용하세요
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-secondary">
              집 근처 지속적 일거리
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              &quot;집에서 10km 이내의 일자리만 찾습니다. 단감 지도에서 근처
              작업을 확인하고, 관심 표시를 보냈습니다. 이제 단골 농가 3곳에서
              계절마다 연락을 받습니다.&quot;
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-secondary">
              수확 시즌 집중 수입
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              &quot;수확 시즌에 집중적으로 일하고 싶었습니다. 단감에서 여러
              농가에 동시에 관심 표시를 보냈고, 한 달 일정을 꽉 채울 수
              있었습니다.&quot;
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-secondary">
              틈새 시간 활용
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              &quot;평일 오후만 일할 수 있는 상황입니다. 통화 가능 시간을 명확히
              설정하니, 조건에 맞는 농부님들이 연락을 주셨습니다.&quot;
            </p>
          </div>
        </div>
      </Section>

      {/* Features for Workers */}
      <Section background="white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          주요 기능
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl">
            <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="font-bold text-lg">지도 기반 탐색</h3>
              <p className="text-gray-600">시각적으로 작업 위치 확인</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl">
            <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="font-bold text-lg">리스트 뷰</h3>
              <p className="text-gray-600">거리/급여 비교가 쉬운 목록</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl">
            <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="font-bold text-lg">필터링</h3>
              <p className="text-gray-600">작물, 거리, 최소 급여로 검색</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl">
            <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              4
            </div>
            <div>
              <h3 className="font-bold text-lg">연락 요청 현황</h3>
              <p className="text-gray-600">내가 보낸 요청 상태 추적</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl">
            <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
              5
            </div>
            <div>
              <h3 className="font-bold text-lg">알림 센터</h3>
              <p className="text-gray-600">수락된 농부 번호 언제든지 확인</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          실제 사용자 후기
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-secondary">
            <p className="text-lg text-gray-700 mb-4 italic">
              &quot;지도에서 한눈에 보이니까 정말 편해요. 집에서 가까운 일만
              골라서 할 수 있습니다.&quot;
            </p>
            <p className="font-semibold text-secondary">
              - 이일손님, 경기 이천
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-secondary">
            <p className="text-lg text-gray-700 mb-4 italic">
              &quot;여러 농가에 동시에 관심 표시를 보낼 수 있어서 좋아요. 일정을
              빈틈없이 채울 수 있습니다.&quot;
            </p>
            <p className="font-semibold text-secondary">
              - 박일손님, 전남 나주
            </p>
          </div>
        </div>
      </Section>

      {/* Safety Tips */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <AlertTriangle className="w-10 h-10 text-orange-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              안전하게 사용하는 팁
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 bg-green-50 p-6 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                농부와 통화 시 작업 조건 명확히 확인
              </p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-6 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">첫 만남은 공개된 장소에서</p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-6 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">의심스러운 작업은 신고 기능 이용</p>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-6 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-gray-700">개인 금융정보 절대 공유하지 않기</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient" className="text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl mb-8 opacity-90">
            근처 일자리, 단감에서 쉽게 찾으세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-secondary hover:bg-gray-100"
            >
              App Store에서 다운로드
            </Button>
            <Button
              size="lg"
              className="bg-white text-secondary hover:bg-gray-100"
            >
              Google Play에서 다운로드
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
