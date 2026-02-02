# SalesLobster Website

The official website for **SalesLobster** — Salesforce automation at a fraction of the cost of Agentforce.

## 🦞 About SalesLobster

SalesLobster replaces Salesforce Agentforce at **95% savings** and includes:

- **ROI Calculator** - Interactive calculator showing exact savings
- **Order Chat Demo** - AI-powered order tracking chatbot for customers
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
│   ├── _app.js              # Next.js app wrapper
│   ├── _document.js         # HTML document wrapper
│   ├── index.js             # Homepage
│   ├── calculator.js        # ROI Calculator page
│   ├── order-chat.js        # Order Chat demo page
│   ├── features.js          # Features page
│   ├── about.js             # About & Mission page
│   ├── contact.js           # Contact page
│   └── api/
│       └── chat.js          # Chat API endpoint (demo)
├── components/
│   ├── Navigation.js        # Top navigation bar
│   ├── Footer.js            # Footer with links
│   ├── Hero.js              # Reusable hero section
│   └── OrderChat.js         # Order chat component
├── styles/
│   └── globals.css          # Global styles & Tailwind
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
└── next.config.js           # Next.js configuration
```

## 🎨 Design Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Font**: Inter (Google Fonts)

## 📄 Pages

### Homepage (`/`)
- Hero section with clear value prop: "Replace Agentforce at 95% Savings"
- 6 key features with icons and descriptions
- 4 use cases with ROI impact metrics
- Head-to-head comparison with Agentforce
- Customer testimonials (3)
- Dual CTA cards (ROI Calculator + Order Chat Demo)
- Multiple CTAs to both tools

### ROI Calculator (`/calculator`)
- Interactive team size slider (10-1,000 SDRs)
- Projection period selector (3 months to 3 years)
- Real-time cost calculations and comparisons
- Line chart: Monthly cost trend
- Pie chart: Total cost breakdown
- Use case breakdowns with ROI impact
- Feature comparison table
- Mobile responsive
- Links to contact page and features

### Order Chat Demo (`/order-chat`) 
**NEW** - Interactive demo of the order tracking chatbot
- Try live chat with demo orders (ORD-00001 through ORD-00004)
- See how Order Chat integrates with Salesforce Order__c
- Shows 4 key benefits with metrics
- How it works (4-step process)
- Integration details (setup time, required fields)
- Typical cost savings ($145k/year example)
- Links to ROI calculator to quantify savings

### Features (`/features`)
- 6 detailed feature cards (including Order Chat)
- 6 key capabilities (multi-channel, no lock-in, pay-per-use, etc.)
- Complete feature comparison table (SalesLobster vs Agentforce vs Manual)
- 3 pricing tiers (Starter, Professional, Enterprise)
- Contact for custom pricing

### About/Mission (`/about`)
- Mission statement and company vision
- 4 core values with icons
- Team section with 4 members and bios
- Company timeline (5 milestones)
- Recognition & awards
- Key statistics (500+ customers, $50M+ saved, 95% retention)

### Contact (`/contact`)
- Fully functional contact form
- 3 contact methods (email, live chat, phone)
- 6-item FAQ section
- 3 office locations
- Quick response guarantee info

## 🔧 Configuration

### Environment Variables
None required for development. For production, create `.env.local` if needed:

```
NEXT_PUBLIC_SITE_URL=https://saleslobster.com
```

### Tailwind Colors
Custom colors defined in `tailwind.config.js`:
- `lobster`: #FF6B35 (primary orange)
- `lobster-dark`: #D94520 (darker orange)
- `lobster-light`: #FFB84D (lighter orange)

## 🔌 API Integration

### Chat API (`/api/chat`)
The Order Chat Demo uses a mock API for demo purposes. In production:

1. **Option 1: Use Real Backend**
   - Deploy the `saleslobster-order-chat` backend API
   - Point the chat component to your deployed API
   - Set environment variable: `NEXT_PUBLIC_CHAT_API=https://your-api.com`

2. **Option 2: Serverless Function**
   - Deploy `api/chat.js` to Vercel as a serverless function
   - Automatically available at `/api/chat`
   - Requires connecting to Salesforce + OpenAI

### Demo Orders
The demo chat comes with built-in test orders:
- `ORD-00001` - Delivered order
- `ORD-00002` - Shipped order  
- `ORD-00003` - Processing order
- `ORD-00004` - Draft order

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Docker

```bash
docker build -t saleslobster-website .
docker run -p 3000:3000 saleslobster-website
```

### Deploy to GitHub Pages

```bash
npm run export
# Then push the `out/` directory to gh-pages branch
```

## 📝 Content Updates

### Update ROI Calculator Data
Edit pricing data in `/pages/calculator.js`:
```javascript
const pricingData = {
  agentforce: { ... },
  saleslobster: { ... },
  useCases: [ ... ]
}
```

### Update Order Chat Demo Orders
Edit demo orders in `/pages/api/chat.js`:
```javascript
const DEMO_ORDERS = {
  'ORD-00001': { ... },
  // ...
}
```

### Update Team Members
Edit the `team` array in `/pages/about.js`

### Update Testimonials
Edit the `testimonials` array in `/pages/index.js`

### Update Navigation Links
Edit the `links` array in `/components/Navigation.js`

## 📊 Features Summary

| Feature | Pages | Details |
|---------|-------|---------|
| ROI Calculator | `/calculator` | Real-time cost calculations, charts, comparisons |
| Order Chat Demo | `/order-chat` | Live chat, demo orders, Salesforce integration info |
| Features | `/features` | All capabilities, comparison table, pricing |
| About | `/about` | Mission, team, timeline, stats |
| Contact | `/contact` | Form, contact methods, FAQ, offices |
| Navigation | All | Sticky header, mobile menu, badges |
| Footer | All | Product links, company links, social, legal |

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
- Chat demo powered by mock API (production version uses [OpenAI](https://openai.com/) + [Salesforce](https://salesforce.com/))

---

**🦞 SalesLobster — Salesforce Automation at a Fraction of the Cost**

Save 95% on Salesforce automation. Includes ROI Calculator and Order Chat Demo.

[Get Started Free](https://saleslobster.com) | [Try Order Chat](https://saleslobster.com/order-chat) | [See Savings](https://saleslobster.com/calculator)
