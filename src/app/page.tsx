"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
    endrollNote1: "※ご注意",
    endrollNote2: "一人の看護師として寄り添うからこそ撮れる\n「あなたの最高の一瞬」をカタチにします",
    storyLabel: "CUSTOMER STORY",
    storyQuote: "「母も安心して過ごせたと言っていました。離れていても、安心できる。」",
    storyUser: "30代 女性 / 東京",
    storyDesc: "お母様の健診同行サポートをご利用",
    trustLabel: "WHY CHOOSE US",
    trustTitle: "確かな経験と実績で<br>サポートします",
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
    footerMsg1: "「あの時、行けばよかった」をゼロにしたい。",
    footerMsg2: "あなたの『最後のわがまま』をかなえる",
    footerMsg3: "一番の味方でありたいと思っています。",
    footerRep: "代表：小林知美",
    footerLocTitle: "拠点",
    footerLoc: "千葉県市原市を拠点に活動しています",
    footerEmailTitle: "Email Address",
    footerEmail: "motioningcare.ganesh@gmail.com",
    footerPhoneTitle: "Phone Number",
    footerPhone: "070-8994-8896",
    footerLineTitle: "LINE QR",
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
    endrollTitle: "인생의 엔드롤",
    endrollP1: "쇼핑이나 여행, 가족 행사 등에 동행하며\n그 순간의 사진과 영상을 편집하여\n엔드롤 영상 제작을 옵션으로 추가했습니다.",
    endrollP2: "가족의 기억에 남는 순간을\n언제든 되돌아볼 수 있도록\n마음을 담아 제작해 드립니다.",
    endrollNote1: "※ 참고",
    endrollNote2: "한 명의 간호사로서 곁에서 함께하기에 담을 수 있는\n'당신의 가장 빛나는 최고의 순간'을 영상으로 남겨드립니다.",
    storyLabel: "CUSTOMER STORY",
    storyQuote: "어머니도 안심하고 지내셨다고 합니다. 멀리 떨어져 있어도 안심할 수 있습니다.",
    storyUser: "30대 여성 / 도쿄",
    storyDesc: "어머니 건강검진 동행 서포트 이용",
    trustLabel: "WHY CHOOSE US",
    trustTitle: "확실한 경험과 실적으로<br>서포트합니다",
    trust1Title: "100건 이상 동행",
    trust1Desc: "풍부한 현장 노하우",
    trust2Title: "일본 고객 대응 가능",
    trust2Desc: "언어와 문화의 완벽한 이해",
    trust3Title: "실시간 대응",
    trust3Desc: "보호자와 실시간 상황 공유",
    trust4Title: "병원 협력 경험",
    trust4Desc: "원활한 의료진 커뮤니케이션",
    ctaTitle: "혼자 고민하지 마세요.",
    ctaSub: "24시간 이내에 답변해 드립니다.",
    btnLine: "LINE 상담",
    btnMail: "이메일 상담",
    footerMsg1: "\"그때, 갈 걸 그랬어\" 하는 후회를 지워드리겠습니다.",
    footerMsg2: "당신의 '마지막 소원'을 이루어주는",
    footerMsg3: "가장 든든한 내 편이 되고자 합니다.",
    footerRep: "대표: 고바야시 토모미",
    footerLocTitle: "거점",
    footerLoc: "치바현 이치하라시를 거점으로 활동하고 있습니다.",
    footerEmailTitle: "Email Address",
    footerEmail: "motioningcare.ganesh@gmail.com",
    footerPhoneTitle: "Phone Number",
    footerPhone: "070-8994-8896",
    footerLineTitle: "LINE QR",
    privacy: "개인정보처리방침",
    terms: "이용약관"
  }
};

const envatoImages = [
  "caregiver-supports-senior-woman-walking-with-walke-2026-03-24-00-08-00-utc.jpg",
  "cheerful-senior-couple-of-female-friends-eating-a-2026-01-05-23-27-48-utc.jpg",
  "close-up-picture-of-human-hands-holding-eah-other-2026-01-05-05-25-05-utc.jpg",
  "comforting-hands-touching-in-gentle-support-2026-03-16-04-35-05-utc (1).jpg",
  "comforting-hands-touching-in-gentle-support-2026-03-16-04-35-05-utc.jpg",
  "comforting-touch-senior-hand-held-with-care-2026-03-16-04-25-53-utc (1).jpg",
  "comforting-touch-senior-hand-held-with-care-2026-03-16-04-25-53-utc.jpg",
  "concerned-woman-calling-for-sick-partner-in-bedroo-2026-03-26-23-29-22-utc.jpg",
  "distraught-senior-woman-sits-on-bedside-2026-01-05-06-33-32-utc.jpg",
  "doctor-or-nurse-helping-senior-man-to-walk-at-nurs-2026-03-24-04-20-04-utc.jpg",
  "hands-of-young-adult-and-senior-touching-2026-03-27-02-16-40-utc.jpg",
  "happy-senior-disabled-or-handicapped-bearded-man-s-2026-01-06-10-17-58-utc.jpg",
  "happy-senior-woman-traveling-in-seville-spain-vis-2026-03-11-00-54-00-utc.jpg",
  "healthcare-worker-with-senior-patient-on-park-benc-2026-03-20-00-14-01-utc.jpg",
  "kind-woman-helping-senior-woman-outdoors-2026-03-20-04-02-57-utc.jpg",
  "portrait-of-a-disabled-person-in-a-wheelchair-on-t-2026-01-06-10-16-17-utc.jpg",
  "retirement-walking-and-elderly-friends-in-park-fo-2026-03-25-01-25-08-utc.jpg",
  "sad-lonely-senior-sitting-in-a-hospital-bed-at-nig-2026-01-05-04-46-30-utc.jpg",
  "senior-couple-holding-hands-during-a-sunny-walk-2026-03-24-07-07-36-utc.jpg",
  "senior-couple-relaxing-at-home-in-bed-2026-03-26-22-49-47-utc (1).jpg",
  "senior-couple-relaxing-at-home-in-bed-2026-03-26-22-49-47-utc.jpg",
  "senior-man-in-wheelchair-with-young-adult-woman-2026-01-09-11-04-39-utc.jpg",
  "senior-patient-taking-medicines-at-the-hospital-2026-01-07-06-13-51-utc.JPG",
  "supportive-hands-holding-each-other-indoors-2026-03-25-02-20-30-utc.jpg",
  "supportive-hands-touching-gently-on-white-bed-2026-03-18-05-34-21-utc.jpg",
  "supportive-touch-hand-holding-in-comforting-setti-2026-03-25-06-09-30-utc.jpg",
  "tender-moment-senior-woman-with-arm-around-2026-03-19-23-57-04-utc.jpg",
  "two-people-holding-hands-indoors-on-couch-2026-03-23-22-59-42-utc.jpg",
  "union-of-seniors-2026-03-24-04-58-48-utc.jpg",
  "woman-comforts-senior-man-at-home-with-care-2026-03-10-03-57-35-utc.jpg",
  "woman-in-white-coat-helping-senior-woman-2026-03-19-08-10-43-utc.jpg",
  "woman-looking-at-man-with-chest-pain-sitting-on-st-2026-01-11-09-07-53-utc.jpg",
  "woman-sitting-on-bed-with-phone-looking-anxious-2026-03-19-10-43-26-utc.jpg",
  "young-adult-man-pushing-and-running-with-senior-ma-2026-01-11-11-10-38-utc.jpg",
  "young-woman-and-senior-man-posing-for-selfie-2026-03-16-06-23-26-utc.jpg"
];

const row1 = envatoImages.slice(0, 12);
const row2 = envatoImages.slice(12, 24);
const row3 = envatoImages.slice(24, 35);

const MarqueeRow = ({ images, direction, speed }: { images: string[], direction: 'left' | 'right', speed: string }) => (
  <div className="marquee-wrapper">
    <div 
      className="marquee-track" 
      style={{ 
        animationDirection: direction === 'right' ? 'reverse' : 'normal',
        animationDuration: speed 
      }}
    >
      {[...images, ...images].map((img, idx) => (
        <div key={idx} className="marquee-item" style={{ position: 'relative' }}>
          <Image 
            src={`/images/envato/${img}`} 
            alt="Memory Gallery" 
            fill
            sizes="(max-width: 640px) 200px, 280px"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  </div>
);

export default function Page() {
  const [lang, setLang] = useState<Lang>("ja");
  const [isLinePopupOpen, setIsLinePopupOpen] = useState(false);
  const t = content[lang];

  useEffect(() => {
    if (lang === "ko") {
      document.body.classList.add("lang-ko");
    } else {
      document.body.classList.remove("lang-ko");
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => {
      el.classList.remove('visible');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [lang]);

  return (
    <>
      {/* Lang Toggle */}
      <div className="lang-toggle">
        <button 
          className={lang === "ja" ? "active" : "inactive"} 
          onClick={() => setLang("ja")}
        >JP</button>
        <button 
          className={lang === "ko" ? "active" : "inactive"} 
          onClick={() => setLang("ko")}
        >KR</button>
      </div>

      {/* ══════════ HERO ══════════ */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-gradient"></div>
        <div className="hero-inner">
          <p className="eyebrow">{t.heroTag}</p>
          <h1>
            {t.heroTitle1}<br />{t.heroTitle2}
            <em>{t.heroSub}</em>
          </h1>
          <p className="hero-sub">
            {t.heroDesc1}<br />
            {t.heroDesc2}<br />
            {t.heroDesc3}
          </p>
          <div className="hero-line"></div>
        </div>
      </section>

      {/* ══════════ PROBLEM ══════════ */}
      <section className="section-problem">
        <div className="section-inner">
          <div className="reveal">
            <h2>
              {t.emp1}<br />
              {t.emp2}
            </h2>
            <div className="divider"></div>
            <blockquote>
              {t.emp3}<br />{t.emp4}
            </blockquote>
          </div>
        </div>
      </section>

      {/* ══════════ FEATURES ══════════ */}
      <section className="section-features">
        <div className="section-inner">
          <div className="section-title reveal">
            <p className="eyebrow" style={{ color: 'var(--gold)', animation: 'none', opacity: 1 }}>OUR APPROACH</p>
            <h2>{t.solTitle}</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg>
              </div>
              <h3>{t.sol1}</h3>
            </div>
            <div className="feature-card reveal reveal-delay-1">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>
              </div>
              <h3>{t.sol2}</h3>
            </div>
            <div className="feature-card reveal reveal-delay-2">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
              </div>
              <h3>{t.sol3}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ GALLERY MARQUEE ══════════ */}
      <section className="section-gallery">
        <MarqueeRow images={row1} direction="left" speed="150s" />
        <MarqueeRow images={row2} direction="right" speed="180s" />
        <MarqueeRow images={row3} direction="left" speed="120s" />
      </section>

      {/* ══════════ VIDEO ══════════ */}
      <section className="section-video">
        <div className="section-inner">
          <div className="reveal">
            <h2>{t.vidTitle}</h2>
            <a href="https://youtu.be/03JHHsAW3zc" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
              <div className="video-wrap">
                <div className="video-wrap-bg"></div>
                <div className="play-btn">
                  <div className="play-circle"></div>
                  <span className="play-label">{t.vidPlay}</span>
                </div>
              </div>
            </a>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="quote-pull">
                <div className="quote-bar"></div>
                <div>
                  <blockquote>{t.vidQuote}</blockquote>
                  <p className="quote-attr">{t.vidSub}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ BUCKET CTA ══════════ */}
      <section className="section-bucket">
        <div className="section-inner">
          <div className="reveal">
            <div className="divider"></div>
            <h2>
              {t.buck1} {t.buck2}
              <strong>{t.buck3}</strong>
            </h2>
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section className="section-services">
        <div className="section-inner">
          <div className="section-title reveal">
            <p className="eyebrow" style={{ color: 'var(--gold)', animation: 'none', opacity: 1 }}>SERVICES</p>
            <h2>{t.servTitle}</h2>
          </div>
          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>
              </div>
              <h3>{t.serv1}</h3>
            </div>
            <div className="service-card reveal reveal-delay-1">
              <div className="service-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
              </div>
              <h3>{t.serv2}</h3>
            </div>
            <div className="service-card reveal reveal-delay-2">
              <div className="service-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg>
              </div>
              <h3>{t.serv3}</h3>
            </div>
            <div className="service-card reveal">
              <div className="service-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
              </div>
              <h3>{t.serv4}</h3>
            </div>
            <div className="service-card reveal reveal-delay-1">
              <div className="service-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
              </div>
              <h3>{t.serv5}</h3>
            </div>
            <div className="service-card reveal reveal-delay-2">
              <div className="service-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
              </div>
              <h3>{t.serv6}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ ENDROLL ══════════ */}
      <section className="section-endroll">
        <div className="endroll-inner">
          <div className="endroll-card reveal">
            <h2>{t.endrollTitle}</h2>
            <p>{t.endrollP1}</p>
            <p>{t.endrollP2}</p>
            <div className="endroll-note">
              <p className="note-label">{t.endrollNote1}</p>
              <p>{t.endrollNote2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PROOF ══════════ */}
      <section className="section-proof">
        <div className="section-inner">
          <div className="proof-grid">
            <div className="reveal">
              <p className="proof-label">{t.storyLabel}</p>
              <div className="testimonial-card">
                <div className="big-quote">"</div>
                <div className="stars">★★★★★</div>
                <blockquote>{t.storyQuote}</blockquote>
                <div className="testimonial-meta">
                  <div className="meta-avatar"></div>
                  <div>
                    <div className="meta-name">{t.storyUser}</div>
                    <div className="meta-detail">{t.storyDesc}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <p className="proof-label">{t.trustLabel}</p>
              <h2 className="why-heading" dangerouslySetInnerHTML={{ __html: t.trustTitle }}></h2>
              <div className="why-list">
                <div className="why-item">
                  <svg className="why-check" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  <div>
                    <div className="why-title">{t.trust1Title}</div>
                    <div className="why-desc">{t.trust1Desc}</div>
                  </div>
                </div>
                <div className="why-item">
                  <svg className="why-check" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  <div>
                    <div className="why-title">{t.trust2Title}</div>
                    <div className="why-desc">{t.trust2Desc}</div>
                  </div>
                </div>
                <div className="why-item">
                  <svg className="why-check" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  <div>
                    <div className="why-title">{t.trust3Title}</div>
                    <div className="why-desc">{t.trust3Desc}</div>
                  </div>
                </div>
                <div className="why-item">
                  <svg className="why-check" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  <div>
                    <div className="why-title">{t.trust4Title}</div>
                    <div className="why-desc">{t.trust4Desc}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="section-cta">
        <div className="cta-noise"></div>
        <div className="section-inner">
          <div className="reveal">
            <h2>{t.ctaTitle}</h2>
            <div className="cta-buttons">
              <button className="btn btn-line" onClick={() => setIsLinePopupOpen(true)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>
                {t.btnLine}
              </button>
              <a href={`mailto:${t.footerEmail}`} className="btn btn-mail" style={{ textDecoration: 'none' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                {t.btnMail}
              </a>
            </div>
            <p className="cta-reply">{t.ctaSub}</p>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer>
        <div className="footer-inner" style={{ alignItems: 'flex-start' }}>
          <div className="footer-brand" style={{ flex: 1 }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Motioning Care</h2>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.05rem', fontWeight: 500, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.6, letterSpacing: '0.05em' }}>{t.footerMsg1}</p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--cream)', opacity: 0.85 }}>
                {t.footerMsg2}<br />
                {t.footerMsg3}
              </p>
            </div>
            <p style={{ fontWeight: 500, color: 'var(--peach-light)', fontSize: '0.95rem', letterSpacing: '0.05em' }}>{t.footerRep}</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.7 }}>{t.footerLoc}</p>
          </div>
          
          <div className="footer-info" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start', textAlign: 'left' }}>
            <div>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--gold-light)', marginBottom: '0.4rem', fontWeight: 500 }}>{t.footerEmailTitle}</p>
              <a href={`mailto:${t.footerEmail}`} style={{ color: 'var(--cream)', fontSize: '1.05rem', textDecoration: 'none', letterSpacing: '0.05em' }}>{t.footerEmail}</a>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--gold-light)', marginBottom: '0.4rem', fontWeight: 500 }}>{t.footerPhoneTitle}</p>
              <a href={`tel:${t.footerPhone}`} style={{ color: 'var(--cream)', fontSize: '1.05rem', textDecoration: 'none', letterSpacing: '0.05em' }}>{t.footerPhone}</a>
            </div>
            
            <div style={{ marginTop: '0.5rem' }}>
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--gold-light)', marginBottom: '0.75rem', fontWeight: 500 }}>{t.footerLineTitle}</p>
              <a href="https://line.me/R/ti/p/@motioningcare" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#fff', padding: '0.5rem', borderRadius: '0.75rem', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent('https://line.me/R/ti/p/@motioningcare')}`} alt="LINE QR Code" width="100" height="100" style={{ display: 'block', borderRadius: '0.25rem' }} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Motioning Care. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">{t.privacy}</a>
            <a href="#">{t.terms}</a>
          </div>
        </div>
      </footer>

      {/* LINE QR Popup */}
      {isLinePopupOpen && (
        <div 
          style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(46,33,25,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={() => setIsLinePopupOpen(false)}
        >
          <div 
            style={{ background: '#fff', padding: '2.5rem', borderRadius: '1.5rem', textAlign: 'center', boxShadow: '0 24px 60px rgba(0,0,0,0.2)', position: 'relative', maxWidth: '90%', width: '320px', animation: 'fadeUp 0.4s var(--ease-out) forwards' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsLinePopupOpen(false)}
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--warm-500)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--warm-900)', marginBottom: '0.5rem' }}>LINE Consultation</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--warm-700)', marginBottom: '1.5rem', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
              {lang === 'ja' ? 'QRコードをスキャンして\nお問い合わせください' : 'QR 코드를 스캔하여\n문의해 주세요'}
            </p>
            <div style={{ background: 'var(--cream)', padding: '1rem', borderRadius: '1rem', display: 'inline-block' }}>
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('https://line.me/R/ti/p/@motioningcare')}`} 
                alt="LINE QR Code" 
                width="160" height="160" 
                style={{ display: 'block', borderRadius: '0.5rem' }} 
              />
            </div>
            <a 
              href="https://line.me/R/ti/p/@motioningcare" 
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--peach)', fontWeight: 500, textDecoration: 'none' }}
            >
              {lang === 'ja' ? 'スマートフォンから開く' : '스마트폰에서 바로 열기'} &rarr;
            </a>
          </div>
        </div>
      )}
    </>
  );
}
