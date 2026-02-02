"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Gamepad2, Database, Mail, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, transparent 100%)' }} />

      {/* Hero Section */}
      <Section className="flex flex-col items-center justify-center min-h-[80vh] text-center pt-32">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] mx-auto">
            <Database className="text-black w-12 h-12" />
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          DISK<span className="text-[#00FF41]">FACTORY</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          디스크팩토리(DiskFactory)는 재미있는 상상력을 현실로 만드는 1인 게임 개발 스튜디오입니다.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4"
        >
          <button className="px-8 py-4 bg-[#00FF41] text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
            게임 보러가기 <ArrowRight size={20} />
          </button>
          <button className="px-8 py-4 border border-gray-700 rounded-full hover:bg-gray-900 transition-colors">
            소개
          </button>
        </motion.div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
          <Gamepad2 className="text-[#00FF41]" /> CURRENT PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="game-card p-8 group cursor-pointer h-full flex flex-col">
                {project.thumbnail && (
                  <div className="w-full h-48 bg-gray-900 rounded-md mb-6 overflow-hidden relative border border-gray-800 group-hover:border-[#00FF41]/30 transition-colors">
                    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="flex items-center gap-4 mb-4">
                  {project.icon && (
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-[10px] text-gray-600 border border-gray-700 overflow-hidden shrink-0">
                      <img src={project.icon} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-[#00FF41] transition-colors flex items-center gap-2">
                      {project.title} <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#00FF41]" />
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider bg-gray-900 text-gray-400 px-2 py-0.5 rounded border border-gray-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {project.links && Object.keys(project.links).length > 0 && (
                  <div className="mt-auto pt-6 border-t border-gray-900 flex items-center justify-between">
                    <div className="flex gap-2">
                      {project.links.playstore && (
                        <div className="w-5 h-5 rounded-sm bg-[#00FF41]/10 flex items-center justify-center border border-[#00FF41]/20" title="Google Play">
                          <div className="w-1.5 h-1.5 bg-[#00FF41] rotate-45" />
                        </div>
                      )}
                      {project.links.appstore && (
                        <div className="w-5 h-5 rounded-sm bg-white/10 flex items-center justify-center border border-white/20" title="App Store">
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                      )}
                      {project.links.steam && (
                        <div className="w-5 h-5 rounded-sm bg-[#66c0f4]/10 flex items-center justify-center border border-[#66c0f4]/20" title="Steam">
                          <div className="w-2 h-1 bg-[#66c0f4]" />
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] font-mono text-[#00FF41] animate-pulse">
                      READY TO LAUNCH _
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* About / Philosophy 임시 주석 */}
      {/* <Section className="bg-gray-900/10 rounded-3xl mb-20">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">PHILOSOPHY</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            "Disk"는 데이터의 저장소이자, 우리의 신체를 지탱하는 척추의 중심이기도 합니다.
            기초를 탄탄히 하고, 그 위에 즐거움을 쌓아 올리는 것이 디스크팩토리의 철학입니다.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm font-mono text-gray-500">
            <div className="flex items-center gap-2 italic">/ CD-ROM READY</div>
            <div className="flex items-center gap-2 italic">/ SPINE SECURED</div>
            <div className="flex items-center gap-2 italic">/ CREATIVITY LOADED</div>
            <div className="flex items-center gap-2 italic">/ 1-MAN STUDIO</div>
          </div>
        </div>
      </Section> */}

      {/* Footer */}
      <footer className="border-t border-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <div className="text-2xl font-bold mb-2">DISKFACTORY</div>
            <p className="text-gray-500 text-sm">© 2026 DiskFactory. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-[#00FF41] transition-colors">개인정보 처리방침</a>
            <a href="mailto:contact@diskfactory.com" className="flex items-center gap-2 hover:text-[#00FF41] transition-colors">
              <Mail size={16} /> CONTACT
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
