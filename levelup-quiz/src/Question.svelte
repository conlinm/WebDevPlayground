<script>
  export let question;
  export let nextQuestion;
  import { score } from "./store.js";

  let isCorrect;
  let isAnswered = false;

  let answers = question.incorrect_answers.map((answer) => ({
    answer,
    correct: false,
  }));

  let allAnswers = [
    ...answers,
    {
      answer: question.correct_answer,
      correct: true,
    },
  ];

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(allAnswers);

  function checkQuestion(correct) {
    if (!isAnswered) {
      isAnswered = true;
      isCorrect = correct;
      if (correct) {
        score.update((val) => val + 1);
      }
    }
  }
</script>

<h3>{@html question.question}</h3>

{#if isAnswered}
  <!-- class element directive in the h5 -->
  <h5 class:isCorrect class:wrong={!isCorrect}>
    {#if isCorrect}
      You got it right!
    {:else}
      You goofed!
    {/if}
  </h5>
{/if}

{#each allAnswers as answer}
  <button class='answer' disabled={isAnswered} on:click={() => checkQuestion(answer.correct)}>
    {@html answer.answer}
  </button>
{/each}

{#if isAnswered}
  <div>
    <button on:click={nextQuestion}>Next Question </button>
  </div>
{/if}

<style> 
    .answer {
        display:block;
    }
  /* style by class element directive */
  h5.isCorrect {
    color: green;
  }

  h5.wrong {
    color: red;
  }
</style>
