import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  CheckCircle,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";
import ContactFooter from "../Components/ContactFooter";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the data to a server
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div>
      <div className="min-h-screen bg-white">
        {/* Hero Section with Background Image */}
        <header
          className="relative py-24 md:py-32 px-4 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://labartisan.net/demo/gowala/assets/css/bg-images/page-header1.jpg')`,
          }}
        >
          <div className="relative container mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
              We'd love to hear from you! Get in touch with our team for any
              questions, feedback, or to schedule a visit to our farm.
            </p>
          </div>
          {/* Breadcrumb Navigation */}
          {/* Breadcrumb Navigation */}
          <div className="relative container mx-auto text-center text-white">
            <nav className="flex items-center mt-5 justify-center text-center text-white text-sm md:text-base">
              <Link
                to="/"
                className="flex items-center hover:text-[#7CBA30] transition-colors"
              >
                <Home className="w-6 h-6 mr-1" />
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[#7CBA30]">Contact</span>
            </nav>
          </div>
        </header>

        {/* Contact Information Section */}
        <section className="py-12 px-4 bg-green-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300">
                <div className="flex justify-center mb-4">
                  <MapPin className="text-4xl text-[#7CBA30]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-700">123 Green Pastures Lane</p>
                <p className="text-gray-700">Countryside, CS 12345</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300">
                <div className="flex justify-center mb-4">
                  <Phone className="text-4xl text-[#7CBA30]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-700">Main: (555) 123-4567</p>
                <p className="text-gray-700">Farm Tours: (555) 123-4568</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300">
                <div className="flex justify-center mb-4">
                  <Mail className="text-4xl text-[#7CBA30]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-700">General: info@greendairy.com</p>
                <p className="text-gray-700">Orders: orders@greendairy.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="py-12 px-5 md:px-25">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-[#7CBA30] mb-6">
                  Send Us a Message
                </h2>

                {formSubmitted ? (
                  <div className="bg-green-100 border border-[#7CBA30] text-[#7CBA30] px-4 py-3 rounded mb-6 flex items-center">
                    <CheckCircle className="mr-2" />
                    <span>
                      Thank you for your message! We'll get back to you soon.
                    </span>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7CBA30]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7CBA30]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7CBA30]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7CBA30]"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="products">Products</option>
                      <option value="farm-tour">Farm Tour</option>
                      <option value="wholesale">Wholesale</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7CBA30]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#7CBA30] hover:bg-white hover:text-[#7CBA30] border border-[#7CBA30] text-white font-bold py-3 px-6 rounded-md transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Map Section */}
              <div>
                <h2 className="text-3xl font-bold text-[#7CBA30] mb-6">
                  Find Us
                </h2>
                <div className="bg-gray-200 rounded-lg overflow-hidden h-96 mb-6">
                  {/* Placeholder for map - in a real implementation, you would integrate Google Maps or similar */}
                  <div className="w-full h-full flex items-center justify-center bg-green-100">
                    <div className="text-center p-6">
                      <MapPin className="text-6xl text-[#7CBA30] mx-auto mb-4" />
                      <p className="text-gray-700">Interactive Map</p>
                      <p className="text-sm text-gray-500 mt-2">
                        123 Green Pastures Lane, Countryside, CS 12345
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Clock className="mr-2 text-[#7CBA30]" />
                    Farm Store Hours
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-12 px-4 bg-green-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#7CBA30] mb-6">
              Follow Us
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Stay connected with us on social media for the latest updates,
              farm news, and special offers!
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="bg-[#7CBA30] hover:bg-white text-white hover:text-[#7CBA30] p-3 rounded-full transition duration-300 transform hover:scale-110"
              >
                <Facebook className="text-2xl" />
              </a>
              <a
                href="#"
                className="bg-[#7CBA30] hover:bg-white text-white hover:text-[#7CBA30] p-3 rounded-full transition duration-300 transform hover:scale-110"
              >
                <Instagram className="text-2xl" />
              </a>
              <a
                href="#"
                className="bg-[#7CBA30] hover:bg-white text-white hover:text-[#7CBA30] p-3 rounded-full transition duration-300 transform hover:scale-110"
              >
                <Twitter className="text-2xl" />
              </a>
            </div>
          </div>
        </section>
      </div>
      <ContactFooter />
    </div>
  );
};

export default ContactUs;
