import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-700 bg-gray-900/50 backdrop-blur mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span>🦞</span>
              <span>SalesLobster</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Salesforce automation at a fraction of the cost. Replace Agentforce with SalesLobster.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/features" className="hover:text-lobster transition">Features</Link></li>
              <li><Link href="/calculator" className="hover:text-lobster transition">ROI Calculator</Link></li>
              <li><Link href="/pricing" className="hover:text-lobster transition">Pricing</Link></li>
              <li><a href="#" className="hover:text-lobster transition">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-lobster transition">About</Link></li>
              <li><a href="#" className="hover:text-lobster transition">Blog</a></li>
              <li><a href="#" className="hover:text-lobster transition">Docs</a></li>
              <li><a href="#" className="hover:text-lobster transition">Status</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-lobster transition" title="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-lobster transition" title="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-lobster transition" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@saleslobster.com" className="text-gray-400 hover:text-lobster transition" title="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} SalesLobster. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-lobster transition">Privacy Policy</a>
              <a href="#" className="hover:text-lobster transition">Terms of Service</a>
              <a href="#" className="hover:text-lobster transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
