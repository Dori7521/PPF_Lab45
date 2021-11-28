//E56
function getItems(url,offset=0,limit=10,orderBy="date"){
    return url
}

// Parametry domyślne również  są pbsługiwane za pomocą funkcji arrow
const getItemsA = (url, offset=0, limit=10, orederBy="date") => {};

//add(1)
//add(1, 2)
function add(a, b=0){
    return a+b;
}

// takie samo jak:
const addA = (a,b=0) => a+b;

//i takie samo jak:
function addB(a,b){
    b = b === undefined ? 0 : b;
    return a + b;
}