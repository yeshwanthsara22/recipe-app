import React, { useRef } from "react";
import HomePage from "./HomePage";

const Page: React.FC = () => {
  const contactRef = useRef<HTMLElement | null>(null); // Create a reference to the "Contact Us" section

  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the "Contact Us" section
    }
  };

  return (
    <>
      <HomePage></HomePage>
      {/* <div>
        <header>
          <h1>Welcome to Our Website</h1>
          <nav>
            
            <button onClick={handleScrollToContact}>Contact Us</button>
          </nav>
        </header>

        <main>
          <section>
            <h2>About Us</h2>
            <p>This is the about us section of the website.</p>
          </section>

          <section>
            <h2>Services</h2>
            <p>Here are the services we offer.</p>
          </section>
        </main>

        
        <footer>
          <section ref={contactRef}>
            {" "}
            
            <h2>Contact Us</h2>
            <p>
              Address: 123 Main Street, City, Country <br />
              Phone: +123 456 7890 <br />
              Email: contact@ourwebsite.com
            </p>
          </section>
        </footer>
      </div> */}
    </>
  );
};

export default Page;
