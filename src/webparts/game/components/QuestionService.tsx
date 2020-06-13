
const qBank = [
  {
    images: ["https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png","https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png","https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png","https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png"],
    answers: ["A", "B", "C", "D"],
    correct: ["A"],
    questionId: "0001"
  },
  {
    images: ["https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png","https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png","https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png","https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png"],
    answers: ["A", "B", "C", "D"],
    correct: ["C"],
    questionId: "0002"
  },
  {
    images: ["https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png","https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png","https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png","https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png"],
    answers: ["A", "B", "C", "D"],
    correct: ["B"],
    questionId: "0003"
  },
  {
    images: ["https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png","https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png","https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png","https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png"],
    answers: ["A", "B", "C", "D"],
    correct: ["B"],
    questionId: "0004"
  },  {
    images: ["https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png","https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png","https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png","https://www.argeweb.nl/blog/wp-content/uploads/2014/04/Windows-XP-icon.png"],
    answers: ["A", "B", "C", "D"],
    correct: ["D"],
    questionId: "0005"
  },
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
