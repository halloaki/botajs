function eightball() {
  var possibleResponses = [
    "Doesn't look like it",
    "Probably not",
    "I can only see so far in the future",
    "It is likely",
    "Perhaps",
    "If I say yes, will you leave me alone?",
    "Yes, no, maybe...",
    "Do I look like a magical ball that tells the future? Oh wait...",
    "Yes",
    "No"
  ];
  var randomNumber = Math.floor(Math.random() * possibleResponses.length);
  return possibleResponses[randomNumber];
}
