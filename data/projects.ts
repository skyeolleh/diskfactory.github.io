import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: "floor-crusher",
        title: "바닥부수기",
        description: "내 순발력은 얼마나 좋을까? 빠르게 동일한 색의 버튼을 눌러 바닥을 부수세요!",
        fullDescription: "4가지 색의 바닥이 무한히 등장합니다. 빠르게 서있는 바닥 색과 동일한 버튼을 눌러 바닥을 부수세요!\n누구보다 빠르게 부숴 고득점을 노려보세요\n\n빠르게 연속으로 바닥을 부수면 더 많은 분노게이지를 얻습니다. 분노로 더 빠르게 바닥을 부수세요!",
        thumbnail: '',
        icon: "/images/pj1/proj1.webp",
        tags: ["Casual"],
        links: {
            playstore: "https://play.google.com/store/apps/details?id=com.diskactory.smashdowndown&hl=ko",
            // appstore: "https://apps.apple.com/app/id000000000",
            // steam: "https://store.steampowered.com/app/000000"
        },
        screenshots: [
            "/images/pj1/img1.jpg",
            // "/images/pj1/sc2.png",
            // "/images/pj1/sc3.png"
        ],
        features: [
            "쉽고 직관적인 플레이",
            "보고 빠르게 반응하는 순발력 기르기",
        ]
    },
    // {
    //     id: "prj2",
    //     title: "가제: Project MIVS",
    //     description: "디스크팩토리의 차기작이 준비 중입니다. 어떤 놀라움이 기다리고 있을까요?",
    //     fullDescription: "현재 기획 개발단계에 있는 흥미로운 신규 프로젝트입니다. 조금만 더 기다려 주세요!",
    //     thumbnail: "/images/projects/sample-thumb.png",
    //     icon: "/images/projects/sample-icon.png",
    //     tags: ["Planning", "RPG"],
    //     screenshots: [],
    //     features: []
    // }
];
