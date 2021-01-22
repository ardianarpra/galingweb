<h1>about pages jhon</h1>
<script>
    import Modal from '../components/Modal.svelte';

    let showModal = false;

    let toggleModal = () =>{
        showModal = !showModal;
    }


</script>

<style></style>


<Modal {showModal} on:click={toggleModal}>
    <form>
        <input type="text" placeholder="name">
        <input type="text" placeholder="belt colour">
        <button>add Ninja</button>
    </form>

    <div slot="title">
        <h3>Add a ninjas</h3>
    </div>
</Modal>

