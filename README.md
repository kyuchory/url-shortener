# URL 단축 서비스

## 프로젝트 소개

<p align="justify">
URL을 입력하여 긴 URL을 단축해서 짧고 간단한 URL로 변환하는 서비스입니다.<br>
이 프로젝트는 테스트 코드 작성과 CI/CD 자동화를 위한 yml파일 작성 경험을 목적으로 만들어졌습니다.<br>
Jest를 사용하여 컴포넌트 단위 테스트를 진행하였고, Jest+Supertest를 사용하여 백엔드 API 요청, 응답에 대한 테스트를 진행했습니다.<br>
CloudType을 통해 배포하였으며, GitHub Action을 사용하여 CI/CD 파이프라인 작성, 빌드, 테스트, 배포까지의 자동화를 진행했습니다.<br>
Redux 라이브러리를 활용하여 입력받은 URL을 전역에서 상태 관리할 수 있게끔 했습니다.
</p>
<br>

## 프로젝트 동기

<p align="justify">
CI/CD 파이프라인을 만들어 백엔드, 프론트엔드를 빌드, 테스트, 배포를 자동화하는 경험을 하는데 목적을 두었습니다.<br>
실제 실무에서는 테스트 코드 작성이 매우 중요하며, 자동화된 배포 과정을 경험하는 것이 개발자로서 필수적인 역량입니다.
</p>
<br>

## 팀원 소개
| 신규철(BE, FE)     |
| :-----------------: |
| <img src="https://github.com/zzannorita/LetsDoIt/assets/135790442/ddb59533-4cba-43c1-9b0c-cf5e1c94137d" alt="KakaoTalk_20240502_172636004" width="200" height="200" /><br> |

<br>

## 기술 스택

### Frontend
![React.js](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![Redux](https://img.shields.io/badge/Redux-339933?style=for-the-badge&logo=redux&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-007ACC?style=for-the-badge&logo=axios&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-F05032?style=for-the-badge&logo=jest&logoColor=white)
![Supertest](https://img.shields.io/badge/Supertest-E34F26?style=for-the-badge&logo=supertest&logoColor=white)

### Tool
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![CloudType](https://img.shields.io/badge/CloudType-FF6B6B?style=for-the-badge&logo=cloudtype&logoColor=white)

<br>

## REST API 설계

![Image](https://github.com/user-attachments/assets/c74dfb69-6f64-4b50-8ea6-984c2884b379)

<br>

## 주요 기능

### URL 단축
+ 복잡한 URL 등을 입력하면 단축된 URL로 변환하여 제공합니다.

<br>

## 주요 화면
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/412cce8e-2432-4d48-a4ab-6db5d6709841" alt="메인페이지" width="500" height="600" /><br>
      <strong>변환 전</strong>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/1bf3b432-ad6b-4706-bba9-25e24ba5120e" alt="메인페이지" width="500" height="600" /><br>
      <strong>변환 후</strong>
    </td>
  </tr>
</table>

<br>

## 시작하기

### 필수 요구사항

- **Node.js**: 20.0.0 이상
- **npm**: 9.0.0 이상
- **Git**: 최신 버전

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/kyuchory/url-shortener.git
cd url-shortener

# 2. 백엔드 의존성 설치 및 실행
cd back
npm install
npm run dev

# 3. 프론트엔드 의존성 설치 및 실행
cd ../front
npm install
npm start
```

### 환경 설정

```bash
# .env 파일 생성 (필요시)
cp .env.example .env

# 환경 변수 설정
PORT=3001
NODE_ENV=development
BASE_URL=http://localhost:3001
```

<br>

## 개발 가이드

### 코드 스타일

- **TypeScript**: 엄격한 타입 체크 활성화
- **ESLint**: 코드 품질 및 일관성 유지
- **Prettier**: 코드 포맷팅 자동화
- **컴포넌트**: 함수형 컴포넌트 및 React Hooks 사용

### 아키텍처 패턴

- **서비스 레이어**: 비즈니스 로직 분리
- **상태 관리**: Redux Toolkit을 활용한 전역 상태 관리
- **API 통신**: Axios를 통한 HTTP 클라이언트
- **타입 안전성**: TypeScript를 통한 런타임 에러 방지

### 테스트 코드 작성

```bash
# 백엔드 테스트 실행
cd back
npm test

# 프론트엔드 테스트 실행
cd front
npm test
```

<br>

## 기술적 도전

### 테스트 코드 작성

**실무에서의 중요성:**
- 코드의 안정성과 신뢰성 확보
- 리팩토링 시 안전성 보장
- 협업 시 코드 이해도 향상
- 버그 조기 발견 및 예방

**구현 내용:**
- 백엔드: Jest + Supertest로 API 엔드포인트 테스트
- 프론트엔드: Jest + React Testing Library로 컴포넌트 테스트
- 테스트 커버리지 확인을 통한 코드 품질 관리

### CI/CD 자동화

**GitHub Actions 워크플로우:**
- 메인 브랜치에 푸시 시 자동 테스트 실행
- 테스트 통과 시 CloudType으로 자동 배포
- 환경별 설정 관리 (개발/프로덕션)

**CloudType 배포 설정:**
- Node.js 20 런타임 사용
- 포트 3001로 설정
- 자동 의존성 설치 및 서버 시작

**./github/workflows/deploy-main.yml 파일 내용:**
```yaml
name: Deploy to cloudtype
on:
  push:
    branches:
      - main
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "20"
      - name: Install Backend dependencies
        run: |
          cd back
          npm install
      - name: Run Backend tests
        run: |
          cd back
          npm test
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Install Backend dependencies
        run: |
          cd back
          npm install
      - name: Connect deploy key
        uses: cloudtype-github-actions/connect@v1
        with:
          token: ${{ secrets.CLOUDTYPE_TOKEN }}
          ghtoken: ${{ secrets.GHP_TOKEN }}
      - name: Deploy
        uses: cloudtype-github-actions/deploy@v1
        with:
          token: ${{ secrets.CLOUDTYPE_TOKEN }}
          project: sls789456/url-shortener
          stage: main
          yaml: |
            name: url-shortener
            app: node@20
            options:
              env: []
              ports: "3001"
              install: npm install
              start: node server.js
              healthz: ""
              buildenv: []
            context:
              git:
                url: https://github.com/kyuchory/url-shortener.git
                branch: main
                path: back
              preset: node
```

<br>

## 라이선스

이 프로젝트는 [ISC 라이선스](LICENSE) 하에 배포됩니다.

<br>

## 연락처

- **프로젝트 관리자**: 신규철
- **이메일**: [sls789456@naver.com]
- **GitHub**: [@kyuchory](https://github.com/kyuchory)
---

<div align="center">

**URL 단축 서비스** - 간단하고 빠른 URL 변환 경험 🚀


</div>
