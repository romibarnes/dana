// variants.jsx — Soft Romantic boutique mobile landing page for Dana's workshop
// RTL Hebrew. Single tall mobile column. Palette: cream #fbf4eb / terracotta #c97a6b / deep brown #3d2e2a

const CONTENT = {
  outcomes: [
    'ביטחון עצמי גבוה יותר',
    'חיבור למי שהיא באמת',
    'כלים להתמודד עם השוואות',
    'תמונות שמראות אותה כמו שהיא',
  ],
  meetings: [
    { n: '01', t: 'לראות את התמונה המלאה', d: 'היכרות + צילום פולרואיד ראשון. לומדות לראות את עצמן שלמות — לא רק את הפגמים.' },
    { n: '02', t: 'לאן שמים את הפוקוס', d: 'בתמונה ובחיים — מה אני בוחרת להדגיש ולאהוב בעצמי.' },
    { n: '03', t: 'מה נוח לי מול מצלמה', d: 'לגלות מה כיף, מה מחמיא, מה נראה טוב — מה אני אוהבת בעצמי.' },
    { n: '04', t: 'שליטה על איך אני נתפסת', d: 'איך אני רוצה שיצלמו אותי — ביטחון עצמי מול מצלמה.' },
    { n: '05', t: 'מי אני מבפנים', d: 'הקול הפנימי — להבחין בין הקול הביקורתי לקול האמיתי. מי אני מחוץ לתמונה.' },
    { n: '06', t: 'אני בוחרת מי אני', d: 'עומדות מול המצלמה פעם אחרונה — הפעם מתוך בחירה. כל נערה מחליטה איך להיראות, מה לזכור ממנה, ומה לקחת הביתה.' },
  ],
  testimonials: [
    { q: 'באתי בלי שום ניסיון מול מצלמה. יצאתי עם תמונות שאני אוהבת — ועם הרגשה שאני אוהבת את עצמי.', a: 'נועה, 11', who: 'נערה' },
    { q: 'ראיתי את הבת שלי פורחת אחרי הסדנה. שיחות שלא היו לנו לפני, מבט אחר במראה.', a: 'אורית, אמא של ליה', who: 'אמא' },
    { q: 'לא ידעתי שאפשר לאהוב את הצילומים שלי. דנה גרמה לי להרגיש שהמקום הזה שלי.', a: 'שיר, 12', who: 'נערה' },
  ],
  faqV2: [
    { q: 'לאיזה גיל הסדנה מתאימה?', a: 'הסדנה מיועדת לנערות בגילאי 10–12. תקופה שבה הרבה דברים מתחילים להשתנות בשקט. לא מוקדם מדי, ולא מאוחר מדי. בדיוק הרגע הנכון לתת לה את הכלים האלה.' },
    { q: 'הבת שלי מאוד ביישנית, איך היא תרגיש בקבוצה?', a: 'בדיוק בשבילה. הסדנה בנויה על קצב אישי, אף אחת לא נדחפת לשום מקום לפני שהיא מוכנה. הקבוצה הקטנה והאינטימית יוצרת תחושת ביטחון מהר מאוד, ולרוב הנערות הביישניות הן אלה שמפתיעות את עצמן הכי הרבה.' },
    { q: 'הבת שלי מאוד פוטוגנית, מה הסדנה תוסיף לה?', a: 'הצילום הוא רק הכלי. הסדנה היא על מה שקורה מבפנים, איך היא מרגישה עם עצמה ולא רק איך היא נראית. נערות שנראות טוב בתמונות לא תמיד מרגישות טוב עם עצמן, וזה המקום שבו הן לומדות לחבר בין השניים.' },
    { q: 'איפה הסדנה מתקיימת ומה עושים בינתיים?', a: 'הסדנה מתקיימת במושב משמר השבעה, סביבה שקטה וירוקה שתורמת לאווירה. ממש ליד יש בית קפה חמוד עם ישיבה בחוץ. הרבה אמהות משתמשות בשעות האלה לקפה עם חברה, שיחה שאין לה זמן בשגרה, או פשוט רגע של נשימה. זמן לבנות הוא גם זמן לכן.' },
    { q: 'כמה נערות יהיו בקבוצה?', a: 'עד 6 נערות בלבד. זה לא מקרי, הקבוצה הקטנה היא חלק מהסדנה. היא מאפשרת לכל אחת להרגיש נראית, בטוחה ושייכת.' },
  ],
};

function MobileFrame({ children }) {
  return (
    <div className="mf-shell">
      <div className="mf-notch"></div>
      <div className="mf-statusbar light">
        <span>9:41</span>
        <span className="icons">
          <svg viewBox="0 0 16 11"><rect x="0" y="6" width="3" height="5" rx="0.6" fill="currentColor"/><rect x="4.5" y="4" width="3" height="7" rx="0.6" fill="currentColor"/><rect x="9" y="2" width="3" height="9" rx="0.6" fill="currentColor"/><rect x="13.5" y="0" width="2.5" height="11" rx="0.6" fill="currentColor"/></svg>
          <svg viewBox="0 0 25 11"><rect x="0.5" y="0.5" width="22" height="10" rx="2.5" stroke="currentColor" fill="none" opacity="0.5"/><rect x="2" y="2" width="19" height="7" rx="1.5" fill="currentColor"/></svg>
        </span>
      </div>
      {children}
      <div className="mf-bottom-bar"></div>
    </div>
  );
}

function whatsappHref(text) {
  return `https://wa.me/972506370640?text=${encodeURIComponent(text || 'היי דנה, אני מתעניינת בסדנה')}`;
}

const s = {
  page: {
    background: '#fbf4eb',
    color: '#3d2e2a',
    fontFamily: '"Assistant", system-ui, sans-serif',
    fontWeight: 300,
  },
  topBar: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '0 24px 24px',
    fontFamily: '"Cormorant Garamond", serif',
  },
  brandMark: { fontStyle: 'italic', fontSize: 18, color: '#c97a6b', fontWeight: 400 },
  brandIG: {
    fontFamily: '"DM Mono", monospace',
    fontSize: 10, letterSpacing: '0.1em',
    color: 'rgba(61,46,42,0.55)',
    direction: 'ltr',
  },
  hero: { position: 'relative', paddingTop: 60, paddingBottom: 0 },
  heroImageRound: {
    margin: '0 24px',
    height: 480,
    borderRadius: '180px 180px 24px 24px',
    overflow: 'hidden',
    background: 'linear-gradient(160deg, #f5d4c2, #c97a6b 120%)',
    position: 'relative',
  },
  heroSticker: {
    position: 'absolute',
    top: 84, right: 14,
    zIndex: 5,
    background: '#fbf4eb',
    color: '#c97a6b',
    fontFamily: '"Cormorant Garamond", serif',
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: 13,
    width: 84, height: 84,
    borderRadius: '50%',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    textAlign: 'center', lineHeight: 1.15,
    boxShadow: '0 8px 18px -4px rgba(201,122,107,0.3), 0 0 0 1px rgba(201,122,107,0.08)',
    transform: 'rotate(-6deg)',
    pointerEvents: 'none',
  },
  heroBlock: { padding: '40px 28px 28px', textAlign: 'center' },
  heroSerif: {
    fontFamily: '"Cormorant Garamond", "Frank Ruhl Libre", serif',
    fontSize: 38, lineHeight: 1.1,
    fontWeight: 400,
    margin: 0,
    color: '#3d2e2a',
  },
  heroSerifIt: { fontStyle: 'italic', color: '#c97a6b', fontWeight: 300 },
  heroSubLine: {
    fontFamily: '"Frank Ruhl Libre", serif',
    fontStyle: 'italic',
    fontSize: 17,
    color: 'rgba(61,46,42,0.7)',
    marginTop: 16,
    fontWeight: 300,
    lineHeight: 1.5,
  },
  heroChips: { display: 'flex', gap: 8, justifyContent: 'center', marginTop: 24, flexWrap: 'wrap' },
  chip: {
    background: '#fff',
    color: '#3d2e2a',
    fontFamily: '"Assistant", system-ui',
    fontSize: 12, fontWeight: 500,
    padding: '8px 14px', borderRadius: 999,
    border: '1px solid rgba(201,122,107,0.25)',
  },
  ctaPrimary: {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    background: '#c97a6b',
    color: '#fbf4eb',
    padding: '18px 30px',
    borderRadius: 999,
    textDecoration: 'none',
    fontFamily: '"Assistant", system-ui',
    fontWeight: 500,
    fontSize: 15.5,
    marginTop: 28,
    boxShadow: '0 12px 24px -8px rgba(201,122,107,0.5)',
  },
  divider: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    gap: 8, padding: '32px 0',
  },
  dividerDot: { width: 4, height: 4, borderRadius: '50%', background: '#c97a6b' },
  dividerLine: { width: 60, height: 1, background: 'rgba(201,122,107,0.4)' },
  section: { padding: '24px 28px 40px' },
  eyebrow: {
    fontFamily: '"Cormorant Garamond", serif',
    fontStyle: 'italic',
    fontSize: 17,
    color: '#c97a6b',
    textAlign: 'center',
    marginBottom: 6,
  },
  sectionTitle: {
    fontFamily: '"Cormorant Garamond", "Frank Ruhl Libre", serif',
    fontSize: 30, fontWeight: 400,
    lineHeight: 1.15,
    margin: 0, marginBottom: 24,
    textAlign: 'center',
    color: '#3d2e2a',
  },
  outcomeCard: {
    background: '#fff',
    borderRadius: 22,
    padding: 22,
    marginBottom: 12,
    display: 'flex', alignItems: 'center', gap: 16,
    border: '1px solid rgba(201,122,107,0.12)',
  },
  outcomeBadge: {
    width: 42, height: 42,
    borderRadius: '50%',
    background: '#fbf4eb',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: '"Cormorant Garamond", serif',
    fontStyle: 'italic',
    fontSize: 18,
    color: '#c97a6b',
    fontWeight: 400,
    flexShrink: 0,
  },
  outcomeText: { fontFamily: '"Frank Ruhl Libre", serif', fontSize: 17, lineHeight: 1.3 },
  meetingCard: {
    background: '#fff',
    borderRadius: 24,
    padding: '22px 22px 22px 24px',
    marginBottom: 12,
    border: '1px solid rgba(201,122,107,0.12)',
  },
  meetingHeader: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 },
  meetingNumPill: {
    background: '#c97a6b',
    color: '#fbf4eb',
    fontFamily: '"Cormorant Garamond", serif',
    fontStyle: 'italic',
    fontSize: 14, fontWeight: 500,
    padding: '4px 12px',
    borderRadius: 999,
    direction: 'ltr',
    flexShrink: 0,
  },
  meetingTitleRom: {
    fontFamily: '"Cormorant Garamond", serif',
    fontSize: 20,
    fontStyle: 'italic',
    color: '#3d2e2a',
    fontWeight: 400,
  },
  meetingDesc: { fontSize: 14, lineHeight: 1.55, color: 'rgba(61,46,42,0.7)', fontWeight: 300 },
  aboutBlock: {
    background: '#3d2e2a',
    color: '#fbf4eb',
    margin: '32px 16px',
    borderRadius: 32,
    padding: '40px 28px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  aboutPortrait: {
    width: 130, height: 130,
    margin: '0 auto 22px',
    borderRadius: '50%',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #f5d4c2, #c97a6b)',
  },
  testCard: {
    background: '#fff',
    borderRadius: 26,
    padding: 26,
    marginBottom: 14,
    border: '1px solid rgba(201,122,107,0.12)',
  },
  testQuoteMark: {
    fontFamily: '"Cormorant Garamond", serif',
    fontStyle: 'italic',
    fontSize: 56, color: '#c97a6b',
    lineHeight: 0.7,
    marginBottom: 4,
  },
  testQText: {
    fontFamily: '"Frank Ruhl Libre", serif',
    fontSize: 16.5, lineHeight: 1.5,
    fontWeight: 400,
    marginBottom: 16,
    color: '#3d2e2a',
  },
  testAuthor: { fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 15, color: '#c97a6b' },
  testWho: {
    fontFamily: '"DM Mono", monospace',
    fontSize: 9.5,
    letterSpacing: '0.1em',
    color: 'rgba(61,46,42,0.45)',
    marginRight: 10,
  },
  faqCard: {
    background: '#fff',
    borderRadius: 22,
    padding: '20px 22px',
    marginBottom: 10,
    border: '1px solid rgba(201,122,107,0.12)',
  },
  pricingBlock: {
    margin: '32px 24px 0',
    padding: '40px 24px',
    background: 'linear-gradient(135deg, #f5d4c2, #c97a6b)',
    borderRadius: 32,
    color: '#fbf4eb',
    textAlign: 'center',
  },
  finalCta: { padding: '40px 28px 60px', textAlign: 'center' },
};

const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3C8.7 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm5.5 12.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.3 5.2 4.6 1.9.8 2.6.9 3.5.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.2-.1-.4-.2-.7-.3z"/>
  </svg>
);

function V2Soft({ tweaks }) {
  const t = tweaks;
  return (
    <MobileFrame>
      <div style={s.page}>
        <div style={s.topBar}>
          <span style={s.brandMark}>Dana<span style={{color: 'rgba(61,46,42,0.55)'}}>·studio</span></span>
          <span style={s.brandIG}>{t.instagramHandle}</span>
        </div>

        {/* HERO */}
        <div style={s.hero}>
          <div style={s.heroImageRound}>
            <img
              src="assets/v2-hero.jpeg"
              alt="נערה במופע ריקוד בזריחה"
              style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 40%', display:'block'}}
            />
          </div>
          <div style={s.heroSticker}>
            <span>סדנה</span>
            <span style={{fontSize: 22, lineHeight: 1, marginTop: 2}}>06</span>
            <span style={{fontSize: 11}}>מפגשים</span>
          </div>

          <div style={s.heroBlock}>
            <h1 style={s.heroSerif}>
              לראות את עצמך<br/>
              <span style={s.heroSerifIt}>באמת.</span>
            </h1>
            <div style={s.heroSubLine}>
              סדנת צילום וביטחון עצמי<br/>לנערות בגילאי 10–12
            </div>
            <div style={s.heroChips}>
              <div style={s.chip}>צילום</div>
              <div style={s.chip}>דימוי עצמי</div>
              <div style={s.chip}>קבוצה אינטימית</div>
            </div>
            <a href={whatsappHref(t.whatsappText)} style={s.ctaPrimary}>
              <WaIcon />
              שיחה אישית בוואטסאפ
            </a>
          </div>
        </div>

        <div style={s.divider}>
          <div style={s.dividerLine}></div>
          <div style={s.dividerDot}></div>
          <div style={s.dividerLine}></div>
        </div>

        {/* INTRO */}
        <div style={s.section}>
          <div style={s.eyebrow}>למה דווקא עכשיו</div>
          <h2 style={s.sectionTitle}>הזמן הנכון<br/>בגיל הנכון.</h2>
          <p style={{fontSize: 16, lineHeight: 1.75, color: 'rgba(61,46,42,0.78)', textAlign: 'center', fontWeight: 300, margin: 0, padding: '0 4px'}}>
            נערות גדלות היום בתוך עולם עשיר, צבעוני ומלא תוכן. אבל לפעמים, בתוך כל הרעש הזה, קשה לשמוע את הקול הפנימי. את הדבר הייחודי שהוא רק שלה.
            <br/><br/>
            בגיל הזה משהו משתנה בשקט. המבט, המחשבות, הדרך בה היא רואה את עצמה. בתוך עולם של רשתות חברתיות, סינונים והשוואות, הסדנה הזו היא מרחב שונה. אינטימי. אמיתי.
            <br/><br/>
            סדנה ייחודית, שמשלבת בין עולם הצילום לבין חיזוק הביטחון העצמי והעולם הרגשי בתקופה הכי משמעותית בהתפתחות של כל נערה. סדנה בה נערות לומדות להרגיש בנוח מול המצלמה ובעיקר מול עצמן.
          </p>
        </div>

        {/* OUTCOMES */}
        <div style={s.section}>
          <div style={s.eyebrow}>מה היא לוקחת איתה</div>
          <h2 style={s.sectionTitle}>בסוף הסדנה,<br/>היא יוצאת עם:</h2>
          {CONTENT.outcomes.map((o, i) => (
            <div key={i} style={s.outcomeCard}>
              <div style={s.outcomeBadge}>{i + 1}</div>
              <div style={s.outcomeText}>{o}</div>
            </div>
          ))}
        </div>

        {/* MEETINGS */}
        <div style={s.section}>
          <div style={s.eyebrow}>מבנה הסדנה</div>
          <h2 style={s.sectionTitle}>שישה מפגשים,<br/>תהליך אחד.</h2>
          {CONTENT.meetings.map((m, i) => (
            <div key={i} style={s.meetingCard}>
              <div style={s.meetingHeader}>
                <span style={s.meetingNumPill}>{m.n}</span>
                <span style={s.meetingTitleRom}>{m.t}</span>
              </div>
              <div style={s.meetingDesc}>{m.d}</div>
            </div>
          ))}
        </div>

        {/* ABOUT */}
        <div style={s.aboutBlock}>
          <div style={s.aboutPortrait}>
            <img
              src="assets/v2-dana.jpeg"
              alt="דנה אסולין"
              style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 25%', display:'block', borderRadius:'50%'}}
            />
          </div>
          <div style={{fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 17, color: '#d4a594', marginBottom: 6}}>
            נעים להכיר
          </div>
          <h3 style={{fontFamily: '"Cormorant Garamond", serif', fontSize: 32, fontWeight: 400, margin: 0, marginBottom: 14}}>
            דנה אסולין
          </h3>
          <p style={{fontSize: 14.5, lineHeight: 1.7, color: 'rgba(251,244,235,0.85)', fontWeight: 300, margin: 0}}>
            דנה אסולין · צלמת, מרצה לקורסי צילום ומטפלת רגשית. עשור של צילומי בנות מצווה וניו בורן, בשילוב עם הכשרה רגשית.
          </p>
        </div>

        {/* TESTIMONIALS */}
        <div style={s.section}>
          <div style={s.eyebrow}>מהבנות, מהאמהות</div>
          <h2 style={s.sectionTitle}>מה שמספרות אחרי.</h2>
          {CONTENT.testimonials.map((tm, i) => (
            <div key={i} style={s.testCard}>
              <div style={s.testQuoteMark}>"</div>
              <div style={s.testQText}>{tm.q}</div>
              <div>
                <span style={s.testAuthor}>{tm.a}</span>
                <span style={s.testWho}>{tm.who}</span>
              </div>
            </div>
          ))}
        </div>

        {/* PRICING */}
        <div style={s.pricingBlock}>
          <div style={{fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 18, marginBottom: 8}}>
            ההשקעה
          </div>
          <div style={{fontFamily: '"Cormorant Garamond", serif', fontWeight: 300, fontSize: 64, lineHeight: 1, direction: 'ltr'}}>
            {t.price}
          </div>
          <div style={{fontFamily: '"Frank Ruhl Libre", serif', fontStyle: 'italic', fontSize: 15, marginTop: 8, color: 'rgba(251,244,235,0.85)'}}>
            לסדנה המלאה · 6 מפגשים<br/>קבוצה אינטימית של 6 נערות
          </div>
          <div style={{display: 'flex', justifyContent: 'center', gap: 6, marginTop: 16, fontFamily: '"DM Mono", monospace', fontSize: 10, letterSpacing: '0.12em', color: 'rgba(251,244,235,0.7)'}}>
            <span>{t.firstMeetingDay}</span>
            <span>·</span>
            <span style={{direction: 'ltr'}}>{t.firstMeetingTime}</span>
            <span>·</span>
            <span>{t.address}</span>
          </div>
        </div>

        {/* FAQ */}
        <div style={s.section}>
          <div style={s.eyebrow}>שאלות נפוצות</div>
          <h2 style={s.sectionTitle}>הכל מה שרציתן לדעת.</h2>
          {CONTENT.faqV2.map((f, i) => (
            <div key={i} style={s.faqCard}>
              <div style={{fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 19, color: '#3d2e2a', marginBottom: 6}}>
                {f.q}
              </div>
              <div style={{fontSize: 14, lineHeight: 1.55, color: 'rgba(61,46,42,0.7)', fontWeight: 300}}>
                {f.a}
              </div>
            </div>
          ))}
        </div>

        {/* FINAL CTA */}
        <div style={s.finalCta}>
          <div style={{fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: 17, color: '#c97a6b', marginBottom: 6}}>
            מספר המקומות מוגבל
          </div>
          <h3 style={{...s.sectionTitle, marginBottom: 24}}>תשרייני את המקום שלך.</h3>
          <a href={whatsappHref(t.whatsappText)} style={s.ctaPrimary}>
            <WaIcon />
            וואטסאפ לדנה
          </a>
        </div>
      </div>
    </MobileFrame>
  );
}

Object.assign(window, { V2Soft });
