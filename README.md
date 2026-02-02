# DiskFactory Official Website

디스크팩토리(DiskFactory)의 공식 개발자 웹사이트 및 기업 홍보 페이지입니다.

## 🛠 Tech Stack
- **Next.js 15+ (App Router)**
- **Tailwind CSS**
- **Framer Motion**
- **TypeScript**
- **GitHub Actions (Deployment)**

## 📂 Project Structure
- `/app`: 페이지 레이아웃 및 라우팅 (`/`, `/privacy`, `/projects/[id]`)
- `/data/projects.ts`: **게임 데이터 관리 (이 파일을 수정하여 게임 정보를 업데이트하세요)**
- `/components`: 공통 인터랙티브 컴포넌트
- `/public`: 이미지, 아이콘 및 `app-ads.txt` (AdMob 전용)

## 🚀 배포 및 유지보수 가이드
상세한 수정 방법과 GitHub Pages 배포 절차는 아래 문서를 참고해 주세요:
- [유지보수 가이드 (MAINTENANCE.md)](./MAINTENANCE.md)

## 💻 로컬 개발
```bash
npm install
npm run dev
```

## 📦 정적 빌드
```bash
npm run build
```
빌드 완료 후 `out` 폴더의 내용이 정적 사이트로 브라우저에 배포됩니다.
