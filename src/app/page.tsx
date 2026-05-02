"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HeartPulse, Languages, Stethoscope, Car, Home, FileText, CheckCircle2, MessageCircle, Mail, Globe } from "lucide-react";

type Lang = "ja" | "ko";

const content = {
  ja: {
    heroTag: "PREMIUM MEDICAL CONCIERGE",
    heroTitle1: "もし、あなたのバケットリストを",
    heroTitle2: "諦めている理由が「体の不安」なら。",
    heroSub: "私たちは、それを“実現できる計画”に変えます。",
    heroDesc1: "単なる同行ではありません。",
    heroDesc2: "医療知識を持つスタッフが状態を確認し、",
    heroDesc3: "無理のない形で「できる方法」を設計します。",
    emp1: "本当は、一緒に行ってあげたい。",
    emp2: "でも、それができない。",
    emp3: "「一人で大丈夫なのか。」",
    emp4: "それが一番の不安でした。",
    solTitle: "私たちは、ただの同行ではありません。",
    sol1: "医療理解に基づいたサポート",
    sol2: "患者様の状態を考慮した同行",
    sol3: "ご家族の代わりとしてのケア",
    vidTitle: "一人じゃないと思えた瞬間",
    vidQuote: "「離れていても安心できました」",
    vidSub: "実際のお客様の声です。",
    vidPlay: "PLAY VIDEO",
    buck1: "もし、体の不安で",
    buck2: "やりたいことを諦めているなら。",
    buck3: "私たちはそれを「できる形」に変えます。",
    servTitle: "具体的なサービス",
    serv1: "病院同行",
    serv2: "医療通訳",
    serv3: "手術・検査管理",
    serv4: "移動サポート",
    serv5: "生活ケア",
    serv6: "ご家族へのレポート",
    endrollTitle: "人生のエンドロール",
    endrollP1: "お買い物や旅行、家族の行事などに同行させていただき\nその瞬間の写真や動画を編集して\nエンドロールの作成もオプションにしました。",
    endrollP2: "ご家族の記憶に残る瞬間を\nいつでも思い返せるよう\n心を込めて作成いたします。",
    endrollNote1: "※プロの映像クリエイターではありませんが",
    endrollNote2: "一人の看護師として寄り添うからこそ撮れる\n「あなたの最高の一瞬」をカタチにします",
    storyLabel: "CUSTOMER STORY",
    storyQuote: "「母も安心して過ごせたと言っていました。離れていても、安心できる。」",
    storyUser: "30代 女性 / 東京",
    storyDesc: "お母様の健診同行サポートをご利用",
    trustLabel: "WHY CHOOSE US",
    trustTitle: "確かな経験と実績でサポートします",
    trust1Title: "100件以上の同行実績",
    trust1Desc: "豊富な現場ノウハウ",
    trust2Title: "日本人顧客対応可能",
    trust2Desc: "言語と文化の完璧な理解",
    trust3Title: "リアルタイム対応",
    trust3Desc: "ご家族とのリアルタイム状況共有",
    trust4Title: "病院連携の経験",
    trust4Desc: "円滑な医療スタッフとのコミュニケーション",
    ctaTitle: "一人で悩まなくて大丈夫です。",
    ctaSub: "24時間以内にご返信いたします。",
    btnLine: "LINE相談",
    btnMail: "メール相談",
    footerDesc: "プレミアム医療コンシェルジュ",
    privacy: "個人情報保護方針",
    terms: "利用規約"
  },
  ko: {
    heroTag: "PREMIUM MEDICAL CONCIERGE",
    heroTitle1: "만약 부모님의 버킷리스트를",
    heroTitle2: "포기하는 이유가 '건강의 불안'이라면.",
    heroSub: "우리는 그것을 '실현 가능한 계획'으로 바꿉니다.",
    heroDesc1: "단순한 병원 동행이 아닙니다.",
    heroDesc2: "의료 지식을 갖춘 스태프가 상태를 확인하고,",
    heroDesc3: "무리 없는 형태로 '가능한 방법'을 설계합니다.",
    emp1: "함께 가주고 싶지만,",
    emp2: "그럴 수 없는 상황.",
    emp3: "혼자 괜찮을까…",
    emp4: "그게 가장 큰 걱정입니다.",
    solTitle: "우리는 단순 동행이 아닙니다.",
    sol1: "의료 이해 기반 케어",
    sol2: "상태에 맞춘 동행",
    sol3: "보호자 역할 수행",
    vidTitle: "혼자가 아니라고 느낀 순간",
    vidQuote: "멀리 떨어져 있어도 안심할 수 있었습니다.",
    vidSub: "실제 고객님의 후기입니다.",
    vidPlay: "PLAY VIDEO",
    buck1: "몸 때문에",
    buck2: "하고 싶은 걸 포기하고 있다면",
    buck3: "우리는 그것을 가능한 방법으로 바꿉니다.",
    servTitle: "구체적인 서비스",
    serv1: "병원 동행",
    serv2: "의료 통역",
    serv3: "수술/검사 관리",
    serv4: "이동 지원",
    serv5: "생활 케어",
    serv6: "가족 리포트",
    endrollTitle: "인생의 엔드롤 (영상 제작 옵션)",
    endrollP1: "쇼핑이나 여행, 가족 행사 등에 동행하며\n그 순간의 사진과 영상을 편집하여\n엔드롤 영상 제작을 옵션으로 추가했습니다.",
    endrollP2: "가족의 기억에 남는 순간을\n언제든 되돌아볼 수 있도록\n마음을 담아 제작해 드립니다.",
    endrollNote1: "※ 전문 영상 크리에이터는 아니지만",
    endrollNote2: "한 명의 간호사로서 곁에서 함께하기에 담을 수 있는\n'당신의 가장 빛나는 최고의 순간'을 영상으로 남겨드립니다.",
    storyLabel: "CUSTOMER STORY",
    storyQuote: "어머니도 안심하고 지내셨다고 합니다. 멀리 떨어져 있어도 안심할 수 있습니다.",
    storyUser: "30대 여성 / 도쿄",
    storyDesc: "어머니 건강검진 동행 서포트 이용",
    trustLabel: "WHY CHOOSE US",
    trustTitle: "확실한 경험과 실적으로 서포트합니다",
    trust1Title: "100건 이상 동행",
    trust1Desc: "풍부한 현장 노하우",
    trust2Title: "일본 고객 대응 가능",
    trust2Desc: "언어와 문화의 완벽한 이해",
    trust3Title: "실시간 대응",
    trust3Desc: "보호자와 실시간 상황 공유",
    trust4Title: "병원 협력 경험",
    trust4Desc: "원활한 의료진 커뮤니케이션",
    ctaTitle: "혼자 고민하지 마세요. 지금 상담하세요.",
    ctaSub: "24시간 이내에 답변해 드립니다.",
    btnLine: "LINE 상담",
    btnMail: "이메일 상담",
    footerDesc: "프리미엄 메디컬 컨시어지",
    privacy: "개인정보처리방침",
    terms: "이용약관"
  }
};

export default function Page() {
  const [lang, setLang] = useState<Lang>("ja");
  const t = content[lang];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <main className="min-h-screen bg-cream-100 text-warm-900 selection:bg-peach-400/30">
      
      {/* Floating Language Switcher */}
      <div className="fixed top-6 right-6 z-50 flex items-center bg-white/80 backdrop-blur-md rounded-full shadow-md border border-warm-200 p-1">
        <button 
          onClick={() => setLang("ja")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${lang === "ja" ? "bg-peach-500 text-white shadow-sm" : "text-warm-700 hover:text-warm-900"}`}
        >
          JP
        </button>
        <button 
          onClick={() => setLang("ko")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${lang === "ko" ? "bg-peach-500 text-white shadow-sm" : "text-warm-700 hover:text-warm-900"}`}
        >
          KR
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={lang}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.4 }}
        >
          {/* 1. Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-900 text-cream-100">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-center opacity-25 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-warm-900/60 via-warm-900/40 to-warm-900"></div>
            
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <p className="text-peach-400 font-medium tracking-widest mb-6 text-sm md:text-base">{t.heroTag}</p>
                <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8">
                  {t.heroTitle1}<br className="hidden md:block"/>{t.heroTitle2}<br/>
                  <span className="text-peach-400 font-medium mt-4 block">{t.heroSub}</span>
                </h1>
                <p className="text-lg md:text-xl text-cream-200/90 max-w-3xl mx-auto leading-relaxed font-light">
                  {t.heroDesc1}<br/>
                  {t.heroDesc2}<br className="md:hidden"/>{t.heroDesc3}
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream-200/50"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={32} />
            </motion.div>
          </section>

          {/* 2. Problem Empathy */}
          <section className="py-32 bg-cream-100 text-warm-900 relative">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}>
                <div className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-light leading-relaxed mb-8">
                    {t.emp1}<br/>{t.emp2}
                  </h2>
                  <p className="text-2xl md:text-3xl text-warm-700 italic font-medium">
                    {t.emp3}<br/>{t.emp4}
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 3. Solution */}
          <section className="py-24 bg-white text-warm-900">
            <div className="max-w-6xl mx-auto px-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-medium mb-4 text-peach-600">{t.solTitle}</h2>
              </motion.div>

              <motion.div 
                className="grid md:grid-cols-3 gap-8"
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              >
                {[
                  { title: t.sol1, icon: <Stethoscope size={32} /> },
                  { title: t.sol2, icon: <HeartPulse size={32} /> },
                  { title: t.sol3, icon: <Home size={32} /> },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn} className="glass-panel p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-16 h-16 bg-peach-400/10 text-peach-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-3 text-warm-800">{item.title}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* 4. Story (Video) */}
          <section className="py-32 bg-warm-900 text-cream-100">
            <div className="max-w-5xl mx-auto px-6 text-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <h2 className="text-3xl md:text-4xl font-light mb-12">{t.vidTitle}</h2>
                
                {/* Video Placeholder */}
                <div className="aspect-video bg-warm-800 rounded-2xl overflow-hidden relative shadow-2xl border border-cream-100/10 mb-10 flex items-center justify-center group">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-60"></div>
                   <div className="relative z-10 flex flex-col items-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 cursor-pointer hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                      </div>
                      <p className="mt-6 text-sm tracking-widest text-cream-200 font-medium">{t.vidPlay}</p>
                   </div>
                </div>

                <div className="inline-block border-l-4 border-peach-400 pl-6 text-left">
                  <p className="text-2xl md:text-3xl font-light italic mb-3 text-cream-100">{t.vidQuote}</p>
                  <p className="text-peach-400/90 text-sm tracking-wider font-medium">{t.vidSub}</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 5. Bucket List */}
          <section className="py-32 bg-cream-200 text-warm-900 text-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8">
                  {t.buck1}<br/>{t.buck2}<br/>
                  <span className="font-medium text-peach-600 mt-6 block">{t.buck3}</span>
                </h2>
              </motion.div>
            </div>
          </section>

          {/* 6. Service Details */}
          <section className="py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-medium text-warm-900">{t.servTitle}</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                {[
                  { icon: <HeartPulse strokeWidth={1.5} />, title: t.serv1 },
                  { icon: <Languages strokeWidth={1.5} />, title: t.serv2 },
                  { icon: <Stethoscope strokeWidth={1.5} />, title: t.serv3 },
                  { icon: <Car strokeWidth={1.5} />, title: t.serv4 },
                  { icon: <Home strokeWidth={1.5} />, title: t.serv5 },
                  { icon: <FileText strokeWidth={1.5} />, title: t.serv6 }
                ].map((service, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-cream-100 p-8 md:p-10 rounded-3xl flex flex-col items-center text-center border border-cream-200/50 hover:shadow-xl hover:border-peach-400/30 transition-all duration-300"
                  >
                    <div className="text-peach-500 mb-6 bg-white p-5 rounded-2xl shadow-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-medium text-warm-900">{service.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 6.5 End Roll Option */}
          <section className="py-32 bg-cream-200 text-warm-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%234a3b32\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="glass-panel p-10 md:p-16 rounded-3xl border border-peach-400/20 text-center relative z-10 bg-white/70">
                <h2 className="text-3xl md:text-4xl font-medium mb-10 text-peach-600">{t.endrollTitle}</h2>
                <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed mb-10 text-warm-800">
                  <p className="whitespace-pre-line">{t.endrollP1}</p>
                  <p className="whitespace-pre-line">{t.endrollP2}</p>
                </div>
                <div className="bg-white/80 p-6 md:p-8 rounded-2xl inline-block text-left shadow-sm border border-cream-200">
                  <p className="text-sm md:text-base text-peach-600 font-medium mb-2">{t.endrollNote1}</p>
                  <p className="text-base md:text-lg text-warm-900 font-medium whitespace-pre-line">{t.endrollNote2}</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 7. Parent Care Story & 8. Trust Elements */}
          <section className="py-32 bg-warm-900 text-cream-100">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">
              {/* Story */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <h3 className="text-peach-400 text-sm tracking-widest mb-6 font-medium">{t.storyLabel}</h3>
                <div className="glass-panel p-10 md:p-12 rounded-3xl relative">
                  <div className="absolute -top-6 -left-6 text-peach-500/20 text-9xl leading-none font-serif">"</div>
                  <div className="flex gap-1 text-peach-400 mb-8 relative z-10">
                    {[1,2,3,4,5].map(star => <span key={star}>★</span>)}
                  </div>
                  <p className="text-xl md:text-2xl font-light leading-relaxed mb-10 relative z-10 text-cream-100">
                    {t.storyQuote}
                  </p>
                  <div className="flex items-center gap-5 border-t border-cream-100/10 pt-8 mt-8 relative z-10">
                    <div className="w-14 h-14 bg-cream-100/10 rounded-full border border-cream-100/20"></div>
                    <div>
                      <p className="font-medium text-cream-100">{t.storyUser}</p>
                      <p className="text-sm text-cream-200/60 mt-1">{t.storyDesc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Trust Elements */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                 <h3 className="text-peach-400 text-sm tracking-widest mb-6 font-medium">{t.trustLabel}</h3>
                 <h2 className="text-3xl font-light mb-12 text-cream-100">{t.trustTitle}</h2>
                 
                 <div className="space-y-8">
                    {[
                      { title: t.trust1Title, desc: t.trust1Desc },
                      { title: t.trust2Title, desc: t.trust2Desc },
                      { title: t.trust3Title, desc: t.trust3Desc },
                      { title: t.trust4Title, desc: t.trust4Desc },
                    ].map((trust, idx) => (
                      <div key={idx} className="flex gap-5 items-start">
                        <CheckCircle2 className="text-peach-400 shrink-0 mt-1" size={28} />
                        <div>
                          <h4 className="text-xl font-medium text-cream-100 mb-1">{trust.title}</h4>
                          <p className="text-cream-200/70 text-base">{trust.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </motion.div>
            </div>
          </section>

          {/* 9. CTA */}
          <section className="py-32 bg-peach-500 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-peach-600 to-peach-500 opacity-90"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                <h2 className="text-4xl md:text-5xl font-medium mb-12">{t.ctaTitle}</h2>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="flex items-center justify-center gap-3 bg-[#06C755] hover:bg-[#05b34c] text-white px-10 py-5 rounded-full font-medium text-lg transition-all hover:-translate-y-1 shadow-[0_10px_20px_rgba(6,199,85,0.3)]">
                    <MessageCircle size={24} /> {t.btnLine}
                  </button>
                  <button className="flex items-center justify-center gap-3 bg-warm-900 hover:bg-warm-800 text-white px-10 py-5 rounded-full font-medium text-lg transition-all hover:-translate-y-1 shadow-[0_10px_20px_rgba(74,59,50,0.3)]">
                    <Mail size={24} /> {t.btnMail}
                  </button>
                </div>
                <p className="mt-10 text-sm font-medium opacity-90 tracking-wide">{t.ctaSub}</p>
              </motion.div>
            </div>
          </section>

          {/* 10. Footer */}
          <footer className="bg-warm-900 text-cream-200/60 py-16 border-t border-cream-100/10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-light text-cream-100 mb-2 tracking-wide">Motioning Care</h2>
                <p className="text-sm tracking-wider">{t.footerDesc}</p>
              </div>
              <div className="text-sm text-center md:text-right flex flex-col gap-2">
                <p>株式会社 Antigravity</p>
                <p>contact@antigravity.com</p>
                <p>LINE: @motioningcare</p>
              </div>
            </div>
            <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-cream-100/10 text-xs text-center flex flex-col md:flex-row justify-between gap-6">
              <p>&copy; {new Date().getFullYear()} Antigravity Inc. All rights reserved.</p>
              <div className="flex justify-center gap-8">
                <a href="#" className="hover:text-cream-100 transition">{t.privacy}</a>
                <a href="#" className="hover:text-cream-100 transition">{t.terms}</a>
              </div>
            </div>
          </footer>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
