'use client';

import { useState, useRef } from 'react';

export default function PhotoResizer() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [resizedDataUrl, setResizedDataUrl] = useState<string | null>(null);
  const [quality, setQuality] = useState<number>(0.8);
  const [targetWidth, setTargetWidth] = useState<number>(400); // Vyapam/CGPSC standard approx width

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResizedDataUrl(null);
    }
  };

  const handleResize = () => {
    if (!previewUrl || !canvasRef.current) return;

    const img = new Image();
    img.src = previewUrl;
    img.onload = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Calculate new dimensions (maintain aspect ratio)
      const scaleFactor = targetWidth / img.width;
      const newHeight = img.height * scaleFactor;

      canvas.width = targetWidth;
      canvas.height = newHeight;

      // Draw and compress
      ctx.drawImage(img, 0, 0, targetWidth, newHeight);
      
      // Output as JPEG with selected quality to compress size
      const dataUrl = canvas.toDataURL('image/jpeg', quality);
      setResizedDataUrl(dataUrl);
    };
  };

  // Helper to estimate file size from base64
  const estimateSizeInKb = (base64String: string) => {
    const stringLength = base64String.length - 'data:image/jpeg;base64,'.length;
    const sizeInBytes = 4 * Math.ceil((stringLength / 3)) * 0.5624896334383812;
    return (sizeInBytes / 1024).toFixed(2);
  };

  return (
    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
      
      {/* File Selection */}
      <div style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px' }}>Upload Photo or Signature (JPG/PNG)</label>
        <input 
          type="file" 
          accept="image/*"
          onChange={handleFileChange}
          style={{ width: '100%', padding: '10px', border: '1px dashed var(--color-primary)', borderRadius: '4px' }}
        />
      </div>

      {/* Settings */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px' }}>Target Width (px)</label>
          <input 
            type="number" 
            value={targetWidth} 
            onChange={(e) => setTargetWidth(Number(e.target.value))}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid var(--border-color)' }}
          />
          <small style={{ color: 'var(--text-muted)' }}>CGSSB forms usually prefer ~400px width.</small>
        </div>
        <div>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '5px' }}>Compression Level</label>
          <input 
            type="range" 
            min="0.1" max="1" step="0.1" 
            value={quality} 
            onChange={(e) => setQuality(Number(e.target.value))}
            style={{ width: '100%', marginTop: '10px' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <span>Low Size (Blurry)</span>
            <span>High Size (Clear)</span>
          </div>
        </div>
      </div>

      <button 
        onClick={handleResize} 
        disabled={!selectedFile}
        style={{ 
          width: '100%', 
          padding: '12px', 
          backgroundColor: selectedFile ? 'var(--color-primary)' : 'var(--text-muted)', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          fontWeight: '600',
          cursor: selectedFile ? 'pointer' : 'not-allowed',
          marginBottom: '20px'
        }}
      >
        Resize & Compress
      </button>

      {/* Hidden Canvas for processing */}
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

      {/* Output Results */}
      {resizedDataUrl && (
        <div style={{ backgroundColor: 'var(--color-secondary)', padding: '20px', borderRadius: '4px', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '15px', color: 'green' }}>✅ Successfully Compressed!</h3>
          <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>
            Estimated New Size: <span style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>{estimateSizeInKb(resizedDataUrl)} KB</span>
          </p>
          
          <div style={{ border: '1px solid var(--border-color)', display: 'inline-block', padding: '10px', backgroundColor: 'white', marginBottom: '15px' }}>
            <img src={resizedDataUrl} alt="Resized output" style={{ maxWidth: '100%' }} />
          </div>

          <div>
            <a 
              href={resizedDataUrl} 
              download={`cgssb-ready-${selectedFile?.name || 'image'}.jpg`}
              style={{
                display: 'inline-block',
                padding: '10px 24px',
                backgroundColor: 'green',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: '600'
              }}
            >
              ⬇️ Download Resized Image
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
