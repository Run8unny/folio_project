import Link from 'next/link';

export default function ContactNav() {
	return (
		<span className='text-[30px] '>
			<Link href='/contact'>{`let's talk`}</Link>
		</span>
	);
}
