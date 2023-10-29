import React from 'react';
import './PDFList.css'

const PDFList = () => {
  const pdfs = [
    { name: 'Sample PDF 1', file: 'PDFs/dummy (1).pdf', status: 1 },
    { name: 'Sample PDF 2', file: 'PDFs/dummy (1).pdf', status: 1 },
    { name: 'Sample PDF 3', file: 'PDFs/dummy (3).pdf', status: 0 },
    { name: 'Sample PDF 4', file: 'PDFs/dummy (4).pdf', status: 0 },
    { name: 'Sample PDF 5', file: 'PDFs/dummy (5).pdf', status: 0 },
    { name: 'Sample PDF 6', file: 'PDFs/dummy (6).pdf', status: 0 },
    { name: 'Sample PDF 7', file: 'PDFs/dummy (7).pdf', status: 0 },
    { name: 'Sample PDF 8', file: 'PDFs/dummy (8).pdf', status: 0 },
    { name: 'Sample PDF 9', file: 'PDFs/dummy (9).pdf', status: 0 },
    { name: 'Sample PDF 10', file: 'PDFs/dummy (10).pdf', status: 0 }
  ];

  return (
    <div className="container flex justify-center items-center flex-col my-12">
      <h2 className='font-bold my-4'>List of PDFs</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {pdfs.map((pdf, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{width:"150px"}}>
              {
                pdf.status===0 ? (<span>{<button  className='btn navbtn btn-sm mx-2'>Buy Now</button>}</span>): (<>{<span  className='purchasedBtn mx-2'>Purchased <i class="fa fa-check" aria-hidden="true"></i></span>}</>)
              }
              </div>
              {pdf.status===1 ? (<i title='unlocked' class="fa-solid fa-unlock text-green-600"></i>) : (<i title='locked' class="fa-solid fa-lock text-red-700"></i>)}
              <img className='ml-2' src="https://cdn-icons-png.flaticon.com/512/9496/9496432.png?ga=GA1.1.877150888.1686539129" alt="PDF Icon" style={{ marginRight: '10px', width: '30px', height: '30px' }} />     
              {
                pdf.status===0 ? (
                <a title='Please purchase first' href={false} target="_blank" rel="noopener noreferrer">
                {pdf.name}
                </a>
                ):(<a href={pdf.file} target="_blank" rel="noopener noreferrer">
                {pdf.name} 
                </a>)
              
              }
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PDFList;

