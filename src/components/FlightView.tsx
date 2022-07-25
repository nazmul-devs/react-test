export const FlightView = ({ flight }: { flight: any }) => {
	const { mission_patch, article_link, video_link, wikipedia } = flight.links;
	const date = new Date(flight.launch_date_unix).toDateString();
	const fireDate = new Date(flight.static_fire_date_unix).toDateString();

	return (
		<div className="flex justify-items-center	justify-center	my-8 ">
			<a
				className="w-60	mr-8 bg-sky-500	p-2"
				href={wikipedia}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={mission_patch} alt="" />
			</a>
			<div className="flightDetails bg-slate-300	p-4 w-full">
				<div className="date flex justify-between">
					<h6>Launch Date : {date}</h6>
					<h6>Fire Date : {fireDate}</h6>
				</div>
				<div className="date flex justify-between">
					<h6>
						Mission :{" "}
						<a href={article_link} target="_blank">
							{flight.mission_name}
						</a>{" "}
					</h6>
					<h6>Upcoming : {flight.upcoming ? "Yes" : "No"}</h6>
				</div>
				<h3>Rocket name: {flight.rocket.rocket_name}</h3>

				<p>{flight.details}</p>

				<p className="launchSite">
					Laung site: {flight.launch_site.site_name_long}
				</p>
				<p className="launchSite">Laung year: {flight.launch_year}</p>
				<p className="launchSite">
					Laung status: {flight.launch_success ? "Success" : "Faild"}
				</p>
				<span className="flex justify-between">
					<a href={video_link} target="_blank" rel="noopener noreferrer">
						View in video
					</a>
					<a href={wikipedia} target="_blank" rel="noopener noreferrer">
						More details
					</a>
				</span>
			</div>
		</div>
	);
};
