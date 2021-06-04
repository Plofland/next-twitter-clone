import {
	createServer,
	Model,
	Factory,
	trait
} from 'miragejs';
import { add, parseISO } from 'date-fns';
import faker, { image, name, internet, lorem } from 'faker';

faker.seed(123);

let startingDate = parseISO('2021-06-02');
let server = createServer({
	timing: 1000,
	models: {
		tweet: Model
	},

	factories: {
		tweet: Factory.extend({
			name() {
				return name.findName();
			},

			username() {
				return internet.userName();
			},

			text() {
				return lorem.sentence();
			},

			avatarURL() {
				return image.avatar();
			},

			date(i) {
				return add(startingDate, {
					days: i
				}).toISOString();
			},

			fromPeter: trait({
				name: 'Peter Lofland',
				username: 'PeterLofland',
				avatarURL:
					'https://pbs.twimg.com/profile_images/1175804192197361664/BCMBEZcf_400x400.jpg'
			})
		})
	},

	routes() {
		this.namespace = 'api';
		this.get('tweets');

		this.passthrough();
	},

	seeds(server) {
		server.create('tweet', 'fromPeter', {
			text: 'just setting up this clone'
		});
		server.create('tweet', 'fromPeter', {
			text: 'Hello!'
		});
		server.create('tweet', 'fromPeter', {
			text: 'Never used SWR before this'
		});
		server.createList('tweet', 30);
	}
});

// setInterval(() => {
//     server.create('tweet')
// }, 5000)
