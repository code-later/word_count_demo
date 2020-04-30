const { WordCounter } = require('../lib/word_counter');

let subject;

beforeEach(() => {
  subject = new WordCounter()
});

test('count words in text', () => {
  const input = "No, no, no, I kill the bus driver.";

  expect(subject.countWords(input)).toEqual([
    ['no', 3],
    ['i', 1],
    ['kill', 1],
    ['the', 1],
    ['bus', 1],
    ['driver', 1]
  ]);
});

test('ignore case during count', () => {
  const input = 'No, no'

  expect(subject.countWords(input)).toEqual([
    ['no', 2]
  ])
})

test('handle empty input', () => {
  const input = ''

  expect(subject.countWords(input)).toEqual([])
})
