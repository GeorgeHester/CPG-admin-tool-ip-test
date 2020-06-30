const Express = require('express');
const App = Express();
const Cors = require('cors');

const CorsOptions = {
    origin: '*',
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization,Access-Control-Allow-Credentials',
    optionsSuccessStatus: 200
};

App.use(Cors(CorsOptions));

App.use(Express.json());

App.get('/test', async (Request, Response) => {

    var IpAddress = Request.header('x-forwarded-for') ? Request.header('x-forwarded-for').split(",")[Request.header('x-forwarded-for').split(",").length - 1] : Request.connection.remoteAddress;

    console.log(IpAddress);

    Response.send(IpAddress);

});

App.listen(process.env.PORT || 3000, function () {
    console.log(`[ Port: ${this.address().port} ][ Mode: ${App.settings.env} ]`);
});
