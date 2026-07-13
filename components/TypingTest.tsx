'use client';

import { useState, useEffect, useRef } from 'react';

const SAMPLE_TEXTS = {
  english: "Government jobs in Chhattisgarh require high typing speed and accuracy. Candidates preparing for Assistant Grade 3, Steno, and Data Entry Operator exams must practice daily to achieve the required speed of 5000 key depressions per hour. Focus on accuracy first, and speed will naturally follow. Consistent practice is the key to success in any typing examination.",
  hindi: "छत्तीसगढ़ में सरकारी नौकरियों के लिए उच्च टाइपिंग गति और सटीकता की आवश्यकता होती है। सहायक ग्रेड 3, स्टेनो और डाटा एंट्री ऑपरेटर परीक्षा की तैयारी करने वाले उम्मीदवारों को प्रति घंटे 5000 की-डिप्रेशन की आवश्यक गति प्राप्त करने के लिए प्रतिदिन अभ्यास करना चाहिए। पहले सटीकता पर ध्यान दें, और गति स्वाभाविक रूप से आ जाएगी।"
};

export default function TypingTest() {
  const [language, setLanguage] = useState<'english' | 'hindi'>('english');
  const [duration, setDuration] = useState<number>(60); // in seconds
  const [userInput, setUserInput] = useState('');
  const [isTestActive, setIsTestActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [stats, setStats] = useState({ wpm: 0, accuracy: 0, kph: 0, show: false });
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const currentSampleText = SAMPLE_TEXTS[language];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTestActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTestActive) {
      endTest();
    }
    return () => clearInterval(timer);
  }, [isTestActive, timeLeft]);

  const startTest = () => {
    setUserInput('');
    setTimeLeft(duration);
    setStats({ wpm: 0, accuracy: 0, kph: 0, show: false });
    setIsTestActive(true);
    setTimeout(() => {
      if (textareaRef.current) textareaRef.current.focus();
    }, 100);
  };

  const endTest = () => {
    setIsTestActive(false);
    
    const totalChars = userInput.length;
    const timeSpentInMinutes = (duration - timeLeft) / 60 || (duration / 60);
    
    // WPM: 1 word = 5 characters
    const wpm = Math.round((totalChars / 5) / timeSpentInMinutes);
    
    // KPH (Key Depressions Per Hour)
    const kph = Math.round((totalChars / timeSpentInMinutes) * 60);

    // Accuracy
    let correctChars = 0;
    for (let i = 0; i < totalChars; i++) {
      if (userInput[i] === currentSampleText[i]) {
        correctChars++;
      }
    }
    const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 0;

    setStats({ wpm, accuracy, kph, show: true });
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isTestActive) return;
    
    const val = e.target.value;
    if (val.length <= currentSampleText.length) {
      setUserInput(val);
    }
    
    if (val.length === currentSampleText.length) {
      endTest();
    }
  };

  const handleLanguageChange = (lang: 'english' | 'hindi') => {
    if (isTestActive) return;
    setLanguage(lang);
    setUserInput('');
    setStats(prev => ({ ...prev, show: false }));
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (isTestActive) return;
    const newDuration = parseInt(e.target.value);
    setDuration(newDuration);
    setTimeLeft(newDuration);
  };

  const renderSampleText = () => {
    return currentSampleText.split('').map((char, index) => {
      let color = 'var(--text-main)';
      let backgroundColor = 'transparent';

      if (index < userInput.length) {
        if (char === userInput[index]) {
          color = 'green';
        } else {
          color = 'white';
          backgroundColor = '#ef4444'; // red
        }
      }

      return (
        <span key={index} style={{ color, backgroundColor, transition: 'all 0.1s' }}>
          {char}
        </span>
      );
    });
  };

  const fontStyle = language === 'hindi' ? 'Mangal, sans-serif' : 'var(--font-geist-mono), monospace';

  return (
    <div className="card" style={{ maxWidth: '900px', margin: '0 auto' }}>
      
      {/* Settings Bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between', marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => handleLanguageChange('english')} 
            disabled={isTestActive}
            style={{ ...toggleBtnStyle, backgroundColor: language === 'english' ? 'var(--color-primary)' : 'var(--color-secondary)', color: language === 'english' ? 'white' : 'var(--text-main)' }}
          >
            English
          </button>
          <button 
            onClick={() => handleLanguageChange('hindi')} 
            disabled={isTestActive}
            style={{ ...toggleBtnStyle, backgroundColor: language === 'hindi' ? 'var(--color-primary)' : 'var(--color-secondary)', color: language === 'hindi' ? 'white' : 'var(--text-main)' }}
          >
            हिंदी (Mangal)
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label style={{ fontWeight: '600' }}>Time:</label>
          <select 
            value={duration} 
            onChange={handleDurationChange}
            disabled={isTestActive}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid var(--border-color)', outline: 'none' }}
          >
            <option value={60}>1 Minute</option>
            <option value={120}>2 Minutes</option>
            <option value={300}>5 Minutes</option>
          </select>
        </div>

      </div>

      {/* Top Bar: Timer and Control */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
          Time Left: <span style={{ color: timeLeft <= 10 ? 'red' : 'var(--color-primary)' }}>{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</span>
        </div>
        {!isTestActive && !stats.show ? (
          <button onClick={startTest} style={btnStyle}>Start Test</button>
        ) : (
          <button onClick={() => { setIsTestActive(false); setTimeLeft(duration); setUserInput(''); setStats(prev => ({...prev, show: false})); }} style={resetBtnStyle}>Reset / Restart</button>
        )}
      </div>

      {/* Hindi Keyboard Instruction */}
      {language === 'hindi' && (
        <div style={{ backgroundColor: '#fff7ed', borderLeft: '4px solid #f97316', padding: '15px', marginBottom: '20px', borderRadius: '4px', fontSize: '0.95rem' }}>
          <strong>महत्वपूर्ण निर्देश:</strong> यह एक असली परीक्षा वाला टाइपिंग टेस्ट है। कृपया टाइप करने के लिए अपने कंप्यूटर का <strong>Hindi Keyboard (Remington/Inscript)</strong> चालू करें (शॉर्टकट: <code>Alt + Shift</code>)। इंग्लिश टू हिंदी कन्वर्टर यहाँ काम नहीं करेगा।
        </div>
      )}

      {/* Sample Text Display */}
      <div style={{ 
        padding: '20px', 
        backgroundColor: 'var(--color-secondary)', 
        border: '1px solid var(--border-color)', 
        borderRadius: 'var(--border-radius)',
        fontSize: language === 'hindi' ? '1.4rem' : '1.2rem',
        lineHeight: '1.8',
        marginBottom: '20px',
        userSelect: 'none',
        fontFamily: fontStyle
      }}>
        {renderSampleText()}
      </div>

      {/* Input Area */}
      <textarea
        ref={textareaRef}
        value={userInput}
        onChange={handleInput}
        disabled={!isTestActive}
        placeholder={isTestActive ? "Start typing here..." : "Click 'Start Test' to begin"}
        style={{
          width: '100%',
          height: '150px',
          padding: '20px',
          fontSize: language === 'hindi' ? '1.4rem' : '1.2rem',
          lineHeight: '1.8',
          border: '2px solid var(--border-color)',
          borderRadius: 'var(--border-radius)',
          resize: 'none',
          outline: 'none',
          fontFamily: fontStyle,
          backgroundColor: isTestActive ? 'white' : '#f1f5f9'
        }}
      />

      {/* Results */}
      {stats.show && (
        <div style={{ 
          marginTop: '30px', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
          gap: '20px',
          textAlign: 'center'
        }}>
          <div style={resultCardStyle}>
            <div style={resultLabelStyle}>Speed (WPM)</div>
            <div style={resultValueStyle}>{stats.wpm}</div>
          </div>
          <div style={resultCardStyle}>
            <div style={resultLabelStyle}>Accuracy</div>
            <div style={resultValueStyle}>{stats.accuracy}%</div>
          </div>
          <div style={resultCardStyle}>
            <div style={resultLabelStyle}>Key Depressions (KPH)</div>
            <div style={resultValueStyle}>{stats.kph}</div>
          </div>
        </div>
      )}
    </div>
  );
}

const btnStyle = {
  padding: '10px 24px',
  backgroundColor: 'var(--color-primary)',
  color: 'white',
  border: 'none',
  borderRadius: 'var(--border-radius)',
  fontWeight: '600',
  fontSize: '1rem',
  cursor: 'pointer'
};

const resetBtnStyle = {
  ...btnStyle,
  backgroundColor: '#ef4444'
};

const toggleBtnStyle = {
  padding: '8px 16px',
  border: '1px solid var(--border-color)',
  borderRadius: '4px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.2s'
};

const resultCardStyle = {
  padding: '20px',
  backgroundColor: 'var(--color-secondary)',
  border: '1px solid var(--border-color)',
  borderRadius: 'var(--border-radius)',
};

const resultLabelStyle = {
  fontSize: '0.9rem',
  color: 'var(--text-muted)',
  textTransform: 'uppercase' as const,
  marginBottom: '5px',
  fontWeight: '600'
};

const resultValueStyle = {
  fontSize: '2.5rem',
  fontWeight: '700',
  color: 'var(--color-primary)'
};
