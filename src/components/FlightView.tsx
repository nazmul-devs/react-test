export const FlightView = ({ flight }: { flight: any }) => {
	const { mission_patch, article_link, video_link, wikipedia } = flight.links;

	// date convert unix format to loacal string
	const date = new Date(flight.launch_date_unix).toDateString();
	const fireDate = new Date(flight.static_fire_date_unix).toDateString();

	return (
		<div className="flex justify-items-center	justify-center	my-8 ">
			{/* image section */}
			<a
				className="w-72	mr-6 bg-sky-500	p-2 rounded-l-lg"
				href={wikipedia}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={mission_patch} alt="" />
			</a>

			{/* rocket details section */}
			<div className="bg-slate-300	p-4 w-full rounded-r-lg">
				<div className="flex justify-between italic font-semibold	">
					<h6>Launch Date : {date}</h6>
					<h6>Fire Date : {fireDate}</h6>
				</div>
				<div className="flex justify-between font-bold	text-lg	">
					<h3>Rocket name: {flight.rocket.rocket_name}</h3>
					<h6>
						Mission Name:
						<a href={article_link} target="_blank">
							{flight.mission_name}
						</a>
					</h6>
				</div>

				<h6 className="italic font-semibold	">
					Laung year: {flight.launch_year}
				</h6>

				<p className="tracking-wide text-justify">
					Details: {flight.details}
				</p>

				<p className="launchSite">
					Laung site: {flight.launch_site.site_name_long}
				</p>

				<div className="flex justify-between italic font-semibold	">
					<h6>Upcoming Status: {flight.upcoming ? "Yes" : "No"}</h6>
					<h6 className="launchSite">
						Laung Status: {flight.launch_success ? "Success" : "Faild"}
					</h6>
				</div>
				<span className="flex justify-between  text-lg">
					<a
						className="bold"
						href={video_link}
						target="_blank"
						rel="noopener noreferrer"
					>
						Watch
						<i className="fa-brands text-lg	text-red-600	 fa-youtube ml-1	 "></i>
					</a>
					<a
						className="underline italic"
						href={wikipedia}
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa-solid  pr-2 fa-arrow-up-right-from-square"></i>
						Read more...
					</a>
				</span>
			</div>
		</div>
	);
};
