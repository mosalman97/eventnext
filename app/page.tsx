import React from "react";
import ExploreBtn from "@/components/ExploreBtn";

const Home = () => {
	return (
		<>
			<section>
				<h1 className="text-center">
					The Hub for Every Dev <br /> Event can't Miss
				</h1>
				<p className="mt-5 text-center">
					Hackathons,Meetups,and Conferances,All in One Place
				</p>
				<ExploreBtn />
			</section>
		</>
	);
};

export default Home;
