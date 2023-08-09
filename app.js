const natural = require('natural');
const TfIdf = natural.TfIdf;
const tfidf = new TfIdf();

const codeSolution1 = `
function add(a, b) {
    return a + b;
}
`;

const codeSolution2 = `
function computeSummation(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
`;

const codeSolution3 = `
<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="incrementCount">{{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Vue Code Snippet 1",
      count: 0
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    }
  }
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
`;

const codeSolution4 = `
<template>
  <section>
    <h2>{{ headerText }}</h2>
    <button @click="addOne">{{ counter }}</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      headerText: "Vue Code Snippet 2",
      counter: 0
    };
  },
  methods: {
    addOne() {
      this.counter++;
    }
  }
};
</script>

<style scoped>
h2 {
  color: green;
}
</style>
`;

// Add documents to TF-IDF
tfidf.addDocument(codeSolution3);
tfidf.addDocument(codeSolution4);

// Compute similarity
const vector1 = tfidf.tfidfs(codeSolution3);
const vector2 = tfidf.tfidfs(codeSolution4);

function cosineSimilarity(vecA, vecB) {
    const dotProduct = vecA.reduce((sum, a, index) => sum + a * vecB[index], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
    return dotProduct / (magnitudeA * magnitudeB);
}

console.log(cosineSimilarity(vector1, vector2));
