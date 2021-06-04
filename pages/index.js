import useSWR from 'swr';

const fetcher = (url) =>
	fetch(url).then((res) => res.json());

export default function Home() {
	let { data } = useSWR('/api/tweets', fetcher);
	if (!data) return 'Loading...';

	return (
		<div>
			{[...data.tweets].map((tweet) => (
				<div className="px-4 py-3 border-b border-gray-200">
					<div className="flex">
						{/* Avatar */}
						<img
							src={tweet.avatarURL}
							alt="avatar"
							className="w-10 h-10 mr-3 rounded-full"
						/>
						{/* Tweet Body */}
						<div className="flex flex-col min-w-0">
							{/* Header Row */}
							<p className="flex text-sm">
								<span className="truncate text-cool-gray-500">
									<span className="font-bold text-cool-gray-900">
										{tweet.name}
									</span>{' '}
									<span className="text-cool-gray-500">
										@{tweet.username}
									</span>
								</span>
								<span className="flex-shrink-0">
									<span className="px-1 text-cool-gray-500">
										•
									</span>
									<span className="text-sm text-cool-gray-500">
										20min
									</span>
								</span>
							</p>
							{/* Tweet text */}
							<p className="text-sm">
								{tweet.text}
							</p>
							{/* Tweet Footer/Icon Bar */}
							<div></div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

Home.headerTitle = 'Latest Tweets';
