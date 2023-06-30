import React from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
const PDFViewer = ({ pdfUrl }) => {
  const embeddedUrl = `https://drive.google.com/viewerng/viewer?embedded=true&url=${encodeURIComponent(pdfUrl)}`;

  return (
    <div>
    <Document file={pdfUrl}>
      <Page pageNumber={1} width={800} />
    </Document>
  </div>
  );
};

export default PDFViewer;

