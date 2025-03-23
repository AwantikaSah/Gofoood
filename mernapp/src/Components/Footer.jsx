import React from "react";
import {link} from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <link
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          />
            <link className="bi" width="30" height="24"/>
             
            
          
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2025 GOFOOD, Inc
          </span>
        </div>

        
      </footer>
    </div>
  );
}
