# SalesLobster Website

The official website for **SalesLobster** — Salesforce automation at a fraction of the cost of Agentforce.

## 🦞 About SalesLobster

SalesLobster replaces Salesforce Agentforce at **95% savings**. We automate:

- Meeting notes processing
- Meeting prep briefing
- Apex code generation & deployment
- Real-time CRM logging
- Multi-channel integrations (Slack, Teams, Discord, email)

**No Data Cloud required. No vendor lock-in. Just honest software.**

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/saleslobster/saleslobster-website.git
cd saleslobster-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
saleslobster-website/
├── pages/
│   ├── _app.js           # Next.js app wrapper
│   ├── _document.js      # HTML document wrapper
│   ├── index.js          # Homepage
│   ├── calculator.js     # ROI Calculator page
│   ├── features.js       # Features page
│   ├── about.js          # About & Mission page
│   └── contact.js        # Contact page
├── components/
│   ├── Navigation.js     # Top navigation bar
│   ├── Footer.js         # Footer with links
│   └── Hero.js           # Reusable hero section
├── styles/
│   └── globals.css       # Global styles & Tailwind
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
└── next.config.js        # Next.js configuration
```

## 🎨 Design Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Font**: Inter (Google Fonts)

## 📄 Pages

### Homepage (`/`)
- Hero section with value prop
- 6 key features with icons
- 4 main use cases
- Head-to-head Agentforce comparison
- Testimonials from customers
- Strong CTA to ROI calculator

### ROI Calculator (`/calculator`)
- Interactive team size slider (10-1000 SDRs)
- Projection period selector (3mo - 3yr)
- Real-time cost comparison
- Line chart showing monthly costs
- Pie chart showing total cost
- Use case breakdowns
- Feature comparison matrix
- Mobile responsive

### Features (`/features`)
- 6 detailed feature cards
- 6 key capabilities
- Complete feature comparison table
- 3 pricing tiers
- FAQ about features

### About (`/about`)
- Company mission & values
- Team bios (4 core team members)
- Company timeline
- Recognition & awards
- Customer impact stats

### Contact (`/contact`)
- Contact form
- 3 contact methods (email, chat, phone)
- FAQ section (6 questions)
- Office locations
- Quick response guarantee

## 🔧 Configuration

### Environment Variables
None required for development. Create `.env.local` if needed:

```
NEXT_PUBLIC_SITE_URL=https://saleslobster.com
```

### Tailwind Colors
Custom colors defined in `tailwind.config.js`:
- `lobster`: #FF6B35 (primary orange)
- `lobster-dark`: #D94520 (darker orange)
- `lobster-light`: #FFB84D (lighter orange)

## 📊 Analytics

To add analytics, install your preferred provider:

```bash
npm install @vercel/analytics
```

Then import in `pages/_app.js`:

```javascript
import { Analytics } from '@vercel/analytics/react'
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

```bash
npm run export
# Then push the `out/` directory to gh-pages branch
```

### Docker

```bash
docker build -t saleslobster-website .
docker run -p 3000:3000 saleslobster-website
```

## 📝 Content Updates

### Update pricing data
Pricing is hardcoded in `/pages/calculator.js` for demo purposes. To use dynamic data:

1. Create `/public/pricing.json`
2. Fetch in useEffect in calculator page
3. Update state accordingly

### Update team members
Edit the `team` array in `/pages/about.js`

### Update testimonials
Edit the `testimonials` array in `/pages/index.js`

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

- **Docs**: [saleslobster.com/docs](https://saleslobster.com/docs)
- **Email**: hello@saleslobster.com
- **Chat**: [saleslobster.com/chat](https://saleslobster.com/chat)

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Charts with [Recharts](https://recharts.org/)

---

**🦞 SalesLobster — Salesforce Automation at a Fraction of the Cost**

Save 95% on Salesforce automation. No Data Cloud. No vendor lock-in. Just honest software.

[Get Started Free](https://saleslobster.com)
