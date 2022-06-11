<script>
  import { fade } from "svelte/transition";
  import Question from "./Question.svelte";
  import Modal from "./Modal.svelte";
  import { score } from "./store.js";

  let quiz = getQuiz();
  let activeQuestion = 0;
  let isModalOpen = false;

  function pickAnswer(answer) {
    if (answer === correctAnswer) {
      result = "Correct!";
    } else {
      result = "Incorrect";
    }
  }

  async function getQuiz() {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&category=12&type=multiple"
    );
    const quiz = await response.json();
    return quiz;
  }

  function nextQuestion() {
    activeQuestion += 1;
  }

  function resetQuiz() {
    isModalOpen = false;
    score.set(0);
    activeQuestion = 0;
    quiz = getQuiz();
  }

  // reactive expressions
  $: if ($score > 2) {
    isModalOpen = true;
    //resetScore();
  }

  // reactive declaration
  $: questionNumber = activeQuestion + 1;
</script>

<div>
  <button on:click={resetQuiz}>Start New Quiz</button>
<!-- $ is the auto subscription -->
  <h3>My Score: {$score}</h3>
  <h4>Question #{questionNumber}</h4>
<div class="container">

    {#await quiz}
    Loading...
    {:then data}
    {#each data.results as question, index}
    {#if index === activeQuestion}
    <div transition:fade class="fade-wrapper">
        <Question {nextQuestion} {question} />
    </div>
    {/if}
    {/each}
    {/await}
</div>
</div>

{#if isModalOpen}
  <!-- the 'close' here must match the string dispatched from the event -->
  <Modal on:close={resetQuiz}>
    <h2>You Won!</h2>
    <p>Congratulations!</p>
    <button on:click={resetQuiz}>Start Over</button>
  </Modal>
{/if}

<style>
    .container {
        min-height: 300px;
    }
  .fade-wrapper {
    position: absolute;
  }
</style>
