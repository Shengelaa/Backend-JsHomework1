//1) დაითვალეთ დადებითი რიცხვები / შეკრიბეთ უარყოფითი რიცხვები:
//გაქვთ მასივი: const nums = [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15], უნდა დააბრუნოს: [10, -65]

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

const positive = nums.filter((num) => num > 0);

console.log(positive.length);

const negative = nums.filter((num) => num < 0);

console.log(negative.reduce((acc, num) => acc + num, 0));

//2) აიღეთ რიცხვების მასივი, გაამრავლეთ ყველა ელემენტი 2 ზე, და შემდეგ გაფილტეთ ეს მასივი იმ რიცვებზე რომლებიც იყოფა 3ზე.

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multpliednums = nums2.map((nums) => nums * 2);
const filterednums = multpliednums.filter((nums) => nums % 3 === 0);

console.log(filterednums);

//3) შექმენით ფუნცქცია რომელიც დააბრუნებს ბოლო ორი ყველაზე პარატა რიცხვის ჯამს: e.g:[19, 5, 42, 2, 77] => 7

const nums3 = [19, 5, 42, 2, 77];
const res = nums3.sort((a, b) => a - b).slice(0, 2);
const add = res.reduce((acc, nums3) => acc + nums3, 0);
console.log(add);

//4)შექმენით ფუნცქია სადაც შეადარებთ ამ ორ მასივს ერთმანეთს და დააბრუნეთ ახალ მასივს ყველაზე დიდი რიცხვებით:
//let arr1 = [13, 64, 15, 17, 88];
//let arr2 = [23, 14, 53, 17, 80];
//getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];

const combined = arr1.concat(arr2);
const filter = combined.sort((a, b) => b - a).slice(0, 5);

console.log(filter);

// 5) const characters = [
//     {
//       name: "Luke Skywalker",
//       height: "172",
//       mass: "77",
//       eye_color: "blue",
//       gender: "male",
//     },
//     {
//       name: "Darth Vader",
//       height: "202",
//       mass: "136",
//       eye_color: "yellow",
//       gender: "male",
//     },
//     {
//       name: "Leia Organa",
//       height: "150",
//       mass: "49",
//       eye_color: "brown",
//       gender: "female",
//     },
//     {
//       name: "Anakin Skywalker",
//       height: "188",
//       mass: "84",
//       eye_color: "blue",
//       gender: "male",
//     },
//   ];
//   მოცემულ მასივზე გააკეთეთ შემდეგი ტასკები:
//   * Get an array of all names
//   *  Get an array of all first names
//   * დააჯგუფეთ თვალის ფერის მიხედვით, გამოიყენეთ რედიუსი და უნდა მიიღოთ შემდეგი შედეგი:
//   {blue: 2, brown: 1, yellow: 1}
//   როგორც ხედავთ ლექციაზე რაც ვქენით ოდნავ განსხვავებულია, აქ გვაინტერებსე დავითვალოთ რამდენი განსხვავებული თვალის ფერი აქვთ.

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

const userNames = characters.map((el) => el.name);
console.log(userNames, "Names");

const gender = characters.map((el) => el.gender);
console.log(gender, "gender");

const eyeColorCount = characters.reduce((acc, el) => {
  acc[el.eye_color] = (acc[el.eye_color] || 0) + 1;
  return acc;
}, {});
console.log(eyeColorCount, "Eye Color Count");

// 6) const movies = [
//   { title: "Inception", year: 2010, rating: 8.8 },
//   { title: "Interstellar", year: 2014, rating: 8.6 },
//   { title: "Tenet", year: 2020, rating: 7.5 },
//   { title: "Dunkirk", year: 2017, rating: 7.9 },
// ];
// * გაფილტრეთ მარტო ისეთი ფილმები რომელთა რეიტინგიც არის 8ზე მეტი
// * ამოიღეთ მხოლოდ სახელები
// * დაალაგეთ ეს სახელები ანბანის მიხედვით

const movies = [
  { title: "Inception", year: 2010, rating: 8.8 },
  { title: "Interstellar", year: 2014, rating: 8.6 },
  { title: "Tenet", year: 2020, rating: 7.5 },
  { title: "Dunkirk", year: 2017, rating: 7.9 },
];
const filteredMovies = movies.filter((movie) => movie.rating > 8);

console.log(filteredMovies, "filteredMovies");

const titles = movies.map((movie) => movie.title);

console.log(titles, "titles");

titles.sort((a, b) => a.localeCompare(b));
console.log(titles, "sorted titles");

// 7) const students = [
//   { name: "Lia", scores: [90, 85, 100] },
//   { name: "Tom", scores: [70, 60, 75] },
//   { name: "Mia", scores: [88, 92, 95] },
// ];
// * გამოიყენეთ map და reduce მეთოდები და დაუმატეთ თითეულ ობიექტს average ფილდი შემდეგ გაფილტრეთ და დააბრუნეთ მხოლოდ 85ზე მეტი ვისაც აქვს საშუალო ქულა ეგ სტუდენდები.

const students = [
  { name: "Lia", scores: [90, 85, 100] },
  { name: "Tom", scores: [70, 60, 75] },
  { name: "Mia", scores: [88, 92, 95] },
];

const studentsWithAverage = students.map((student) => {
  console.log(student);
  const average =
    student.scores.reduce((acc, score) => acc + score, 0) /
    student.scores.length;

  return { ...student, average };
});

const filteredStudents = studentsWithAverage.filter(
  (student) => student.average > 85
);

console.log(filteredStudents, "filteredStudents");

//8) const employees = {
//   alice: { department: "HR", active: true },
//   bob: { department: "Engineering", active: false },
//   charlie: { department: "Engineering", active: true },
// };
// * გადაუარეთ თითოეულ ობიექტს Object.entries მეთოდით, დაითვალეთ რამდენი აქტიური იუზერია თითოეულ დეპარტამენტში და დააბრუნეთ შემდეგი ობიექტი:
// { HR: 1, Engineering: 1 }
