import Section from "@/components/Section";
import {
  Shield,
  Lock,
  FileText,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";

export const metadata = {
  title: "안전 및 개인정보보호 - 단감",
  description: "안전과 개인정보보호가 최우선입니다",
};

export default function Safety() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" className="pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <Shield className="w-20 h-20 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            안전과 개인정보보호가 최우선입니다
          </h1>
          <p className="text-xl text-gray-600">
            전화번호 노출 없는 안전한 메시징, 법적 준수, 투명한 운영
          </p>
        </div>
      </Section>

      {/* Privacy First */}
      <Section background="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          개인정보 보호 원칙
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* 1. Minimal Info Collection */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">
                  1. 최소한의 정보 수집
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-2 text-green-700">
                      수집하는 정보
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>
                          <strong>필수:</strong> 카카오/Apple 계정 정보
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>
                          <strong>선택:</strong> 닉네임, 활동 지역
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-red-700">
                      수집하지 않는 정보
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li className="flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span>전화번호 (완전 제거)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span>주민등록번호</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span>주소</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span>은행 계좌</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span>신용카드 정보</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Consent-based */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">
                  2. 전화번호 노출 없는 안전한 메시징
                </h3>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
                  <p className="font-bold text-primary text-lg mb-2">
                    핵심 원칙
                  </p>
                  <p className="text-gray-700">
                    전화번호를 아예 사용하지 않음 - 인앱 메시징으로만 소통
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold mb-3">일감 참여자의 메시지</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        메시지 보내기 시:
                        <br />
                        <span className="font-semibold">
                          &quot;전화번호 노출 없이 1:1 채팅으로 안전하게 소통합니다&quot;
                        </span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold mb-3">일감 등록자의 응답</p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        채팅 응답 시:
                        <br />
                        <span className="font-semibold">
                          &quot;인앱 메시징으로 전화번호 노출 없이 안전하게 소통합니다&quot;
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-green-50 border-2 border-green-200 rounded-lg p-4">
                  <p className="font-bold text-green-700">결과</p>
                  <p className="text-gray-700">
                    전화번호 노출 없이 1:1 채팅으로 안전한 소통
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Data Protection */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">3. 데이터 보호</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>Firebase 암호화 저장</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>HTTPS 통신</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>권한 기반 접근 제어 (Firestore Security Rules)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>전화번호 완전 제거 - 인앱 메시징만 사용</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>타인의 정보 조회 불가</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Data Deletion Rights */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🗑️</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">4. 데이터 삭제 권리</h3>

                <div className="mb-6">
                  <p className="font-semibold mb-3">회원 탈퇴 시</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>모든 개인정보 즉시 삭제</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>복구 불가능</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>동일 번호로 재가입 가능</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-3">데이터 보관 기간</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 회원 정보: 탈퇴 시 즉시 삭제</li>
                  <li>• 메시지 데이터: 30일 보관 후 자동 삭제</li>
                  <li>• 로그 데이터: 30일 보관 후 자동 삭제</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Legal Compliance */}
      <Section background="white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          법적 준수 사항
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">개인정보보호법 준수</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 최소한의 정보 수집 (전화번호 완전 제거)</li>
                  <li>• 카카오/Apple 로그인으로 간편 가입</li>
                  <li>• 데이터 삭제 권리 보장</li>
                  <li>• 개인정보 처리방침 명시</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">전자상거래법 회피</h3>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-primary mb-2">
                    단감의 포지셔닝
                  </p>
                  <p className="text-gray-700">정보 중개 플랫폼</p>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• 거래에 직접 개입하지 않음</li>
                  <li>• 결제 시스템 없음</li>
                  <li>• 메시징 플랫폼으로만 운영</li>
                  <li>• 따라서 전자상거래법 대상 아님</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  통신판매업 신고 불필요
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 법무 검토 완료</li>
                  <li>• 정보 제공 플랫폼으로 분류</li>
                  <li>• 별도 신고 불필요 확인</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Safety Features */}
      <Section background="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          안전 장치
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="text-2xl">🛡️</span> 1. Rate Limiting
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 일감 참여자: 하루 최대 20건 메시지 보내기</li>
              <li>• 스팸 및 악의적 사용 방지</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="text-2xl">🚫</span> 2. 중복 요청 차단
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 동일 일감에 1회만 메시지 보내기 가능</li>
              <li>• Firestore Security Rules로 강제</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-orange-500" /> 3. 신고
              시스템
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 부적절한 일감/사용자 신고</li>
              <li>• 동일 대상 3건 누적 시 자동 조치</li>
              <li>• 관리자 검토 및 해결</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <span className="text-2xl">⏱️</span> 4. 자동 만료
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 메시지 7일 후 자동 만료</li>
              <li>• 오래된 정보 자동 정리</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Platform Liability */}
      <Section background="white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            플랫폼의 책임 범위
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-green-700">
                단감이 하는 것
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>일감 등록자와 참여자의 정보 연결</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>전화번호 노출 없는 안전한 메시징 지원</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>신고 처리 및 악의적 사용자 제재</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>플랫폼 기술적 안정성 유지</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-red-700">
                단감이 하지 않는 것
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>일감 조건 협상</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>급여 지급</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>계약서 작성 (채팅 내에서만 지원)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>분쟁 중재</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-yellow-700" />
              면책 사항
            </h3>
            <p className="text-gray-700 leading-relaxed">
              단감은 메시징 플랫폼으로, 일감 등록자와 참여자 간의 거래에 직접
              개입하지 않습니다. 일감 조건, 급여, 계약 등은 당사자 간 직접
              협의하며, 이에 대한 책임은 플랫폼이 부담하지 않습니다. 단, 플랫폼
              내 악의적 행위나 허위 정보에 대해서는 신고 시스템을 통해 적극
              대응합니다.
            </p>
          </div>
        </div>
      </Section>

      {/* User Safety Tips */}
      <Section background="gray">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          안전하게 사용하는 팁
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">일감 등록자께</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  지원자와 채팅 시 일감 조건 명확히 협의
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">첫 만남 전 채팅으로 충분히 소통</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">의심스러운 메시지는 거절</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">금융 정보 요구 시 즉시 신고</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-secondary">
              일감 참여자께
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  일감 등록자와 채팅 시 급여 및 조건 확인
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">채팅 내 계약서 내용 명확히 확인</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">의심스러운 일감은 신고</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">선불금 요구 시 의심</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust Indicators */}
      <Section background="white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          신뢰할 수 있는 플랫폼
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <div className="text-center p-6">
            <FileText className="w-12 h-12 text-primary mx-auto mb-3" />
            <p className="font-semibold">
              개인정보 처리방침
              <br />
              전문 공개
            </p>
          </div>
          <div className="text-center p-6">
            <FileText className="w-12 h-12 text-primary mx-auto mb-3" />
            <p className="font-semibold">
              서비스 이용약관
              <br />
              전문 공개
            </p>
          </div>
          <div className="text-center p-6">
            <span className="text-4xl block mb-3">📧</span>
            <p className="font-semibold">
              문의 채널
              <br />
              항상 열려있음
            </p>
          </div>
          <div className="text-center p-6">
            <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
            <p className="font-semibold">
              신고 접수
              <br />
              24시간 이내 검토
            </p>
          </div>
          <div className="text-center p-6">
            <span className="text-4xl block mb-3">🔍</span>
            <p className="font-semibold">
              투명한
              <br />
              운영 정책
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
