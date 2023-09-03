module.exports = async function (context, req) {
    context.log('Simple Http Api Call');

    const name = (req.query.name || (req.body && req.body.name));
   
    context.res = {
        status: 200, /* Defaults to 200 */
        body: JSON.stringify(req)
    };
}