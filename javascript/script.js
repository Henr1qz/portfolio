const frases = [
  '"I\'m not a genius." — Magnus Carlsen, chess genius',
  '"The only way to get smarter is by playing a smarter opponent." — Fundamentals of Chess, 1883',
  '"Success is not final, failure is not fatal: it is the courage to continue that counts." — Winston Churchill',
  '"Yesterday is history, tomorrow is a mystery, but today is a gift." — Master Oogway',
  '"The only way to do great work is to love what you do." — Steve Jobs',
  '"The future belongs to those who believe in the beauty of their dreams." — Eleanor Roosevelt',
  '"You miss 100% of the shots you don\'t take." — Wayne Gretzky',
  '"A person that never made a mistake, never did something new." — Albert Einstein',
  '"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe." — Albert Einstein',
  '"Even a bad plan is better than no plan at all..” — Mikhail Chigorin',
  '"You must take your opponent into a deep dark forest where 2+2=5, and the path leading out is only wide enough for one." — Mikhail Tal',
  '"In chess, as in life, the most dangerous opponent is yourself." — Vasily Smyslov',
  '"Don\'t even mention losing to me. I can\'t stand to think of it." — Robert James Fischer',
  '"Never underestimate the power of teamwork." — Halo 3',
  '"Scars are like tattoos with better stories." — Far Cry 3',
  '"Steel wins battles. Gold wins wars." — Davion, the Dragon Knight, DOTA 2',
  '"You cannot judge a man by his past mistakes. He must be judged by how he overcomes them." — Bioshock Infinite',
  '"No matter how dark the night, tomorrow always comes." — Final Fantasy X',
  '"Never underestimate the power of a good insult." — Monkey Island 2: LeChuck\'s Revenge',
  '"Behind every great man is a woman rolling her eyes." — Jim Carey',
  '"Before you marry a person, you should first make them use a computer with slow Internet to see who they really are." — Will Ferrel',
  '"To steal ideas from one person is plagiarism; to steal from many is research." — Steven Wright'
]

const lastIndex = Number(localStorage.getItem('lastFraseIndex'));
let newIndex;
do {
  newIndex = Math.floor(Math.random() * frases.length);
} while (frases.length > 1 && newIndex === lastIndex);
localStorage.setItem('lastFraseIndex', newIndex);
const fraseAleatoria = frases[newIndex];
window.addEventListener('DOMContentLoaded', () => {
  const citacaoDiv = document.getElementById('citacao');
  if (citacaoDiv) {
    citacaoDiv.innerHTML = `<blockquote>${fraseAleatoria}</blockquote>`;
  }
});