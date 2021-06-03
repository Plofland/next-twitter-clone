import {createServer, Model, Factor, trait, Factory} from 'miragejs';
import {add, parseISO} from 'date-fns';
import faker, {image, name, internet, lorem} from 'faker';

faker.seed(123)

let startingDate = parseISO("2021-06-03")
let server = createServer({
    timing = 1000,
    models: {
        tweet: Model,
    },

    factories:{
        tweet: Factory.extend({
            name(){
                return name.findName();
            },

            username(){
                return internet.userName();
            },

            text(){
                return lorem.sentence();
            },

            avatarUrl(){
                return image.avatar();
            },

            date(i){
                return add(startingDate, {days: i}).toISOString();
            },

            fromPeter: trait({
                name: 'Peter Lofland',
                userName: 'Plofland',
                avatarUrl: 'https://pbs.twimg.com/profile_images/1175804192197361664/BCMBEZcf_400x400.jpg'
            }),
        }),
    },

    routes(){
        this.namespace = 'api';
        this.get('tweets');

        this.passthrough()
    },

    seeds(server){
        server.create('tweet', 'fromPeter', {text: 'just setting up this clone'});
        server.create('tweet', 'fromPeter', {text: 'Hello!'});
        server.create('tweet', 'fromPeter', {text: 'Never used SWR before this'});
        server.createList('tweet', 50);
    },
})

setInterval(() => {
    server.create('tweet')
}, 5000)