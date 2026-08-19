'use client';

import { useState, useEffect, useRef } from 'react';

const SAMPLE_TEXTS = {
  english: [
    "The Government of Chhattisgarh has introduced various initiatives to improve the education and employment sectors. Candidates preparing for Assistant Grade 3, Steno, and Data Entry Operator exams must practice daily. A high typing speed with exceptional accuracy is required to clear the skill test. Consistent practice is the key to success in any competitive examination.",
    "Data Entry Operators play a crucial role in maintaining digital records for government departments. The recruitment process often involves a rigorous typing skill test where candidates must demonstrate a minimum speed of 8000 key depressions per hour. Accuracy is strictly monitored, and errors can significantly reduce the final net words per minute score.",
    "Typing tests are designed to evaluate both your speed and precision. In many government exams, a backspace may be allowed, but relying on it too much will slow down your overall performance. It is always recommended to prioritize accuracy over raw speed during the initial stages of practice. Over time, muscle memory will help you type faster naturally."
  ],
  hindi: [
    "छत्तीसगढ़ राज्य में विभिन्न सरकारी योजनाओं के माध्यम से शिक्षा और रोजगार के अवसरों को बढ़ावा दिया जा रहा है। सहायक ग्रेड तीन और स्टेनो परीक्षा की तैयारी करने वाले छात्रों को प्रतिदिन टाइपिंग का अभ्यास करना चाहिए। कौशल परीक्षा उत्तीर्ण करने के लिए उच्च गति के साथ-साथ उत्कृष्ट सटीकता की भी आवश्यकता होती है। निरंतर अभ्यास ही सफलता की कुंजी है।",
    "डेटा एंट्री ऑपरेटर सरकारी विभागों के लिए डिजिटल रिकॉर्ड बनाए रखने में महत्वपूर्ण भूमिका निभाते हैं। भर्ती प्रक्रिया में अक्सर एक कठिन टाइपिंग कौशल परीक्षा शामिल होती है जिसमें उम्मीदवारों को न्यूनतम 8000 की-डिप्रेशन प्रति घंटे की गति प्रदर्शित करनी होती है। त्रुटियों की सख्ती से जांच की जाती है, और गलतियां आपके अंतिम स्कोर को काफी कम कर सकती हैं।",
    "कौशल परीक्षा आपकी गति और सटीकता दोनों का मूल्यांकन करने के लिए डिज़ाइन की गई है। कई सरकारी परीक्षाओं में बैकस्पेस की अनुमति हो सकती है, लेकिन इस पर बहुत अधिक निर्भर होने से आपका समग्र प्रदर्शन धीमा हो जाएगा। अभ्यास के शुरुआती चरणों के दौरान हमेशा गति से अधिक सटीकता को प्राथमिकता देने की सिफारिश की जाती है। समय के साथ गति स्वाभाविक रूप से बढ़ जाएगी।"
  ]
};

export default function TypingTest() {
  const [language, setLanguage] = useState<'english' | 'hindi'>('english');
  const [duration, setDuration] = useState<number>(60);
  const [userInput, setUserInput] = useState('');
  const [isTestActive, setIsTestActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [customPracticeText, setCustomPracticeText] = useState('');
  const [isMistakeMode, setIsMistakeMode] = useState(false);

  // Live Metrics
  const [liveMetrics, setLiveMetrics] = useState({ grossWpm: 0, netWpm: 0, accuracy: 0, kph: 0 });
  
  // End of test stats
  const [testCompleted, setTestCompleted] = useState(false);
  const [finalStats, setFinalStats] = useState({ grossWpm: 0, netWpm: 0, accuracy: 0, kph: 0, errorCount: 0 });
  const [mistakenWords, setMistakenWords] = useState<string[]>([]);
  
  // Local Progress
  const [bestScore, setBestScore] = useState({ wpm: 0, accuracy: 0, testsCompleted: 0 });
  const [isMounted, setIsMounted] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const getTargetText = () => {
    if (isMistakeMode && customPracticeText) return customPracticeText;
    return SAMPLE_TEXTS[language][currentTextIndex];
  };

  const targetText = getTargetText();

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem('cgssb_typing_progress');
    if (saved) {
      try {
        setBestScore(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTestActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        calculateLiveMetrics();
      }, 1000);
    } else if (timeLeft === 0 && isTestActive) {
      endTest();
    }
    return () => clearInterval(timer);
  }, [isTestActive, timeLeft, userInput]);

  const calculateLiveMetrics = () => {
    if (timeLeft === duration || userInput.length === 0) return;
    
    const timeSpentMinutes = (duration - timeLeft) / 60;
    const totalCharsTyped = userInput.length;
    
    const grossWpm = Math.round((totalCharsTyped / 5) / timeSpentMinutes) || 0;
    const kph = Math.round((totalCharsTyped / timeSpentMinutes) * 60) || 0;

    let correctChars = 0;
    let uncorrectedErrors = 0;
    
    const userWords = userInput.trim().split(/\s+/);
    const targetWords = targetText.split(/\s+/);

    for (let i = 0; i < totalCharsTyped; i++) {
      if (userInput[i] === targetText[i]) correctChars++;
    }

    for (let i = 0; i < userWords.length; i++) {
      if (userWords[i] !== targetWords[i]) uncorrectedErrors++;
    }

    const netWpm = Math.max(0, Math.round(grossWpm - (uncorrectedErrors / timeSpentMinutes))) || 0;
    const accuracy = totalCharsTyped > 0 ? Math.round((correctChars / totalCharsTyped) * 100) : 0;

    setLiveMetrics({ grossWpm, netWpm, accuracy, kph });
  };

  const startTest = () => {
    setUserInput('');
    setTimeLeft(duration);
    setTestCompleted(false);
    setLiveMetrics({ grossWpm: 0, netWpm: 0, accuracy: 0, kph: 0 });
    setMistakenWords([]);
    
    if (!isMistakeMode) {
      setCurrentTextIndex(Math.floor(Math.random() * SAMPLE_TEXTS[language].length));
    }
    
    setIsTestActive(true);
    setTimeout(() => {
      if (textareaRef.current) textareaRef.current.focus();
    }, 100);
  };

  const endTest = () => {
    setIsTestActive(false);
    setTestCompleted(true);
    
    const timeSpentMinutes = (duration - timeLeft) / 60 || (duration / 60);
    const totalCharsTyped = userInput.length;
    
    if (totalCharsTyped === 0) {
      // User didn't type anything
      setFinalStats({ grossWpm: 0, netWpm: 0, accuracy: 0, kph: 0, errorCount: 0 });
      setIsMistakeMode(false);
      return;
    }

    const grossWpm = Math.round((totalCharsTyped / 5) / timeSpentMinutes);
    const kph = Math.round((totalCharsTyped / timeSpentMinutes) * 60);

    const userWords = userInput.trim().split(/\s+/);
    const targetWords = targetText.split(/\s+/);
    
    let correctChars = 0;
    for (let i = 0; i < totalCharsTyped; i++) {
      if (userInput[i] === targetText[i]) correctChars++;
    }
    const accuracy = totalCharsTyped > 0 ? Math.round((correctChars / totalCharsTyped) * 100) : 0;

    let errors = 0;
    let mistakes = new Set<string>();
    
    for (let i = 0; i < userWords.length; i++) {
      if (userWords[i] !== targetWords[i] && targetWords[i]) {
        errors++;
        mistakes.add(targetWords[i].replace(/[.,]/g, ''));
      }
    }

    const netWpm = Math.max(0, Math.round(grossWpm - (errors / timeSpentMinutes)));

    setFinalStats({ grossWpm, netWpm, accuracy, kph, errorCount: errors });
    setMistakenWords(Array.from(mistakes).filter(w => w.length > 1));

    // Only update progress if not in mistake mode (to avoid padding stats with easy repetitive words)
    if (!isMistakeMode) {
      const newBestWpm = Math.max(bestScore.wpm, netWpm);
      const newBestAcc = Math.max(bestScore.accuracy, accuracy);
      const newTestsCount = bestScore.testsCompleted + 1;
      
      const newProgress = { wpm: newBestWpm, accuracy: newBestAcc, testsCompleted: newTestsCount };
      setBestScore(newProgress);
      localStorage.setItem('cgssb_typing_progress', JSON.stringify(newProgress));
    }
    
    setIsMistakeMode(false);
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isTestActive) return;
    
    const val = e.target.value;
    if (val.length <= targetText.length) {
      setUserInput(val);
    }
    
    if (val.length === targetText.length) {
      endTest();
    }
  };

  const handlePracticeMistakes = () => {
    if (mistakenWords.length === 0) return;
    
    let practiceArr = [];
    for(let i = 0; i < 40; i++) {
      practiceArr.push(mistakenWords[Math.floor(Math.random() * mistakenWords.length)]);
    }
    setCustomPracticeText(practiceArr.join(' ') + " "); // Add space at end so last word can be evaluated
    setIsMistakeMode(true);
    setTestCompleted(false);
    setTimeLeft(duration);
    setUserInput('');
    setIsTestActive(true);
    
    setTimeout(() => {
      if (textareaRef.current) textareaRef.current.focus();
    }, 100);
  };

  const resetTest = () => {
    setIsTestActive(false);
    setTestCompleted(false);
    setIsMistakeMode(false);
    setTimeLeft(duration);
    setUserInput('');
    setLiveMetrics({ grossWpm: 0, netWpm: 0, accuracy: 0, kph: 0 });
  };

  const formatTime = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
  };

  const renderSampleText = () => {
    return targetText.split('').map((char, index) => {
      let color = 'var(--text-main)';
      let backgroundColor = 'transparent';
      let borderBottom = 'none';

      if (index < userInput.length) {
        if (char === userInput[index]) {
          color = 'green';
        } else {
          color = 'white';
          backgroundColor = '#ef4444';
        }
      } else if (index === userInput.length && isTestActive) {
        // Current cursor position
        borderBottom = '3px solid var(--color-primary)';
      }

      return (
        <span key={index} style={{ color, backgroundColor, borderBottom, transition: 'all 0.1s' }}>
          {char}
        </span>
      );
    });
  };

  const fontStyle = language === 'hindi' ? 'Mangal, sans-serif' : 'var(--font-geist-mono), monospace';

  return (
    <div className="card" style={{ maxWidth: '1000px', margin: '0 auto', padding: '30px' }}>
      
      {/* Top Bar: Progress and Settings */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between', marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
        
        {/* Local Progress Indicator */}
        {isMounted && (
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center', backgroundColor: '#f0fdf4', padding: '10px 15px', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
            <span style={{ fontSize: '1.2rem' }}>🏆</span>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#166534', fontWeight: 'bold', textTransform: 'uppercase' }}>Your Best Score</div>
              <div style={{ fontSize: '1rem', color: '#15803d', fontWeight: '700' }}>{bestScore.wpm} WPM <span style={{ opacity: 0.6 }}>|</span> {bestScore.accuracy}% Acc</div>
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginLeft: 'auto' }}>
          <div style={{ display: 'flex', gap: '5px', backgroundColor: 'var(--card-bg-hover)', padding: '5px', borderRadius: '6px' }}>
            <button 
              onClick={() => { setLanguage('english'); resetTest(); }} 
              disabled={isTestActive}
              style={{ ...toggleBtnStyle, backgroundColor: language === 'english' ? 'var(--color-primary)' : 'transparent', color: language === 'english' ? 'white' : 'var(--text-main)', border: 'none' }}
            >
              English
            </button>
            <button 
              onClick={() => { setLanguage('hindi'); resetTest(); }} 
              disabled={isTestActive}
              style={{ ...toggleBtnStyle, backgroundColor: language === 'hindi' ? 'var(--color-primary)' : 'transparent', color: language === 'hindi' ? 'white' : 'var(--text-main)', border: 'none' }}
            >
              हिंदी (Mangal)
            </button>
          </div>

          <select 
            value={duration} 
            onChange={(e) => { setDuration(parseInt(e.target.value)); setTimeLeft(parseInt(e.target.value)); resetTest(); }}
            disabled={isTestActive}
            style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid var(--border-color)', outline: 'none', backgroundColor: 'var(--bg-body)', fontWeight: '600' }}
          >
            <option value={60}>1 Minute (Quick)</option>
            <option value={120}>2 Minutes</option>
            <option value={300}>5 Minutes (Exam)</option>
            <option value={600}>10 Minutes (Full Exam)</option>
          </select>
        </div>
      </div>

      {/* Live Dashboard */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '20px',
        backgroundColor: '#1e293b',
        color: 'white',
        padding: '15px 25px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ display: 'flex', gap: '30px' }}>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Net WPM</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#38bdf8' }}>{isTestActive ? liveMetrics.netWpm : '-'}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Accuracy</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#4ade80' }}>{isTestActive ? liveMetrics.accuracy + '%' : '-'}</div>
          </div>
          <div className="desktop-only">
            <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>KPH</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{isTestActive ? liveMetrics.kph : '-'}</div>
          </div>
        </div>
        
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>Time</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'monospace', color: timeLeft <= 10 ? '#f87171' : 'white' }}>
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>

      {/* Start/Reset Controls */}
      {!isTestActive && !testCompleted && (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button onClick={startTest} style={{...btnStyle, padding: '15px 40px', fontSize: '1.2rem', borderRadius: '50px', boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)'}}>
            {isMistakeMode ? 'Start Mistake Practice' : 'Start Typing Test'}
          </button>
        </div>
      )}

      {/* Hindi Keyboard Instruction */}
      {language === 'hindi' && !isTestActive && !testCompleted && (
        <div style={{ backgroundColor: '#fff7ed', borderLeft: '4px solid #f97316', padding: '15px', marginBottom: '20px', borderRadius: '4px', fontSize: '0.95rem' }}>
          <strong>महत्वपूर्ण निर्देश:</strong> यह एक असली परीक्षा वाला टाइपिंग टेस्ट है। कृपया टाइप करने के लिए अपने कंप्यूटर का <strong>Hindi Keyboard (Remington/Inscript)</strong> चालू करें (शॉर्टकट: <code>Alt + Shift</code>)। इंग्लिश टू हिंदी कन्वर्टर यहाँ काम नहीं करेगा।
        </div>
      )}

      {/* Main Testing Area */}
      {(!testCompleted || isTestActive) && (
        <div style={{ position: 'relative' }}>
          {/* Sample Text Display */}
          <div style={{ 
            padding: '25px', 
            backgroundColor: 'var(--color-secondary)', 
            border: '2px solid var(--border-color)', 
            borderRadius: '12px 12px 0 0',
            fontSize: language === 'hindi' ? '1.5rem' : '1.3rem',
            lineHeight: '1.8',
            userSelect: 'none',
            fontFamily: fontStyle,
            minHeight: '150px'
          }}>
            {renderSampleText()}
          </div>

          {/* Input Area */}
          <textarea
            ref={textareaRef}
            value={userInput}
            onChange={handleInput}
            disabled={!isTestActive}
            placeholder={isTestActive ? "Start typing here..." : ""}
            style={{
              width: '100%',
              height: '150px',
              padding: '25px',
              fontSize: language === 'hindi' ? '1.5rem' : '1.3rem',
              lineHeight: '1.8',
              border: '2px solid var(--border-color)',
              borderTop: 'none',
              borderRadius: '0 0 12px 12px',
              resize: 'none',
              outline: 'none',
              fontFamily: fontStyle,
              backgroundColor: isTestActive ? '#ffffff' : '#f8fafc',
              boxShadow: isTestActive ? 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)' : 'none',
              transition: 'all 0.2s'
            }}
          />
        </div>
      )}

      {/* Detailed Result Analysis Phase 1 */}
      {testCompleted && !isTestActive && (
        <div style={{ animation: 'fadeIn 0.5s ease' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>Test Completed!</h2>
            <p style={{ color: 'var(--text-muted)' }}>Here is your performance analysis.</p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '20px',
            marginBottom: '40px'
          }}>
            <div style={resultCardStyle}>
              <div style={resultLabelStyle}>Net Speed</div>
              <div style={resultValueStyle}>{finalStats.netWpm} <span style={{fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 'normal'}}>WPM</span></div>
            </div>
            <div style={resultCardStyle}>
              <div style={resultLabelStyle}>Gross Speed</div>
              <div style={{...resultValueStyle, color: 'var(--text-main)'}}>{finalStats.grossWpm} <span style={{fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 'normal'}}>WPM</span></div>
            </div>
            <div style={resultCardStyle}>
              <div style={resultLabelStyle}>Accuracy</div>
              <div style={{...resultValueStyle, color: finalStats.accuracy >= 95 ? '#16a34a' : '#ea580c'}}>{finalStats.accuracy}%</div>
            </div>
            <div style={resultCardStyle}>
              <div style={resultLabelStyle}>Key Depressions</div>
              <div style={{...resultValueStyle, color: 'var(--text-main)'}}>{finalStats.kph} <span style={{fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 'normal'}}>KPH</span></div>
            </div>
          </div>

          {/* Mistake Analysis Section */}
          <div style={{ backgroundColor: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '12px', padding: '25px', marginBottom: '30px' }}>
            <h3 style={{ color: '#be123c', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>⚠️</span> Mistake Analysis
            </h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <p style={{ color: '#881337', marginBottom: '10px' }}>
                  You made <strong>{finalStats.errorCount}</strong> word errors during this test.
                </p>
                {mistakenWords.length > 0 ? (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                    {mistakenWords.slice(0, 10).map((word, idx) => (
                      <span key={idx} style={{ backgroundColor: '#ffe4e6', color: '#be123c', padding: '4px 10px', borderRadius: '4px', fontSize: '0.9rem', fontWeight: '500' }}>
                        {word}
                      </span>
                    ))}
                    {mistakenWords.length > 10 && <span style={{ color: '#be123c', padding: '4px' }}>+{mistakenWords.length - 10} more</span>}
                  </div>
                ) : (
                  <p style={{ color: '#15803d', fontWeight: 'bold' }}>Flawless! No mistakes detected.</p>
                )}
              </div>
              
              {mistakenWords.length > 0 && (
                <button 
                  onClick={handlePracticeMistakes}
                  style={{ ...btnStyle, backgroundColor: '#be123c', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>🔄</span> Practice My Mistakes
                </button>
              )}
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button onClick={resetTest} style={{ ...btnStyle, backgroundColor: 'var(--text-main)', padding: '12px 30px' }}>
              Take Another Test
            </button>
          </div>

        </div>
      )}

      {/* Global Animation for results */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}

const btnStyle = {
  padding: '10px 24px',
  backgroundColor: 'var(--color-primary)',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontWeight: '600',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'all 0.2s'
};

const toggleBtnStyle = {
  padding: '6px 14px',
  borderRadius: '4px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.2s'
};

const resultCardStyle = {
  padding: '25px 20px',
  backgroundColor: '#ffffff',
  border: '1px solid var(--border-color)',
  borderRadius: '12px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',
  alignItems: 'center'
};

const resultLabelStyle = {
  fontSize: '0.85rem',
  color: 'var(--text-muted)',
  textTransform: 'uppercase' as const,
  marginBottom: '8px',
  fontWeight: '600',
  letterSpacing: '0.5px'
};

const resultValueStyle = {
  fontSize: '2.8rem',
  fontWeight: '800',
  color: 'var(--color-primary)',
  lineHeight: '1'
};
