import React from "react";
import Link from "next/link";

const services = [
    {
        name: 'Reminders+',
        link: 'https://github.com/SiddhantMadhur/remindersplus'
    },
    {
        name: 'Sid\'s Password Manager',
        link: 'https://github.com/SiddhantMadhur/remindersplus'
    }
]

const company = [
    {
        name: 'About Us',
        link: '/aboutus'
    },
    {
        name: 'Instagram',
        link: 'https://instagram.com/wearetecna'
    },
    {
        name: 'Developers',
        link: '/developers'
    }
]

function Footer() {
  return (
    <footer class="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span class="footer-title">Free Open-Source Apps</span>
        {
            services.map((doc, key)=>(
                <Link key={key} href={doc.link}>
                    <a target="_blank" className="link link-hover">{doc.name}</a>
                </Link>
            ))
        }
      </div>
      <div>
        <span class="footer-title">Company</span>
        {
            company.map((doc, key)=>(
                <Link key={key} href={doc.link}>
                    <a target="_blank" className="link link-hover">{doc.name}</a>
                </Link>
            ))
        }
      </div>
    </footer>
  );
}

export default Footer;
