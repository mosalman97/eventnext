import React from "react";
import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/constants";

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
				<div className="mt-20 space-y-7">
					<h3>Featured Events</h3>
					<ul className="events">
						{events.map((event) => (
							<EventCard {...event} key={event.slug} />
						))}
					</ul>
				</div>
			</section>
		</>
	);
};

export default Home;
