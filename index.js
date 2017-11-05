module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        let city = req.query.name? eq.query.name : req.body.name
        let result;
        switch(city.toLowerCase) {
            case "austin":
                result = "Clothing: Jeans, shorts, t-shirts. Shoes: Boots, sandals, and sneakers. Accessories: Sunglasses, sunscreen"
                break;
            case "san francisco":
                result = "Clothing: Jeans, t-shirts, warm windproof layer. Shoes: Comfortable shoes, sneakers. Accessories: Sunglasses, sunscreen"
                break;
            case "los angeles":
                result = "Clothing: Jeans, t-shirts, sweatshirt, light jacket. Shoes: Flat shoes, sandals, sneakers. Accessories: Long scarves, hat"
                break;
            case "new york":
                result = "Clothing: Jeans, t-shirts, shirts, sweater. Shoes: Comfortable shoes, sneakers. Accessories: Scarf, beanie hat, gloves"
                break;
            default:
                result = "We dont't have any data for that city."
        }

        context.res = {
            // status: 200, /* Defaults to 200 */
            
            body: "Hey there, here are the things I suggest you bring with you to" + city + "\n" + result
            
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};