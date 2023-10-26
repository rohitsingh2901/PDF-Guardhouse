import React from 'react';

const PDFList = () => {
  const pdfs = ['sample1.pdf', 'sample2.pdf', 'sample3.pdf', 'sample4.pdf'];

  return (
    <div>
      <h2>List of PDFs</h2>
      <ul>
        {pdfs.map((pdf, index) => (
          <li key={index}>
            <a href={`PDFs/dummy (${index+1}).pdf`} target="_blank" rel="noopener noreferrer">
              {pdf}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PDFList;
