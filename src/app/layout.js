import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
	src: '../public/fonts/GeistMonoVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: '../public/fonts/GeistVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata = {
	title: 'Folio2024_ZanWardaszka',
	description: 'Frontend Developer Portfolio',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning={true}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
