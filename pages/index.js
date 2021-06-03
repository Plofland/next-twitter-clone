import useSWR from 'swr';

const fetcher = (url) =>
	fetch(url).then((res) => res.json());

export default function Home() {
	let { data } = useSWR('/api/tweets', fetcher);
	if (!data) return 'Loading...';
	console.log(data);
	return (
		<div>
			{[...data.tweets].map((tweet) => (
				<div>
					<img
						src={tweet.avatarURL}
						alt="avatar"
					/>
					<p>{tweet.text}</p>
				</div>
			))}
		</div>
	);
}

Home.headerTitle = 'Latest Tweets';
