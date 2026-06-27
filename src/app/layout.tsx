import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Rukhma Shafqat - Website Developer & AI Automation Specialist',
  description: 'Premium portfolio showcasing website development, Shopify expertise, WordPress development, AI automation, and digital solutions for businesses.',
  keywords: 'Web Developer, Shopify Expert, WordPress Developer, AI Automation, Digital Solutions, Freelancer',
  authors: [{ name: 'Rukhma Shafqat' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rukhma-portfolio.vercel.app',
    title: 'Rukhma Shafqat - Website Developer & AI Automation Specialist',
    description: 'Premium portfolio with 100+ successful projects',
    images: [{
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630',
      width: 1200,
      height: 630,
    }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-inter bg-background dark:bg-dark text-dark dark:text-background transition-colors duration-300`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}