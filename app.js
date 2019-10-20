const Koa = require('koa');
const app = new Koa();
const util = require('util');
const port = process.env.PORT || 3000
const { spawnSync} = require('child_process');

app.use(async ctx => {
    var body = ""
    if (ctx.request.query.q != undefined) {
        var q = ctx.request.query.q;
	console.log("fetching " + q);
    }
    if (ctx.request.query.debug != undefined) {
        body += util.inspect(ctx)
	body += "\n\n"
        const child = spawnSync('df', ['-h']);
	body += child.stdout
    }
    ctx.body = body
});

app.listen(port);
console.log("Listening on " + port);
