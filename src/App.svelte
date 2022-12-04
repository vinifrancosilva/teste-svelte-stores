<script>
  import svelteLogo from './assets/svelte.svg';
  import { data, loadData } from './lib/moduleTest.mjs';
  let dados={id: 0, title: "-"};

  function  load() {
    loadData();
    console.log($data);
    // dados = {... data}
    // // dados.id = data.dados.id;
    // // dados.title = data.dados.title;
    // console.log(dados);
  }

  load()
  
</script>

<main>
 <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
 <button on:click={load}>Load data</button>
<!-- <p>{dados}</p> -->
 <p>{$data.id} - {$data.title}</p>
  <!-- {#if dados} 
    {#each dados as row}
      <h1>
        <p>{row.title}</p>
      </h1>
    {/each}
  {:else}
    Loading...
  {/if} -->
</main>

<style>
  img {
    width: 100px;
    height: 100px
  }
</style>