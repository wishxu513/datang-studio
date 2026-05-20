
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '大唐室內設計 Datang Interior Design',
  description: '大唐相信空間不是裝飾的堆疊，而是生活秩序、材質溫度與光線層次被慢慢安放的結果。',
  openGraph: {
    title: '大唐室內設計 Datang Interior Design',
    description: '專注於住宅空間、商業空間與實品屋設計。',
    images: ['https://wishxu513.github.io/datang-website/logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Noto+Sans+TC:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
