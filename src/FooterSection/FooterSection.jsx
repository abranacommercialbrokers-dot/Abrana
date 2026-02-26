import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const FooterSection = () => {
    return (
        <footer className="bg-white pt-20 pb-8 px-6 border-t border-gray-900">
            <div className="container mx-auto grid md:grid-cols-4 gap-12">
                <div className="col-span-1">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-gray-900 rounded-lg"></div>
                        <span className="text-2xl font-bold text-black">Abrana Commercial Brokers</span>
                    </div>
                    <p className="text-black text-sm leading-relaxed mb-6">
                        We help businesses and individuals navigate opportunities through structured coordination, reliable advisory services, and efficient operational support, all delivered with a strong commitment to transparency, compliance, and trust.
                    </p>
                    <div className="flex gap-3">
                        {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
                            <Icon key={i} size={18} className="text-black cursor-pointer hover:gray-900" />
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-black">Services</h4>
                    <ul className="text-black text-sm space-y-3">
                        <li>Commercial Brokerage </li>
                        <li>Insurance Services</li>
                        <li>Tourism & Leisure Consulting</li>
                        <li>E-Commerce Services</li>
                        <li>Combined Office Administrative Services</li>
                        <li>Management Consultancy</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-black">Support</h4>
                    <ul className="text-black text-sm space-y-3">
                        <li>Help Center</li>
                        <li>FAQ</li>
                        <li>Ticket Support</li>
                        <li>Sales Support</li>
                        <li>Contact us</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-black">Company</h4>
                    <ul className="text-black text-sm space-y-3">
                        <li>About us</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Article & News</li>
                        <li>Legal Notices</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto mt-20 pt-8 border-t border-gray-900 flex flex-col md:row-between md:flex-row justify-between text-gray-500 text-xs">
                <p>Copyright © 2026 Abrana Commercial Brokers. All rights reserved. Powered by Hamza Ali .</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <span>Term of use</span>
                    <span>Privacy Policy</span>
                    <span>Cookie Policy</span>
                </div>
            </div>

        </footer>
    );
};

export default FooterSection;