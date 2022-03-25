function getAdvice() {
    let promise = fetch("https://api.adviceslip.com/advice", {cache: 'no-store'}); //to avoid caching issue
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
