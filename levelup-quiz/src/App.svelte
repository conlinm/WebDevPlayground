<script>
  import Quiz from "./Quiz.svelte";
</script>

<main>
  <h1>Quiz Buddy</h1>
</main>
<div>
  <Quiz />
</div>

<style>
  :global(body){
    background: #524763;
  }
  div {
    background: white;
    border-radius: 15px;
    padding: 40px;
  }
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
