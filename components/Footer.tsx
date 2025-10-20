import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-20">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">단</span>
              </div>
              <h3 className="text-2xl font-bold">단감</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              누구나 일감을 등록하고 참여할 수 있는
              <br />
              가장 간단하고 안전한
              <br />
              무료 매칭 플랫폼
            </p>
          </div>

          {/* 서비스 */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">서비스</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  플랫폼 소개
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  작동 방식
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  기능
                </Link>
              </li>
            </ul>
          </div>

          {/* 사용자 */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">사용자</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/for-farmers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  일감 등록하기
                </Link>
              </li>
              <li>
                <Link
                  href="/for-workers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  일감 찾기
                </Link>
              </li>
            </ul>
          </div>

          {/* 지원 */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">지원</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link
                  href="/safety"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  안전/개인정보
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  문의하기
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; 2025 단감. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                이용약관
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                개인정보처리방침
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
