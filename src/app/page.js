import Image from 'next/image';
import { BackgroundGradientAnimation } from '@/_components/BackgroundGradientAnimation';
import { FloatingNav } from '@/_components/FloatingNav';

export default function Home() {
	return (
		<div className='relative w-full'>
			<BackgroundGradientAnimation />
			{/* <FloatingNav /> */}
		</div>
	);
}
