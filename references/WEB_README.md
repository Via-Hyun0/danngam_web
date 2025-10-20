# 단감 (Danngam) - 웹사이트

농업 일손 매칭 플랫폼 단감의 공식 웹사이트입니다.

## 프로젝트 개요

단감은 농부와 작업자를 직접 연결하는 무료 정보 중개 플랫폼입니다.
이 웹사이트는 플랫폼을 소개하고 사용자에게 정보를 제공하는 역할을 합니다.

## 기술 스택

- **Frontend Framework**: Next.js 14+ (React)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel (권장)

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 서버 실행

```bash
npm start
```

## 페이지 구조

1. `/` - 홈페이지 (Landing Page)
2. `/about` - 플랫폼 소개
3. `/how-it-works` - 작동 방식
4. `/for-farmers` - 농부를 위한 단감
5. `/for-workers` - 작업자를 위한 단감
6. `/features` - 기능 소개
7. `/safety` - 안전 및 개인정보보호
8. `/faq` - 자주 묻는 질문
9. `/contact` - 문의하기

## 디자인 시스템

### 컬러 팔레트

- **Primary**: #95A543 (Green - 농업 이미지)
- **Secondary**: #EC6737 (Orange - 단감 색상)
- **Background**: #FFF8E9 (Light Cream)
- **Text**: #333333 (Dark Gray)

### 컴포넌트

재사용 가능한 컴포넌트들:

- `Button` - 다양한 스타일의 버튼
- `Section` - 페이지 섹션 래퍼
- `Navigation` - 상단 네비게이션
- `Footer` - 하단 푸터

## 배포

### Vercel 배포 (권장)

1. GitHub에 프로젝트 푸시
2. Vercel에서 Import
3. 자동 배포 설정 완료

### 다른 플랫폼

`npm run build` 후 생성된 `.next` 폴더를 호스팅하세요.

## 라이센스

이 프로젝트는 단감 플랫폼의 일부입니다.

## 문의

- 이메일: support@danngam.com
- 웹사이트: https://danngam.com (예정)
