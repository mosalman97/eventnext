"use client";
import React from "react";
import Image from "next/image";

const ExploreBtn = () => {
	return (
		<button
			type="button"
			id="explore-btn"
			className="mx-auto mt-7"
			onClick={() => {
				console.log("on click listen");
			}}
		>
			<a href="#events">Explore Events</a>
			<Image
				src="/icons/arrow-down.svg"
				alt="arrow-down"
				width={24}
				height={24}
			/>
		</button> 
	);
};

export default ExploreBtn;
