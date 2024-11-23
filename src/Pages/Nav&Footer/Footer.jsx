import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 border-t border-gray-300">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Introduction Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-sm">
              We are a leading company providing the best solutions for your
              needs. Dedicated to quality and excellence, our team works
              tirelessly to deliver unparalleled service.
            </p>
          </div>

          {/* Important Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Important Links</h2>
            <ul className="text-sm space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="text-sm space-y-2">
              <li>Email: info@example.com</li>
              <li>Phone: +1 234 567 89</li>
              <li>Address: 123, Business Street, City, Country</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center mt-10 border-t border-gray-300 pt-5">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved by Joy Sutradhar & Samit Raiyan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
