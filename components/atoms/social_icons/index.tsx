import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="text-3xl flex gap-2 text-background-secondary-dark dark:text-background-secondary-light">
      <Link href="/" target="_blank">
        <FaFacebook />
      </Link>
      <Link href="/" target="_blank">
        <FaLinkedin />
      </Link>
      <Link href="/" target="_blank">
        <FaTwitter />
      </Link>
    </div>
  );
}
