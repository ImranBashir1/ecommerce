import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/">
            <h3 className="text-3xl font-semibold hover:text-orange-500 duration-200">
                Store.
            </h3>
        </Link>
    );
};

export default Logo;
