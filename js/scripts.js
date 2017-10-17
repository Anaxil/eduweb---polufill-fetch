if (!("fetch" in Window)) {

    window.myFetch = function (url, fnSuccess, fnError) {

        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);

        xhr.onloadend = function (e) {

            if (this.status === 200) {
                fnSuccess(xhr.response);
            } else {
                fnError(e.currentTarget.status);
            }
        }
        xhr.send();
    }


}

var url = "https://jsonplaceholder.typicode.com/user";

myFetch(url, function (data) {
    console.log("Sukces");
    console.log(data);
    },
    function (err) {
        console.log("Wystąpił błąd!");
        console.log(err);
    });