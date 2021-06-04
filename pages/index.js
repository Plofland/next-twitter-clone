import useSWR from 'swr';

const fetcher = (url) =>
	fetch(url).then((res) => res.json());

export default function Home() {
	let { data } = useSWR('/api/tweets', fetcher);
	if (!data) return 'Loading...';

	return (
		<div>
			{[...data.tweets].map((tweet) => (
				<div>
					<img
						src={tweet.avatarURL}
						alt="avatar"
					/>
					<p>{tweet.text}</p>
					<p>{tweet.username}</p>
					<p>{tweet.id}</p>
				</div>
			))}
		</div>
	);
}

Home.headerTitle = 'Latest Tweets';
