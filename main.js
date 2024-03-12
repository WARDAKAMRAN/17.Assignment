//initial  list of guests
var guests = ["Warda", "Ahmed"];
//informaing that  only two people can be invited
console.log(" Due to limited space, only two people can be invited for dinner,");
//Removeing guest until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry,".concat(removedGuest, ",you are no longer invited to dinner,"));
}
//printing invitations to the remaining two guest
guests.forEach(function (guest) {
    console.log("Dear ".concat(guests, ", you are still invited to dinner."));
});
//Removing the last two names from the list 
guests.pop();
guests.pop();
////printing the final list to confrim its empty
console.log("final  guest list:", guests);
