import Link from "next/link";

const layout = ({children}) => {
    return (
        <div>
            <nav>
            <ul className="flex items-center gap-3 mt-4">
                <li className="font-bold text-[24px]"><Link href="/about/mission">Mission</Link></li>
                <li className="font-bold text-[24px]"><Link href="/about/vission">Vission</Link></li>
            </ul>
            </nav>
            {children}
        </div>
    );
};

export default layout;