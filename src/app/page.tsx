"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Lang = "ja" | "ko";

const content = {
  ja: {
    heroTag: "PREMIUM MEDICAL CONCIERGE",
    heroTitle1: "?‚ã—?ã‚?ªãŸ??ƒ?±ãƒƒ?ˆãƒª?¹ãƒˆ??,
    heroTitle2: "è«¦ã‚?¦ã„?‹ç†?±ãŒ?Œä½“??¸å®‰ã€ãª?‰ã€?,
    heroSub: "ç§ãŸ?¡ã¯?ã?Œã‚’?œå®Ÿ?¾ã§?ã‚‹è¨ˆç”»?ã«å¤‰ãˆ?¾ã™??,
    heroDesc1: "?˜ãª?‹åŒè¡Œã§??‚?Šã¾?›ã‚“??,
    heroDesc2: "?»ç™‚?¥è­˜?’æŒ?¤ã‚¹?¿ãƒƒ?•ãŒ?¶æ…‹?’ç¢ºèªã—??,
    heroDesc3: "?¡ç†??ª?„å½¢?§ã€Œã§?ã‚‹?¹æ³•?ã‚’è¨?¨ˆ?—ã¾?™ã€?,
    emp1: "?¬å½“??€ä?ç·’ã«è¡Œã£?¦ã‚?’ãŸ?„ã€?,
    emp2: "?§ã‚‚?ã?ŒãŒ?§ã?ªã„??,
    emp3: "?Œä?äººã§å¤§ä¸ˆå¤«ãª??‹?‚ã€?,
    emp4: "?ã‚Œ?Œä??ªã®ä¸å®‰?§ã—?Ÿã€?,
    solTitle: "ç§ãŸ?¡ã¯?ãŸ? ã®?Œè¡Œ?§ã¯?‚ã‚Š?¾ã›?“ã€?,
    sol1: "?»ç™‚?†è§£?«åŸº?¥ã„?Ÿã‚µ?ãƒ¼??,
    sol2: "?£è€…æ§˜??Š¶?‹ã‚’?ƒæ…®?—ãŸ?Œè¡Œ",
    sol3: "?”å??ã®ä»£ã‚?Šã¨?—ã¦??‚±??,
    vidTitle: "ä¸€äººã˜?ƒãª?„ã¨?ãˆ?Ÿç¬??,
    vidQuote: "?Œé›¢?Œã¦?„ã¦?‚å®‰å¿ƒã§?ã¾?—ãŸ??,
    vidSub: "å®Ÿéš›??Šå®¢æ§˜??£°?§ã™??,
    vidPlay: "PLAY VIDEO",
    buck1: "?‚ã—?ä½“??¸å®‰ã§",
    buck2: "?„ã‚Š?Ÿã„?“ã¨?’è«¦?ã¦?„ã‚‹?ªã‚‰??,
    buck3: "ç§ãŸ?¡ã¯?ã‚Œ?’ã€Œã§?ã‚‹å½¢ã€ã«å¤‰ãˆ?¾ã™??,
    servTitle: "?·ä½“?„ãª?µãƒ¼?“ã‚¹",
    serv1: "?…é™¢?Œè¡Œ",
    serv2: "?»ç™‚?šè¨³",
    serv3: "?‹è¡“?»æ¤œ?»ç???,
    serv4: "ç§»å‹•?µãƒ?¼ãƒˆ",
    serv5: "?Ÿæ´»?±ã‚¢",
    serv6: "?”å??ã¸??ƒ¬?ãƒ¼??,
    endrollTitle: "äººç”Ÿ??‚¨?³ãƒ‰??ƒ¼??,
    endrollP1: "?Šè²·?„ç‰©?„æ—…è¡Œã€å??ã®è¡Œäº‹?ªã©?«åŒè¡Œã•?›ã¦?„ãŸ? ã\n?ã®?¬é–“??†™?Ÿã‚„?•ç”»?’ç·¨?†ã—??n?¨ãƒ³?‰ãƒ­?¼ãƒ«??½œ?ã‚‚?ªãƒ—?·ãƒ§?³ã«?—ã¾?—ãŸ??,
    endrollP2: "?”å??ã®è¨˜æ†¶?«æ®‹?‹ç¬?“ã‚’\n?„ã¤?§ã‚‚?ã„è¿”ã›?‹ã‚ˆ??nå¿ƒã‚’è¾¼ã‚?¦ä½œ?ã„?Ÿã—?¾ã™??,
    endrollNote1: "?»ã”æ³¨æ„",
    endrollNote2: "ä¸€äººã®?‹è?å¸«ã¨?—ã¦å¯„ã‚Šæ·»ã†?‹ã‚‰?“ã??‚Œ??n?Œã‚?ªãŸ???é«˜ã®ä¸€?¬ã€ã‚’?«ã‚¿?ã«?—ã¾??,
    storyLabel: "CUSTOMER STORY",
    storyQuote: "?Œæ¯?‚å®‰å¿ƒã—???”ã›?Ÿã¨è¨€?£ã¦?„ã¾?—ãŸ?‚é›¢?Œã¦?„ã¦?‚ã€å®‰å¿ƒã§?ã‚‹?‚ã€?,
    storyUser: "30ä»?å¥³æ€?/ ?±äº¬",
    storyDesc: "?Šæ¯æ§˜ã®?¥è¨º?Œè¡Œ?µãƒ?¼ãƒˆ?’ã”?©ç”¨",
    trustLabel: "WHY CHOOSE US",
    trustTitle: "ç¢ºã‹?ªçµŒé¨“ã¨å®Ÿç¸¾??br>?µãƒ?¼ãƒˆ?—ã¾??,
    trust1Title: "100ä»¶ä»¥ä¸Šã®?Œè¡Œå®Ÿç¸¾",
    trust1Desc: "è±Šå¯Œ?ªç¾?´ãƒ?¦ãƒ??,
    trust2Title: "?¥æœ¬äººé¡§å®¢å?å¿œå¯??,
    trust2Desc: "è¨€èªã¨?‡åŒ–??®Œ?§ãª?†è§£",
    trust3Title: "?ªã‚¢?«ã‚¿?¤ãƒ å¯¾å¿œ",
    trust3Desc: "?”å??ã¨??ƒª?¢ãƒ«?¿ã‚¤? çŠ¶æ³å…±??,
    trust4Title: "?…é™¢?£æº??µŒé¨?,
    trust4Desc: "?†æ»‘?ªåŒ»?‚ã‚¹?¿ãƒƒ?•ã¨??‚³?Ÿãƒ¥?‹ã‚±?¼ã‚·?§ãƒ³",
    ctaTitle: "ä¸€äººã§?©ã¾?ªã??¤§ä¸ˆå¤«?§ã™??,
    ctaSub: "24?‚é–“ä»¥å†…?«ã”è¿”ä¿¡?„ãŸ?—ã¾?™ã€?,
    btnLine: "LINE?¸è«‡",
    btnMail: "?¡ãƒ¼?«ç›¸è«?,
    footerMsg1: "?Œã‚??™‚?è¡Œ?‘ã°?ˆã‹?£ãŸ?ã‚’?¼ãƒ­?«ã—?Ÿã„??,
    footerMsg2: "?‚ãª?Ÿã®?æ?å¾Œã®?ãŒ?¾ã¾?ã‚’?‹ãª?ˆã‚‹",
    footerMsg3: "ä¸€?ªã®?³æ–¹?§ã‚?ŠãŸ?„ã¨?ã£?¦ã„?¾ã™??,
    footerRep: "ä»£è¡¨ï¼šå°?—çŸ¥ç¾?,
    footerLocTitle: "? ç‚¹",
    footerLoc: "?ƒè‘‰?Œå¸‚?Ÿå¸‚?’æ‹ ?¹ã«æ´»å‹•?—ã¦?„ã¾??,
    footerEmailTitle: "Email Address",
    footerEmail: "motioningcare.ganesh@gmail.com",
    footerPhoneTitle: "Phone Number",
    footerPhone: "070-8994-8896",
    footerLineTitle: "LINE QR",
    privacy: "?‹äºº?…å ±ä¿è??¹é‡",
    terms: "?©ç”¨è¦ç´„"
  },
  ko: {
    heroTag: "PREMIUM MEDICAL CONCIERGE",
    heroTitle1: "ë§Œì•½ ë¶€ëª¨ë‹˜??ë²„í‚·ë¦¬ìŠ¤?¸ë?",
    heroTitle2: "?¬ê¸°?˜ëŠ” ?´ìœ ê°€ 'ê±´ê°•??ë¶ˆì•ˆ'?´ë¼ë©?",
    heroSub: "?°ë¦¬??ê·¸ê²ƒ??'?¤í˜„ ê°€?¥í•œ ê³„íš'?¼ë¡œ ë°”ê¿‰?ˆë‹¤.",
    heroDesc1: "?¨ìˆœ??ë³‘ì› ?™í–‰???„ë‹™?ˆë‹¤.",
    heroDesc2: "?˜ë£Œ ì§€?ì„ ê°–ì¶˜ ?¤íƒœ?„ê? ?íƒœë¥??•ì¸?˜ê³ ,",
    heroDesc3: "ë¬´ë¦¬ ?†ëŠ” ?•íƒœë¡?'ê°€?¥í•œ ë°©ë²•'???¤ê³„?©ë‹ˆ??",
    emp1: "?¨ê»˜ ê°€ì£¼ê³  ?¶ì?ë§?",
    emp2: "ê·¸ëŸ´ ???†ëŠ” ?í™©.",
    emp3: "?¼ì ê´œì°®?„ê¹Œ??,
    emp4: "ê·¸ê²Œ ê°€????ê±±ì •?…ë‹ˆ??",
    solTitle: "?°ë¦¬???¨ìˆœ ?™í–‰???„ë‹™?ˆë‹¤.",
    sol1: "?˜ë£Œ ?´í•´ ê¸°ë°˜ ì¼€??,
    sol2: "?íƒœ??ë§ì¶˜ ?™í–‰",
    sol3: "ë³´í˜¸????•  ?˜í–‰",
    vidTitle: "?¼ìê°€ ?„ë‹ˆ?¼ê³  ?ë? ?œê°„",
    vidQuote: "ë©€ë¦??¨ì–´???ˆì–´???ˆì‹¬?????ˆì—ˆ?µë‹ˆ??",
    vidSub: "?¤ì œ ê³ ê°?˜ì˜ ?„ê¸°?…ë‹ˆ??",
    vidPlay: "PLAY VIDEO",
    buck1: "ëª??Œë¬¸??,
    buck2: "?˜ê³  ?¶ì? ê±??¬ê¸°?˜ê³  ?ˆë‹¤ë©?,
    buck3: "?°ë¦¬??ê·¸ê²ƒ??ê°€?¥í•œ ë°©ë²•?¼ë¡œ ë°”ê¿‰?ˆë‹¤.",
    servTitle: "êµ¬ì²´?ì¸ ?œë¹„??,
    serv1: "ë³‘ì› ?™í–‰",
    serv2: "?˜ë£Œ ?µì—­",
    serv3: "?˜ìˆ /ê²€??ê´€ë¦?,
    serv4: "?´ë™ ì§€??,
    serv5: "?í™œ ì¼€??,
    serv6: "ê°€ì¡?ë¦¬í¬??,
    endrollTitle: "?¸ìƒ???”ë“œë¡?,
    endrollP1: "?¼í•‘?´ë‚˜ ?¬í–‰, ê°€ì¡??‰ì‚¬ ?±ì— ?™í–‰?˜ë©°\nê·??œê°„???¬ì§„ê³??ìƒ???¸ì§‘?˜ì—¬\n?”ë“œë¡??ìƒ ?œì‘???µì…˜?¼ë¡œ ì¶”ê??ˆìŠµ?ˆë‹¤.",
    endrollP2: "ê°€ì¡±ì˜ ê¸°ì–µ???¨ëŠ” ?œê°„??n?¸ì œ???˜ëŒ?„ë³¼ ???ˆë„ë¡?në§ˆìŒ???´ì•„ ?œì‘???œë¦½?ˆë‹¤.",
    endrollNote1: "??ì°¸ê³ ",
    endrollNote2: "??ëª…ì˜ ê°„í˜¸?¬ë¡œ??ê³ì—???¨ê»˜?˜ê¸°???´ì„ ???ˆëŠ”\n'?¹ì‹ ??ê°€??ë¹›ë‚˜??ìµœê³ ???œê°„'???ìƒ?¼ë¡œ ?¨ê²¨?œë¦½?ˆë‹¤.",
    storyLabel: "CUSTOMER STORY",
    storyQuote: "?´ë¨¸?ˆë„ ?ˆì‹¬?˜ê³  ì§€?´ì…¨?¤ê³  ?©ë‹ˆ?? ë©€ë¦??¨ì–´???ˆì–´???ˆì‹¬?????ˆìŠµ?ˆë‹¤.",
    storyUser: "30?€ ?¬ì„± / ?„ì¿„",
    storyDesc: "?´ë¨¸??ê±´ê°•ê²€ì§??™í–‰ ?œí¬???´ìš©",
    trustLabel: "WHY CHOOSE US",
    trustTitle: "?•ì‹¤??ê²½í—˜ê³??¤ì ?¼ë¡œ<br>?œí¬?¸í•©?ˆë‹¤",
    trust1Title: "100ê±??´ìƒ ?™í–‰",
    trust1Desc: "?ë????„ì¥ ?¸í•˜??,
    trust2Title: "?¼ë³¸ ê³ ê° ?€??ê°€??,
    trust2Desc: "?¸ì–´?€ ë¬¸í™”???„ë²½???´í•´",
    trust3Title: "?¤ì‹œê°??€??,
    trust3Desc: "ë³´í˜¸?ì? ?¤ì‹œê°??í™© ê³µìœ ",
    trust4Title: "ë³‘ì› ?‘ë ¥ ê²½í—˜",
    trust4Desc: "?í™œ???˜ë£Œì§?ì»¤ë??ˆì??´ì…˜",
    ctaTitle: "?¼ì ê³ ë??˜ì? ë§ˆì„¸??",
    ctaSub: "24?œê°„ ?´ë‚´???µë????œë¦½?ˆë‹¤.",
    btnLine: "LINE ?ë‹´",
    btnMail: "?´ë©”???ë‹´",
    footerMsg1: "\"ê·¸ë•Œ, ê°?ê±?ê·¸ë¬??" ?˜ëŠ” ?„íšŒë¥?ì§€?Œë“œë¦¬ê² ?µë‹ˆ??",
    footerMsg2: "?¹ì‹ ??'ë§ˆì?ë§??Œì›'???´ë£¨?´ì£¼??,
    footerMsg3: "ê°€??? ë“ ?????¸ì´ ?˜ê³ ???©ë‹ˆ??",
    footerRep: "?€?? ê³ ë°”?¼ì‹œ ? ëª¨ë¯?,
    footerLocTitle: "ê±°ì ",
    footerLoc: "ì¹˜ë°”???´ì¹˜?˜ë¼?œë? ê±°ì ?¼ë¡œ ?œë™?˜ê³  ?ˆìŠµ?ˆë‹¤.",
    footerEmailTitle: "Email Address",
    footerEmail: "motioningcare.ganesh@gmail.com",
    footerPhoneTitle: "Phone Number",
    footerPhone: "070-8994-8896",
    footerLineTitle: "LINE QR",
    privacy: "ê°œì¸?•ë³´ì²˜ë¦¬ë°©ì¹¨",
    terms: "?´ìš©?½ê?"
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

      {/* ?â•?â•?â•?â•?â• HERO ?â•?â•?â•?â•?â• */}
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

      {/* ?â•?â•?â•?â•?â• PROBLEM ?â•?â•?â•?â•?â• */}
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

      {/* ?â•?â•?â•?â•?â• FEATURES ?â•?â•?â•?â•?â• */}
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

      {/* ?â•?â•?â•?â•?â• GALLERY MARQUEE (ì£¼ì„ ì²˜ë¦¬) ?â•?â•?â•?â•?â• */}
      {/* 
      <section className="section-gallery">
        <MarqueeRow images={row1} direction="left" speed="150s" />
        <MarqueeRow images={row2} direction="right" speed="180s" />
        <MarqueeRow images={row3} direction="left" speed="120s" />
      </section>
      */}

      {/* ?â•?â•?â•?â•?â• VIDEO ?â•?â•?â•?â•?â• */}
      <section className="section-video">
        <div className="section-inner">
          <div className="reveal">
            <h2>{t.vidTitle}</h2>
            <div className="video-wrap">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/03JHHsAW3zc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              ></iframe>
            </div>
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

      {/* ?â•?â•?â•?â•?â• BUCKET CTA ?â•?â•?â•?â•?â• */}
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

      {/* ?â•?â•?â•?â•?â• SERVICES ?â•?â•?â•?â•?â• */}
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

      {/* ?â•?â•?â•?â•?â• ENDROLL ?â•?â•?â•?â•?â• */}
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

      {/* ?â•?â•?â•?â•?â• PROOF ?â•?â•?â•?â•?â• */}
      <section className="section-proof">
        <div className="section-inner">
          <div className="proof-grid">
            <div className="reveal">
              <p className="proof-label">{t.storyLabel}</p>
              <div className="testimonial-card">
                <div className="big-quote">"</div>
                <div className="stars">?…â˜…?…â˜…??/div>
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

      {/* ?â•?â•?â•?â•?â• CTA ?â•?â•?â•?â•?â• */}
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

      {/* ?â•?â•?â•?â•?â• FOOTER ?â•?â•?â•?â•?â• */}
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
            <p style={{ fontWeight: 500, color: 'var(--tiffany-light)', fontSize: '0.95rem', letterSpacing: '0.05em' }}>{t.footerRep}</p>
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
          <p>Â© {new Date().getFullYear()} Motioning Care. All rights reserved.</p>
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
              {lang === 'ja' ? 'QR?³ãƒ¼?‰ã‚’?¹ã‚­?£ãƒ³?—ã¦\n?Šå•?„åˆ?ã›?ã ?•ã„' : 'QR ì½”ë“œë¥??¤ìº”?˜ì—¬\në¬¸ì˜??ì£¼ì„¸??}
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
              style={{ display: 'block', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--tiffany)', fontWeight: 500, textDecoration: 'none' }}
            >
              {lang === 'ja' ? '?¹ãƒ?¼ãƒˆ?•ã‚©?³ã‹?‰é–‹?? : '?¤ë§ˆ?¸í°?ì„œ ë°”ë¡œ ?´ê¸°'} &rarr;
            </a>
          </div>
        </div>
      )}
    </>
  );
}
