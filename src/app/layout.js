import { Fira_Sans, Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import './assets/responsive.css';

const fira_sans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--body-color-font',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Solutek - Technology & IT Solution NextJS Template',
    template: '%s | Solutek - Technology & IT Solution NextJS Template',
  },
  description: 'Solutek - Technology & IT Solution NextJS Template',
  openGraph: {
    title: 'Solutek - Technology & IT Solution NextJS Template',
    description: 'Solutek - Technology & IT Solution NextJS Template',
    image: '/openGraphImage.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${fira_sans.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
