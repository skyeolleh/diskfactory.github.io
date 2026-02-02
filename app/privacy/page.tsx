"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Shield, Clock, Users, Mail, RefreshCw, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
    const sections = [
        {
            title: "정보 수집 및 이용",
            icon: <Shield size={18} className="text-[#00FF41]" />,
            content: "애플리케이션은 귀하가 앱을 다운로드하고 사용할 때 정보를 수집합니다. 귀하 기기의 IP 주소, 방문 페이지, 사용 시간, 운영체제 등이 포함될 수 있습니다. 정밀 위치 정보는 수집하지 않으나, 대략적인 지리적 위치 파악을 통해 개인화된 콘텐츠와 분석 서비스를 제공합니다.",
        },
        {
            title: "제삼자 서비스 액세스",
            icon: <RefreshCw size={18} className="text-[#00FF41]" />,
            content: "서비스 개선을 위해 집계되고 익명화된 데이터만이 주기적으로 외부 서비스로 전송됩니다. 본 애플리케이션이 이용하는 제삼자 서비스 제공업체는 다음과 같습니다.",
            services: ["AdMob", "Google Analytics for Firebase", "Unity"]
        },
        {
            title: "인공지능(AI)의 사용",
            icon: <Shield size={18} className="text-[#00FF41]" />,
            content: "본 애플리케이션은 사용자 경험 향상을 위해 AI 기술을 사용합니다. AI 구성 요소는 개인화된 콘텐츠나 추천 기능을 제공하며, 모든 처리는 본 개인정보처리방침 및 관련 법률 자문을 준수합니다."
        },
        {
            title: "옵트아웃(Opt-Out) 및 삭제",
            icon: <CheckCircle size={18} className="text-[#00FF41]" />,
            content: "애플리케이션을 삭제함으로써 모든 정보 수집을 즉시 중단할 수 있습니다. 표준 삭제 프로세스를 통해 모든 데이터를 제거할 수 있습니다."
        },
        {
            title: "데이터 보유 및 아동 보호",
            icon: <Clock size={18} className="text-[#00FF41]" />,
            content: "서비스 제공자는 귀하가 앱을 사용하는 동안 및 합리적인 기간 동안 데이터를 보유합니다. 또한 13세 미만 아동의 데이터를 고의로 수집하지 않으며, 인지 시 즉시 서버에서 파기 조치합니다."
        },
        {
            title: "보안 및 변경 사항",
            icon: <Shield size={18} className="text-[#00FF41]" />,
            content: "서비스 제공자는 기상 정보 보안을 위해 물리적, 전자적 보호 조치를 다하고 있습니다. 본 방침은 수시로 업데이트될 수 있으며, 업데이트 시 본 페이지를 통해 공지됩니다."
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00FF41] mb-12 transition-colors group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 돌아가기
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-12"
                >
                    <header className="border-b border-gray-900 pb-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">개인정보 처리방침</h1>
                        <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Privacy Policy | DiskFactory</p>
                    </header>

                    <div className="grid gap-8">
                        {/* Introduction Card */}
                        <div className="game-card p-10 bg-gray-900/20">
                            <p className="text-lg text-gray-300 leading-relaxed italic">
                                &quot;본 개인정보처리방침은 <span className="text-[#00FF41] font-bold">디스크팩토리</span>가 제공하는 모바일 앱 <span className="text-white italic">&apos;바닥부수기&apos;</span>에 적용됩니다. 우리는 사용자의 개인정보를 소중히 여기며 투명하게 관리하기 위해 최선을 다하고 있습니다.&quot;
                            </p>
                        </div>

                        {/* Detailed Sections */}
                        <div className="grid grid-cols-1 gap-6">
                            {sections.map((section, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 border border-gray-900 rounded-2xl bg-black/40 hover:border-[#00FF41]/30 transition-colors"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        {section.icon}
                                        <h3 className="text-xl font-bold text-white">{section.title}</h3>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed pl-7 border-l border-gray-800">
                                        {section.content}
                                    </p>
                                    {section.services && (
                                        <div className="flex flex-wrap gap-2 mt-4 ml-7">
                                            {section.services.map(s => (
                                                <span key={s} className="px-3 py-1 bg-gray-900 rounded-md text-[10px] uppercase font-mono text-gray-400 border border-gray-800 tracking-wider">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer Info */}
                        <div className="mt-20 pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-start gap-10">
                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                        <Mail size={12} /> Contact Info
                                    </h4>
                                    <p className="text-lg text-[#00FF41]">yeojh97@gmail.com</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                        <Clock size={12} /> Effective Date
                                    </h4>
                                    <p className="text-white">2026. 02. 01</p>
                                </div>
                            </div>

                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold hover:bg-white/10 transition-all uppercase tracking-widest"
                            >
                                Back to Top ↑
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
