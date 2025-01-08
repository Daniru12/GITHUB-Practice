import React from 'react'
import { Mail, Phone, MapPin, Home, Menu, Users, Star } from "lucide-react"

export default function KFCFooter() {
  return (
    <footer className="bg-white text-gray-600 py-10">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
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
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Menu</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Locations</a>
            </li>
            <li>
              <a href="#" className="hover:underline">About Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
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
      <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm">
        © 2023 KFC. All rights reserved.
      </div>
    </footer>
  )
}