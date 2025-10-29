import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
	return (
		<header>
			<nav>
				<Link href={"/"} className="logo">
					<Image
						src="/icons/logo.png"
						alt="logo"
						width={24}
						height={24}
					/>
					<p>Eventnext</p>
				</Link>
				<ul>
					<Link href={"/"}>Home</Link>
					<Link href={"/"}>Events</Link>
					<Link href={"/"}>Create Event</Link>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
