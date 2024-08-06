import React from 'react'

const Loader = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          border: 16px solid #f3f3f3;
          border-top: 16px solid #000000;
          border-radius: 50%;
          width: 100px;
          height: 100px;
          animation: spin 2s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
  
  export default Loader;
  

