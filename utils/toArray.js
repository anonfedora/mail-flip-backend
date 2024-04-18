const toArray = (...value) => {
    let array = value.toString().split(" ");
    //array = value.toString().split(" ");
    console.log(array);
};

toArray(
    "a@gmail.com",
    "b@gmail.com",
    "c@gmail.com",
    "d@gmail.com",
    "e@gmail.com",
    "f@gmail.com"
);
toArray(
    "a@gmail.com,b@gmail.com,c@gmail.com,d@gmail.com,e@gmail.com,f@gmail.com"
);
toArray(
    "a@gmail.com b@gmail.com c@gmail.com d@gmail.com e@gmail.com f@gmail.com"
);
