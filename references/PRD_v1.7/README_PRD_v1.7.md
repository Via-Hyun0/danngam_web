## Document Information

|Item|Details|
|---|---|
|**Project Name**|단감|
|**Document Version**|v1.7 (PRD)|
|**Date**|2025년 10월 20일|
|**Author**|김현영|
|**Approvers**|CEO, 연구소장|
|**Status**|Draft - Pending Approval|

### Version History

|Version|Date|Changes|Author|
|---|---|---|---|
|v1.0|2025-10-13|초안 작성|김현영|
|v1.1|2025-10-13|세부 기능 및 화면 구조 구체화|김현영|
|v1.2|2025-10-13|전화번호 교환 시스템 개선 (상호 동의 기반)|김현영|
|v1.3|2025-10-13|PRD 형식 전환, 요구사항 명세화, 구조 표준화|김현영|
|v1.4|2025-10-15|상태관리 확정, 개발 일정 변경|김현영|
|v1.5|2025-10-15|전화번호 교환 → 인앱 메시징 전환, 카카오/Apple 로그인 추가|김현영|
|v1.6|2025-10-16|9주 일정 조정, 메시징 시스템 공수 현실화 (Week 3-4 2주 확보)|김현영|
|v1.7|2025-10-20|역할 통합, 용어 변경, 일감 상태값 확장, 계약서 시스템 추가, 컬러 변경|김현영|

### Key Changes (v1.6 → v1.7)

#### 1. 역할 구조 통합 (당근마켓 방식)

- **변경 전**: 농부/작업자 역할 분리, 회원가입 시 역할 선택 필수
- **변경 후**: 역할 구분 제거, 누구나 일감 등록/참여 가능
- **영향**:
    - UserProfiles.role 필드 제거
    - FR-002 (역할 선택) 제거
    - 메인 화면 통합 (일감 찾기/내 일감 탭)
    - IA 구조 단순화

#### 2. 용어 통일

|변경 전|변경 후|적용 범위|
|---|---|---|
|작업|일감|전체 문서|
|작업 등록|일감 등록|전체 문서|
|농부|일감 작성자|컨텍스트별|
|작업자|일감 참여자|컨텍스트별|
|Jobs|Jobs (유지)|기술 용어|

#### 3. 일감 상태값 확장

**MVP (v1.0) 포함:**

- `active`: 활성/모집중
- `contracted`: 계약 완료 (계약서 양측 서명)
- `deleted`: 삭제됨

**Phase 2 이후 (v1.1+):**

- `in_progress`: 작업 착수
- `completed`: 작업 완료
- `reviewed`: 후기 작성 완료
- `cancelled`: 취소됨

#### 4. 계약서 시스템 추가

- **Contracts Collection** 신규 추가
- 채팅 내에서 계약서 작성 및 양방향 서명
- 계약 완료 시 일감 상태 `active` → `contracted` 전환
- FR-030~032 신규 추가

#### 5. 컬러 시스템 변경

|구분|변경 전|변경 후|
|---|---|---|
|**Primary**|#95A543 (Put-Gam Green)|**#EC6737 (Dan-Gam Orange)** ⭐|
|**Secondary**|#EC6737 (Dan-Gam Orange)|**#95A543 (Put-Gam Green)**|
|**Background**|#FFF8E9 (Orchard Cream)|#FFF8E9 (유지)|

**디자인 철학**: 단감의 따뜻하고 활기찬 오렌지가 메인 브랜드 컬러로, 농업/자연의 그린이 서포트 역할

#### 6. 기타 변경사항

- 전화번호 완전 제거 재확인 (이미 v1.5 반영)
- 카카오 로그인 + 1:1 채팅 + 계약서로 커뮤니케이션 체계 완성
- 메인 화면 IA 재설계
- Release Plan 업데이트 (계약 기능 Week 4 추가)

---

### 문서 구조

#### 1. Product Brief

- 비전, 목표, 가치 제안 재정의
- 페르소나 통합 (역할 구분 제거)
- 경쟁 우위 업데이트

#### 2. Functional Requirements

- FR-002 (역할 선택) 제거
- FR-007~010 (일감 관리) 상태값 확장
- FR-030~032 (계약서 시스템) 신규 추가
- 전체 용어 변경 (작업 → 일감)

#### 3. Non-Functional Requirements

- 용어 변경 반영
- 컬러 코드 업데이트

#### 4. User Interface Specifications

- IA 구조 단순화 (역할별 메인 → 통합 메인)
- UI-002, UI-003 통합 → UI-002 (통합 메인 화면)
- 컬러 시스템 적용
- 계약서 UI 추가

#### 5. Data Model & Architecture

- UserProfiles.role 제거
- Jobs.status enum 확장
- Contracts Collection 추가
- 컬러 코드 변경

#### 6. Quality Assurance

- TS-001 (회원가입) 역할 선택 제거
- TS-011~012 (계약서) 신규 추가
- 용어 변경 반영

#### 7. Release Plan

- Week 4: 계약서 시스템 구현 Task 추가
- 전체 일정 재검토 (9주 유지)

#### 8. Key Performance Indicators

- 농부/작업자 비율 → 일감 작성/참여 비율
- 계약 체결률 지표 추가

#### 9. Risk Management

- R-010: 공급/수요 불균형 리스크 재정의

#### 10. Appendix

- Glossary 업데이트 (새 용어 추가)
- Change Log v1.7 추가

---

## Document Metadata

- **Document Title:** 단감 PRD v1.7
- **Document Type:** Product Requirements Document
- **Version:** v1.7
- **Status:** Draft - Pending Approval
- **Prepared By:** 김현영
- **Prepared Date:** 2025년 10월 20일
- **Next Review Date:** Phase 1 완료 시 (Week 1 종료)
- **Total Pages:** 40 (estimated)
- **Classification:** Internal Use Only

---

**END OF DOCUMENT**