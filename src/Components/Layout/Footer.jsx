import React from "react";

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 flex justify-center items-center bg-transparent p-4">
            <p className="text-gray-600 text-center">
                &copy; {new Date().getFullYear()} All rights reserved.
                <br />
                Developed by Somya Bhatnagar
            </p>
        </footer>
    );
}

export default Footer;
