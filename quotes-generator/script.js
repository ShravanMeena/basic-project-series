const myParagraphs = [
  `Taking responsibility - practicing 100 percent responsibility every day - is about seeing ourselves not as right or wrong, but as an agent, chooser, problem solver, and learner in the complex interrelationships of our lives so that we can better integrate with the people and world around us. When we do this, we enjoy a better and more productive way to live and lead.`,
  
  `Simplicity requires a two-step process. First, we must invest time and energy to discover what stirs us as human beings, what makes our hearts sing, and what brings us joy. Then, we must proceed to create the life that reflects the unique people we truly are. This is the heart and soul of simplicity`,
  
  `A life portfolio offers a compelling alternative to traditional retirement. It is a new way of thinking and living in extended middle age. A typical portfolio is a balanced mix of some work, ongoing learning, recreation, travel and avocations, reconnecting with family and friends, and giving back.`,
  
  `The foundation stones of honesty, character, faith, integrity, love, and loyalty are necessary for a balanced success that includes health, wealth, and happiness. As you go onward and upward in life, you will discover that if you compromise any of these principles you will end up with only a beggar's portion of what life has to offer`,
  
  `Every day, think as you wake up, today I am fortunate to be alive, I have a precious human life, I am not going to waste it. I am going to use all my energies to develop myself, to expand my heart out to others; to achieve enlightenment for the benefit of all beings. I am going to have kind thoughts towards others, I am not going to get angry or think badly about others. I am going to benefit others as much as I can`,
  
  `Life is a gamble from minute to minute so play it today for all there is in it. The flick of an eye lash, the quirk of a smile. A good deed here and there makes it all worthwhile. So make life a garden for everyday and gather your rosebudes while you may`,
  
  `If you learn to develop an abundant mentality you will not be envious of others, you will celebrate their successes, you will share in their joys and pains. Don't see life as a competition but as complementary`,
  
  `Winning is not necessarily finishing first but finishing well, to the best of your God-given abilities. When you embrace this concept in your life, you will be relieved from the stress of competing to finish first, to win in life`,
  
  `One of the most important secrets of life that will be more contented is the act of gratitude and being grateful for the things you have in your life. It is so natural to get caught on the continually needing more prepare, that we don't stop to welcome the things that we have now`,
  
  `There are several ways to move through our life. We can stand on the beach and watch the waves roll in, barely getting our toes wet at the edge of the tide line; we can walk or run into the water and dive into the surf`,
  
  `Often time in life, what is easy to do is not worth it. Sure, crashing on the couch and watching the newest episode of your favorite show is a pleasurable experience, but it is bad input and it will not help you advance much in the road to success.`,
];


// select 
const form = document.querySelector(".form-input");
const total_number = document.getElementById("total_number");
const showParagraph = document.querySelector(".showParagraph");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = total_number.value;

  if (isNaN(value)) {
    alert("Please provide numeric value!");
  }
   else if (value <= 0 || value >= myParagraphs.length) {
    alert(`Please provide count between 1 to ${myParagraphs.length}`);
    showParagraph.innerHTML = myParagraphs[0];
  }

   else {
    let selectParagraphs = myParagraphs.slice(0, value);
    const myParagraph = selectParagraphs.map((item, index) => {
      return `<p>${index + 1}. ${item}</p>`;
    });

    showParagraph.innerHTML = myParagraph.join("............")
  }

});