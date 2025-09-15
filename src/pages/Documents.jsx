import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Eye, ZoomIn, ZoomOut, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import memorendum from '../assets/memorandum.pdf';
import directors from '../assets/directors.pdf';
import certificate from '../assets/certificate.pdf';

// PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Documents() {
  const documents = [
    { id: 1, title: 'Memorandum', description: 'Official company memorandum', file: memorendum },
    { id: 2, title: 'Board Of Directors', description: 'Company board of directors document', file: directors },
    { id: 3, title: 'Certificate', description: 'Certificate of incorporation', file: certificate },
  ];

  const [selectedPdf, setSelectedPdf] = useState(documents[0].file);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.2);
  const [fullscreen, setFullscreen] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));
  const nextPage = () => setPageNumber((prev) => Math.min(prev + 1, numPages));
  const prevPage = () => setPageNumber((prev) => Math.max(prev - 1, 1));
  const toggleFullscreen = () => setFullscreen((prev) => !prev);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 className="text-4xl sm:text-5xl font-bold text-zinc-900" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-500">Documents</span>
            </motion.h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-4">Preview our official company documents and certificates.</p>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Document List - 40% */}
          <motion.div
            className="col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">Available Documents</h2>
            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className={`border rounded-lg p-6 cursor-pointer transition-shadow ${
                    selectedPdf === doc.file
                      ? 'bg-green-50 border-green-600 shadow-md'
                      : 'bg-white border-slate-200 hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedPdf(doc.file)}
                >
                  <div className="flex items-center space-x-4">
                    <FileText
                      className={`h-8 w-8 ${
                        selectedPdf === doc.file ? 'text-green-700' : 'text-slate-400'
                      }`}
                    />
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-semibold ${
                          selectedPdf === doc.file ? 'text-green-700' : 'text-zinc-900'
                        }`}
                      >
                        {doc.title}
                      </h3>
                      <p
                        className={`${
                          selectedPdf === doc.file ? 'text-green-600' : 'text-slate-600'
                        }`}
                      >
                        {doc.description}
                      </p>
                    </div>
                    <Eye
                      className={`h-6 w-6 ${
                        selectedPdf === doc.file ? 'text-green-600' : 'text-slate-400'
                      }`}
                    />
                  </div>
                </div>

              ))}
            </div>
          </motion.div>

          {/* PDF Viewer - 60% */}
          <motion.div
            className="col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">PDF Preview</h2>
            {selectedPdf ? (
              <div className={`bg-white border border-slate-200 rounded-lg p-4 shadow-lg flex flex-col ${fullscreen ? 'fixed top-0 left-0 w-full h-full z-50 p-8' : ''}`}>
                {/* Controls */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-2">
                    <button onClick={zoomOut} className="p-2 bg-slate-100 rounded hover:bg-slate-200 text-black"><ZoomOut className="w-5 h-5" /></button>
                    <button onClick={zoomIn} className="p-2 bg-slate-100 rounded hover:bg-slate-200 text-black"><ZoomIn className="w-5 h-5" /></button>
                    <button onClick={prevPage} className="p-2 bg-slate-100 rounded hover:bg-slate-200 text-black"><ChevronLeft className="w-5 h-5" /></button>
                    <button onClick={nextPage} className="p-2 bg-slate-100 rounded hover:bg-slate-200 text-black"><ChevronRight className="w-5 h-5" /></button>
                  </div>
                  <button onClick={toggleFullscreen} className="p-2 bg-slate-100 rounded hover:bg-slate-200 text-black"><Maximize2 className="w-5 h-5" /></button>
                </div>

                {/* PDF Document */}
                <div className="flex-1 overflow-auto">
                  <Document file={selectedPdf} onLoadSuccess={onDocumentLoadSuccess} className="flex justify-center">
                    <Page pageNumber={pageNumber} scale={scale} className="mb-4" />
                  </Document>
                </div>

                <p className="text-center mt-2 text-slate-600">Page {pageNumber} of {numPages}</p>
              </div>
            ) : (
              <div className="bg-slate-100 border border-slate-200 rounded-lg p-12 text-center">
                <FileText className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600">Select a document to preview</p>
              </div>
            )}
          </motion.div>
        </div>

        </section>
      </main>
      <Footer />
    </div>
  );
}
