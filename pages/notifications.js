function Notifications() {
	return (
		<div className="flex border-b border-gray-600">
			<div className="flex-1 border-b-2 border-blue-500">
				<p className="text-center font-bold py-3 text-sm text-blue-500">
					All
				</p>
			</div>
			<div className="flex-1 border-b border-gray-600">
				<p className="text-center font-bold py-3 text-sm text-gray-500">
					Mentions
				</p>
			</div>
		</div>
	);
}

Notifications.headerTitle = 'Notifications';

export default Notifications;
