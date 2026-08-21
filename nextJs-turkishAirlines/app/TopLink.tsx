import Link from "next/link";
import Image from "next/image";

type TopLinkProps = {
    href: string;
    title?: string;
    icon?: string;
    className?: string;
    iconWidth?: number;
    iconHeight?: number;
};

function TopLinks({
    href,
    title,
    icon,
    className = "",
    iconWidth = 10,
    iconHeight = 10,
    }: TopLinkProps) {
    return (
        <Link className={`hover:text-blue-300 flex gap-2 ${className}`} href={href}>
            {icon && <Image src={icon} alt={title ?? ""} width={iconWidth} height={iconHeight} />}
            {title && <span>{title}</span>}
        </Link>
    );
}

export default TopLinks;