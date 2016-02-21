//jshint esversion: 6
function every(collection, pre) {
  return collection.every(elem => !!elem[pre]);
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
