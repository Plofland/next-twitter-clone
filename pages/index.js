import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  let {data} = useSWR('/api/tweets', fetcher);
  if (!data) return 'Loading...';

	return <div>
    {[...data.tweets].map((tweet) => (
      <p>
        {tweet.text}
      </p>
    ))}
  </div>;
}

Home.headerTitle = 'Latest Tweets';
