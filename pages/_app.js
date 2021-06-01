import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<div className="flex flex-col h-screen">
			<header className="flex items-center px-4 py-3 border-b">
				<img
					src="https://pbs.twimg.com/profile_images/1175804192197361664/BCMBEZcf_400x400.jpg"
					alt="profile picture"
					className="rounded-full w-7 h-7"
				/>
				<p className="text-lg ml-6 font-extrabold">
					Latest Tweets
				</p>
			</header>
			<main className="flex-1">
				<Component {...pageProps} />
			</main>
			<footer className="flex border-t">
				<a
					className="w-1/4 py-4 text-center"
					href=""
				>
					Link
				</a>
				<a
					className="w-1/4 py-4 text-center"
					href=""
				>
					Link
				</a>
				<a
					className="w-1/4 py-4 text-center"
					href=""
				>
					Link
				</a>
				<a
					className="w-1/4 py-4 text-center"
					href=""
				>
					Link
				</a>
			</footer>
		</div>
	);
}

export default MyApp;
