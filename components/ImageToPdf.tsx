'use client';

import { useState } from 'react';
import jsPDF from 'jspdf';

export default function ImageToPdf() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setPdfUrl(null);
    }
  };

  const generatePdf = async () => {
    if (!previewUrl || !selectedFile) return;
    setIsProcessing(true);

    try {
      // Load image to get dimensions
      const img = new Image();
      img.src = previewUrl;
      
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      // Create PDF based on image aspect ratio
      // Standard A4 is 210x297 mm. We will use the image's orientation to decide page orientation.
      const orientation = img.width > img.height ? 'l' : 'p';
      const pdf = new jsPDF({
        orientation: orientation,
        unit: 'px',
        format: [img.width, img.height] // Exactly the size of the image to prevent blurring
      });

      // Add image to PDF
      pdf.addImage(img.src, 'JPEG', 0, 0, img.width, img.height);
      
      // Generate Blob URL for download
      const pdfBlob = pdf.output('blob');
      const url = URL.createObjectURL(pdfBlob);
      setPdfUrl(url);

    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try a different image.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
      
      <div style={{ marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px' }}>Upload Image/Document (JPG/PNG)</label>
        <input 
          type="file" 
          accept="image/*"
          onChange={handleFileChange}
          style={{ width: '100%', padding: '10px', border: '1px dashed var(--color-primary)', borderRadius: '4px' }}
        />
      </div>

      <button 
        onClick={generatePdf} 
        disabled={!selectedFile || isProcessing}
        style={{ 
          width: '100%', 
          padding: '14px', 
          backgroundColor: selectedFile && !isProcessing ? 'var(--color-primary)' : 'var(--text-muted)', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          fontWeight: '600',
          fontSize: '1.1rem',
          cursor: selectedFile && !isProcessing ? 'pointer' : 'not-allowed',
          marginBottom: '20px'
        }}
      >
        {isProcessing ? 'Converting to PDF...' : 'Convert to PDF'}
      </button>

      {pdfUrl && (
        <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', padding: '20px', borderRadius: '4px', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '15px', color: '#166534' }}>✅ PDF Generated Successfully!</h3>
          <a 
            href={pdfUrl} 
            download={`cgssb-doc-${selectedFile?.name.split('.')[0] || 'document'}.pdf`}
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#16a34a',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}
          >
            ⬇️ Download PDF
          </a>
        </div>
      )}

      {/* Image Preview (Optional, just to show what was selected) */}
      {previewUrl && !pdfUrl && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '10px' }}>Image Preview:</p>
          <img src={previewUrl} alt="Preview" style={{ maxWidth: '200px', border: '1px solid var(--border-color)', borderRadius: '4px' }} />
        </div>
      )}
      
    </div>
  );
}
