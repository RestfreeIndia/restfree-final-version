# Restfree

Find and book the best restrooms and services near you. Restfree is a modern web application that helps users locate, review, and reserve public restrooms, hotel rooms, and related amenities with ease.

---

## 🚀 Features
- User authentication (Sign In/Sign Up)
- Search and filter restrooms, hotels, and services
- Book by the hour or night
- Merchant and admin dashboards
- Responsive design (mobile-first)
- Real-time notifications (for future features)
- Modern, visually appealing UI

---

## 📸 Screenshots
> _Add screenshots here_

- ![Sign In Page](screenshots/signin.png)
- ![Sign Up Page](screenshots/signup.png)
- ![Dashboard](screenshots/dashboard.png)

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation
```bash
# Clone the repository
 git clone https://github.com/yourusername/restfree.git
 cd restfree-main

# Install dependencies
 npm install
```

### Development
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

---

## 🌐 Deployment

### Recommended: Vercel
1. Push your code to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com) and sign up.
3. Import your repository and follow the prompts (Vercel auto-detects Next.js).
4. Click "Deploy" and get your live URL.

### Other Options
- Netlify
- Manual VPS (see Next.js docs)
- Docker

---

## 📁 Project Structure
```
restfree-main/
├── public/                # Static assets (logos, icons, etc.)
├── src/
│   ├── app/               # Next.js app directory (pages, layouts)
│   ├── components/        # Reusable React components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── ...
├── package.json
├── tailwind.config.ts
├── README.md
└── ...
```

---

## 🧰 Technologies Used
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel](https://vercel.com/) (for deployment)

---

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
