(function() {
    if (!app.ws) app.ws = {};

    app.ws = {
    	/*get lists*/
    	"lists" : "http://localhost:9999/scrumboard/lists",
    	/*get Cards*/
    	"cards" : "http://localhost:9999/scrumboard/cards"
    };
}())