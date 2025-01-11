import React from 'react'
import { Mail, Phone, MapPin, Star } from "lucide-react"

export default function KFCFooter() {
  return (
    <footer className="py-10 text-gray-300 bg-black">
      <div className="container flex flex-col justify-between px-4 mx-auto md:px-8 md:flex-row">
        <div className="mb-8 md:mb-0">
          <h3 className="mb-4 text-xl font-bold">Contact Information</h3>
          <div className="flex items-center mb-2">
            <Phone className="w-5 h-5 mr-2" />
            <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
          </div>
          <div className="flex items-center mb-2">
            <Mail className="w-5 h-5 mr-2" />
            <a href="mailto:contact@kfc.com" className="hover:underline">contact@kfc.com</a>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            <address className="not-italic">123 KFC Street, Fast Food City, USA</address>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Menu</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Location</a>
            </li>
            <li>
              <a href="/about" className="hover:underline">About Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com/kfc" target="_blank" rel="noopener noreferrer">
              <Star className="w-6 h-6 hover:text-blue-600" />
            </a>
            <a href="https://twitter.com/kfc" target="_blank" rel="noopener noreferrer">
              <Star className="w-6 h-6 hover:text-blue-600" />
            </a>
            <a href="https://instagram.com/kfc" target="_blank" rel="noopener noreferrer">
              <Star className="w-6 h-6 hover:text-blue-600" />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-4 mt-8 text-sm text-center border-t border-gray-300">
        © 2023 KFC. All rights reserved.
      </div>
    </footer>
  )
}
