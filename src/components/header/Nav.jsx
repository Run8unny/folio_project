import Link from 'next/link';
import Logo from './Logo';
import NavMenu from '@/components/ui/NavMenu';
import ContactNav from './ContactNav';

export default function Nav() {
	return (
		<header className='fixed top-0 inset-x-0 mx-auto z-50 flex flex-row justify-between items-center gap-4 md:gap-10 px-5 py-3 bg-transparent'>
			<Logo />
			<NavMenu />
			<ContactNav />
		</header>
	);
}
