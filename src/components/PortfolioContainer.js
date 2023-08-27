import React, { useState } from 'react';

// Importing different components required for the application
import Nav from './Nav';      // Navigation bar component
import Header from './Header'; // Header component
import Footer from './Footer'; // Footer component

// Importing different pages of the application
import About from './pages/About';       // About page component
import Portfolio from './pages/Portfolio'; // Portfolio page component
import Resume from './pages/Resume';     // Resume page component
import Contact from './pages/Contact';   // Contact page component

// Importing CSS styles for the pages
import "./css/page.css"; // Page styles

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home'); // State to manage the current page

    // This function determines which component to render based on the value of 'currentPage'.
    const renderPage = () => {
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        // If 'currentPage' is not 'Contact', 'Portfolio', or 'Resume', the About page is rendered by default.
        return <About />;
    };

    // Function to handle changes in the current page.
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} /> {/* Navigation bar */}
            <Header /> {/* Header component */}
            {renderPage()} {/* Rendering the appropriate page */}
            <Footer /> {/* Footer component */}
        </div>
    );
}
