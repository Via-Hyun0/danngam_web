# 단감 웹사이트 (Danngam Website)

> 누구나 일감을 등록하고 참여할 수 있는 가장 간단하고 안전한 무료 매칭 플랫폼

[![Version](https://img.shields.io/badge/version-0.1.0-brightgreen.svg)](https://github.com/your-repo/danngam_web)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

## 📖 프로젝트 소개

단감 웹사이트는 농업 인력 매칭 플랫폼 '단감'을 소개하는 공식 웹사이트입니다. 세계 최고 수준의 디자인과 사용자 경험을 제공하며, 누구나 일감을 등록하고 참여할 수 있는 플랫폼의 가치를 명확하게 전달합니다.

### ✨ 주요 특징

- 🎨 **세계 최고 수준의 디자인**: 5단계 업그레이드된 디자인 시스템
- 📱 **완전 반응형**: 모바일, 태블릿, 데스크톱 완벽 지원
- ⚡ **빠른 성능**: Next.js 14 최적화
- 🎯 **SEO 최적화**: 검색 엔진 친화적
- ♿ **접근성**: WCAG 2.1 AA 준수
- 🔒 **타입 안전성**: TypeScript 100% 적용

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치 방법

```bash
# 저장소 클론
git clone https://github.com/your-repo/danngam_web.git

# 디렉토리 이동
cd danngam_web

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📄 페이지 구조

| 경로            | 설명                    |
| --------------- | ----------------------- |
| `/`             | 홈페이지 (Landing Page) |
| `/about`        | 플랫폼 소개             |
| `/how-it-works` | 작동 방식               |
| `/for-farmers`  | 일감 등록하기          |
| `/for-workers`  | 일감 찾기              |
| `/features`     | 기능 소개               |
| `/safety`       | 안전 및 개인정보보호    |
| `/faq`          | 자주 묻는 질문          |
| `/contact`      | 문의하기                |
| `/terms`        | 이용약관                |
| `/privacy`      | 개인정보처리방침        |

## 🎨 디자인 시스템

### 컬러 팔레트

- **Primary (Orange)**: #EC6737 - 단감 색상, 메인 브랜드 컬러
- **Secondary (Green)**: #95A543 - 농업, 자연, 성장
- **Background**: #FFF8E9 - 따뜻한 크림색
- **Text**: #1a1a1a / #4a5568 / #718096 - 계층적 텍스트

### 타이포그래피

- **Display Sizes**: 2xl, xl, lg, md, sm
- **최적화된 Line Height & Letter Spacing**
- **반응형 폰트 크기**

### 컴포넌트

- **Button**: 4가지 variant (primary, secondary, outline, ghost)
- **Card**: 호버 효과와 그림자
- **Section**: 4가지 배경 옵션
- **Navigation**: Fixed, Glass effect
- **Footer**: 다크 그라데이션

## 🛠 기술 스택

### Frontend

- **Framework**: Next.js 14.2
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

### Development

- **Linting**: ESLint
- **Type Checking**: TypeScript Compiler
- **Package Manager**: npm

### Deployment

- **Platform**: Vercel (권장)
- **Build**: Static Export 지원
- **CDN**: Edge Network

## 📁 프로젝트 구조

```
danngam_web/
├── app/                    # Next.js App Router
│   ├── about/             # About 페이지
│   ├── contact/           # Contact 페이지
│   ├── faq/               # FAQ 페이지
│   ├── features/          # Features 페이지
│   ├── for-farmers/       # For Farmers 페이지
│   ├── for-workers/       # For Workers 페이지
│   ├── how-it-works/      # How It Works 페이지
│   ├── privacy/           # Privacy 페이지
│   ├── safety/            # Safety 페이지
│   ├── terms/             # Terms 페이지
│   ├── globals.css        # 글로벌 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 홈페이지
├── components/            # 재사용 컴포넌트
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── Section.tsx
├── public/                # 정적 파일
├── reference/             # 프로젝트 문서
├── .gitignore
├── CHANGELOG.md
├── README.md
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 📝 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린팅
npm run lint

# 타입 체크
npx tsc --noEmit
```

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 문의

- 이메일: support@danngam.com
- 웹사이트: https://danngam.com (예정)

## 🎯 로드맵

### v0.1.0 (현재)

- ✅ 11개 페이지 완성
- ✅ 반응형 디자인
- ✅ 디자인 시스템 구축

### v0.2.0 (계획)

- [ ] 블로그 섹션
- [ ] 다국어 지원 (영어)
- [ ] 향상된 애니메이션
- [ ] 사용자 후기 섹션
- [ ] PRD v1.7 기능 반영 (메시징, 계약서)

### v1.0.0 (계획)

- [ ] 전문 사진 촬영
- [ ] 비디오 컨텐츠
- [ ] 성능 최적화
- [ ] 분석 도구 통합

---

Made with ❤️ by the Danngam Team
