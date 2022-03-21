function getAdvice() {
    let promise = fetch("https://api.adviceslip.com/advice");
    promise.then(response => {
        response.json()
            //json object has the name of "slip", as in advice slip.
            .then(data => {
                console.log(data.slip);
                document.getElementById('advice_id').innerText = "Advice# " + data.slip.id;
                document.getElementById('advice_text').innerText = data.slip.advice;
            })
    })
}



/* firefox caches this page,
 have open dev tools while testing or use another browser.
 Api will return same advice if asked within 2 seconds. */