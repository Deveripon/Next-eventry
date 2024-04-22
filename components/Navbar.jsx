import LogoImage from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className='container flex justify-between items-center py-4'>
                <div className='nav-brand'>
                    <Link href='/'>
                        <Image
                            src={LogoImage}
                            alt='Eventry'
                            className='h-[45px]'
                            width={133}
                            height={133}
                        />
                    </Link>
                </div>

                <ul className='flex gap-4 text-[#9C9C9C]'>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

