<script>
  import { fly, fade } from "svelte/transition";
//   createEventDispatcher() will allow us to dispatch events from the component to the parent
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<div class="modal-wrapper" transition:fade>
  <div class="modal" transition:fly={{ y: 200 }}>
    <!-- dispatch 'close' event when the modal is closed -->
    <button on:click={
        ()=> dispatch('close')
        }>Close</button>
    <slot />
  </div>
</div>

<style>
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 0, 0, 0.6);
  }

  .modal {
    background-color: white;
    border-radius: 15px;
    padding: 20px;
  }
</style>
