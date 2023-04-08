// //  1.Create a new team
// const createNewTeam = function (teamName, driverName, yearOfBirth, carBrand, teamSponsor, admission) {

//     return {
//         name: teamName,
//         drivename: driverName,
//         year: yearOfBirth,
//         car: carBrand,
//         team: teamSponsor,
//         admission: admission = true,
//     }
// }
// const User1 = createNewTeam('Fasters', 'John', 1982, 'Nissan', 'Bukovel', true)

// //2.Create Person(varians 1)
// function Person(login, password, city, country, sex, age) {
//     this.login = login;
//     this.password = password;
//     this.city = city;
//     this.country = country;
//     this.sex = sex;
//     this.age = age;
// }
// // 2.Create a Person  (varians 2 )
// // let Person = function (login, password, city, country, sex, age) {
// //     return {
// //         login: login,
// //         password: password,
// //         city: city,
// //         country: country,
// //         sex: sex,
// //         age: age,

// //     }
// // }
// let newUser = new Person();

// for (let key of Object.keys(newUser)) {
//     newUser[key] = prompt(`Give a ${key}`);

// }
// console.log('Мій улюбдений обєкт ' + JSON.stringify(newUser));

// // 3. сhangeUserData(user_1, city, 'Kherson)

// let сhangeUserData = (obj, city, value) => {
//     return obj.city = value
// }
// сhangeUserData(newUser, "city", "Kharkiv");
// console.log(newUser)


// //4. Create object 'STUDENT'

// const Student = {
//     name: 'Ivan',
//     surname: 'Dubas',
//     age: 14,
//     course: 3,
//     city: 'Lviv',
//     greeting: function () {
//         console.log('Hi. everyone!')
//     },
//     addHomework: function () {
//         console.log('Sending my howework... Please, wait')
//     },
// }


// //5. Create function isEmpty

// const is_Empty = (obj) => {
//     return Object.keys(obj).length === 0 ? true : false

// }
// // 6. Create object Receipts
// const receipts = {
//     Taras: 2000,
//     Marta: 10,
//     Ivan: 1200,
//     Petro: 400,
//     Roma: 366,
//     Alina: 829
// }
// // 7. Create function summary receipts
// function summaryReceipts(obj) {
//     let sum = 0;
//     for (let key in obj) {
//         sum += obj[key]
//     }
//     console.log(sum);
// }
// summaryReceipts(receipts);

// // 8. Create function which find the lowest revenue
// function lowestReceipts(obj) {
//     let lowest = 100000;
//     for (let key in obj) {
//         if (obj[key] < lowest) {
//             lowest = obj[key]
//         } else break
//     }
//     console.log(`The lowest revenue is - ${lowest}`)
// }

// lowestReceipts(receipts)

// //9. Create function which find the biggest revenue
// function highReceipts(obj) {
//     let biggest = 0;
//     for (let key in obj) {
//         if (obj[key] > biggest) {
//             biggest = obj[key]
//         } else break
//     }
//     console.log(`The highest revenue is - ${biggest}`)
// }

// highReceipts(receipts)
function century(year) {
    if (year < 100) return 1
    else return year % 100 > 0 ? Number((Math.floor((year / 100)).toFixed(0))) + 1 : year / 100
}

console.log(century(11165))