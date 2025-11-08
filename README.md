# MD. Kiasat ul Mabood - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, TailwindCSS, and Lovable Cloud (Supabase).

## 🌟 Features

- **Modern Hero Section**: Gradient backgrounds with smooth animations
- **Responsive Design**: Mobile-first approach, works on all devices
- **Project Showcase**: Display your projects with detailed modals
- **Skills Section**: Animated skill bars showing proficiency levels
- **Contact Form**: Working contact form with email delivery
- **Admin Panel**: View and manage contact form submissions
- **Dark/Light Theme**: Persistent theme toggle
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🚀 Tech Stack

### Frontend
- **React 18** with TypeScript
- **TailwindCSS** for styling
- **Vite** for blazing fast builds
- **Shadcn/ui** for UI components
- **Lucide React** for icons

### Backend
- **Lovable Cloud** (Supabase)
- **PostgreSQL** database
- **Edge Functions** for serverless logic
- **Resend** for email delivery

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm

### Local Development

1. **Clone the repository**
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Variables**
The `.env` file is auto-configured with Lovable Cloud. Key variables:
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` - Supabase anon key
- `VITE_SUPABASE_PROJECT_ID` - Your project ID

4. **Start development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📧 Email Configuration

The contact form uses Resend for email delivery. Emails are sent to: **kiasatulmabood@gmail.com**

### Setting up Resend:
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use their test domain
3. Create an API key at [resend.com/api-keys](https://resend.com/api-keys)
4. Add the API key as a secret in Lovable Cloud (already configured)

## 🗄️ Database

The contact form submissions are stored in a `contact_messages` table with the following schema:

```sql
- id (UUID, primary key)
- name (text)
- email (text)
- phone (text, optional)
- subject (text, optional)
- message (text)
- created_at (timestamp)
- status (text, default: 'new')
```

### Viewing Messages
Access the admin panel at `/admin` to view all contact form submissions.

**Note**: Currently, the admin panel has RLS restrictions. To enable admin access, you'll need to update the RLS policy to allow authenticated users or specific admin users to read messages.

## 🎨 Customization

### Adding New Projects

Edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "unique-id",
    title: "Project Name",
    description: "Short description",
    longDescription: "Detailed description",
    tech: ["Tech", "Stack"],
    features: ["Feature 1", "Feature 2"],
    githubUrl: "https://github.com/...",
    demoUrl: "https://demo.com",
    imageUrl: "/path/to/image.png"
  },
  // ... more projects
];
```

### Updating Contact Information

Edit the contact details in `src/components/ContactForm.tsx`:
- Email: Line with `kiasatulmabood@gmail.com`
- Phone: Line with `+91 7439938849`

### Changing Colors/Theme

Edit `src/index.css` and `tailwind.config.ts` to customize:
- Primary color: `--primary`
- Accent color: `--accent`
- Background colors: `--background`, `--card`
- Gradients: `--hero-gradient-from`, `--hero-gradient-to`

## 🚀 Deployment

### Frontend Deployment (Lovable)

1. Click the **Publish** button in Lovable
2. Your site will be deployed to a lovable.app subdomain
3. Custom domains can be configured in Settings → Domains

### Backend (Automatic)

- Database migrations and Edge Functions deploy automatically
- No manual deployment needed for backend changes

## 🧪 Testing

The project includes basic validation and error handling. For production:

1. Test contact form submission
2. Verify email delivery
3. Check admin panel access
4. Test on multiple devices and browsers

## 📝 Project Structure

```
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Shadcn UI components
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── ProjectCard.tsx # Project cards
│   │   ├── Skills.tsx     # Skills section
│   │   └── ContactForm.tsx # Contact form
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Home page
│   │   └── Admin.tsx      # Admin panel
│   ├── data/              # Static data
│   │   └── projects.ts    # Projects data
│   ├── types/             # TypeScript types
│   ├── integrations/      # Supabase integration
│   └── index.css          # Global styles
├── supabase/
│   ├── functions/         # Edge functions
│   │   └── send-contact-email/ # Email function
│   └── migrations/        # Database migrations
└── public/                # Static assets
```

## 🔒 Security Notes

- Never commit API keys or secrets
- All secrets are managed via Lovable Cloud
- Contact messages require proper RLS policies for admin access
- Input validation on both client and server side
- Rate limiting recommended for production

## 🐛 Troubleshooting

### Contact form not sending emails
1. Check that RESEND_API_KEY is configured
2. Verify domain in Resend dashboard
3. Check edge function logs in Lovable Cloud

### Can't access admin panel
- Update RLS policies to allow authenticated admin users
- Check browser console for errors

### Theme not persisting
- Check localStorage is enabled in browser
- Clear cache and try again

## 📄 License

This project is open source and available for personal use.

## 👤 Contact

**MD. Kiasat ul Mabood**
- Email: kiasatulmabood@gmail.com
- Phone: +91 7439938849
- GitHub: [Your GitHub]
- LinkedIn: [Your LinkedIn]

---

Built with ❤️ using Lovable
