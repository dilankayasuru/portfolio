import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
    return (
        <div className="fixed top-0 left-0 z-50 p-6 mix-blend-multiply">
            <Link href="#">
                <Image src="/images/logo.webp" width={44} height={44} alt="logo" />
            </Link>
        </div>

    )
}