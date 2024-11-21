import Image from 'next/image';
import { BackgroundGradientAnimation } from '@/components/ui/BackgroundGradientAnimation';
import { FloatingNav } from '@/components/ui/FloatingNav';
import Nav from '@/components/header/Nav';
import { AuroraBackground } from '@/components/ui/AuroraBackground';

export default function Home() {
	return (
		<div className='relative w-full'>
			{/* <BackgroundGradientAnimation /> */}
			<AuroraBackground />
			<Nav />
		</div>
	);
}
