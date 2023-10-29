import React from 'react';

const UserDashboard = () => {
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
    <>
       <h2 className='text-center font-extrabold'>User Dashboard</h2>
    <div className='row my-12'>
      <div className='col-6 flex justify-center items-center flex-col'>
        <h3>Purchased PDFs</h3>
        <ul>
          {pdfs.map((pdf, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {
              pdf.status===1 ? (<div style={{ display: 'flex', alignItems: 'center' }}>
              {pdf.status===1 ? (<i title='unlocked' class="fa-solid fa-unlock text-green-600"></i>) : (<i title='locked' class="fa-solid fa-lock text-red-700"></i>)}
              <img className='ml-4' src="https://cdn-icons-png.flaticon.com/512/9496/9496432.png?ga=GA1.1.877150888.1686539129" alt="PDF Icon" style={{ marginRight: '10px', width: '30px', height: '30px' }} />     
              {
                pdf.status===0 ? (
                <a title='Please purchase first' href={false} target="_blank" rel="noopener noreferrer">
                {pdf.name} 
                </a>
                ):(<a href={pdf.file} target="_blank" rel="noopener noreferrer">
                {pdf.name} 
                </a>)
              
              }
            </div>) : ('')
            }
          </li>
        ))}
        </ul>
      </div>
      <div className='col-6 flex justify-center items-center flex-col'>
        <h3>Account Settings</h3>
        <form>
          <label>
            Update Email:
            <input type="email" className="form-control" />
          </label>
          <br />
          <label>
            Change Password:
            <input type="password" className="form-control" />
          </label>
          <br />
          <button  className='btn navbtn' type="submit">Save Changes</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default UserDashboard;
