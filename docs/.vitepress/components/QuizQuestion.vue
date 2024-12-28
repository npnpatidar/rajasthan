<template>
  <div class="quiz-question">
    <h3>{{ question }}</h3>
    <div>
      <label v-for="(option, index) in options" :key="index">
        <input
          type="radio"
          :name="uniqueId"
          :value="option"
          v-model="selectedAnswer"
        />
        {{ option }}
      </label>
    </div>
    <button @click="checkAnswer">Submit</button>
    <p v-if="feedback" :style="{ color: feedbackColor }">{{ feedback }}</p>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
    uniqueId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedAnswer: null,
      feedback: "",
      feedbackColor: "black",
    };
  },
  methods: {
    checkAnswer() {
      if (!this.selectedAnswer) {
        this.feedback = "Please select an answer!";
        this.feedbackColor = "red";
      } else if (this.selectedAnswer === this.correctAnswer) {
        this.feedback = "Correct! 🎉";
        this.feedbackColor = "green";
      } else {
        this.feedback = `Incorrect. The correct answer is ${this.correctAnswer}.`;
        this.feedbackColor = "red";
      }
    },
  },
};
</script>

<style scoped>
.quiz-question {
  margin-bottom: 20px;
}
</style>
