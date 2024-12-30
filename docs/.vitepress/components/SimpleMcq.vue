<template>
  <div class="simple-mcq">
    <h3>Question {{ questionNumber }}: {{ question }}</h3>
    <div>
      <label
        v-for="(option, index) in options"
        :key="index"
        class="quiz-option"
      >
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
    <p v-if="explanationVisible && explanation" class="explanation">
      {{ explanation }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    questionNumber: {
      type: Number,
      required: true, // Required to display the question number
    },
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
    explanation: {
      type: String,
      required: false, // Explanation is optional
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
      explanationVisible: false,
    };
  },
  methods: {
    checkAnswer() {
      if (!this.selectedAnswer) {
        this.feedback = "Please select an answer!";
        this.feedbackColor = "red";
        this.explanationVisible = false;
      } else if (this.selectedAnswer === this.correctAnswer) {
        this.feedback = "Correct! 🎉";
        this.feedbackColor = "green";
        this.explanationVisible = true;
      } else {
        this.feedback = `Incorrect. The correct answer is ${this.correctAnswer}.`;
        this.feedbackColor = "red";
        this.explanationVisible = true;
      }
    },
  },
};
</script>

<style scoped>
.simple-mcq {
  margin-bottom: 20px;
}

.quiz-option {
  display: block; /* Ensures each option is on a new line */
  margin-bottom: 8px; /* Adds space between options */
}

.explanation {
  margin-top: 10px;
  font-style: italic;
  color: #555;
}
</style>
