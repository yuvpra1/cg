/**
 * Converts an image File to WebP format using HTML5 Canvas.
 * Returns a new File object in webp format.
 */
export async function convertToWebP(file: File, filenameSlug: string): Promise<File> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          return reject(new Error('Canvas context not available'));
        }
        ctx.drawImage(img, 0, 0);
        
        // Convert to WebP with 0.8 quality
        canvas.toBlob((blob) => {
          if (!blob) {
            return reject(new Error('Canvas toBlob failed'));
          }
          const finalName = filenameSlug ? `${filenameSlug}.webp` : `${file.name.split('.')[0]}.webp`;
          const webpFile = new File([blob], finalName, {
            type: 'image/webp',
            lastModified: Date.now(),
          });
          resolve(webpFile);
        }, 'image/webp', 0.8);
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = event.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}
