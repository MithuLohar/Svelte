<script>
    import Profile from './Profile.svelte'
    import {auth,googleProvider} from './firbase'
    import {authState} from 'rxfire/auth'
    import Todo from './Todoitem.svelte'

    let user 
    const unsubscribe=authState(auth).subscribe(u=>user=u)

    function login(){
        auth.signInWithPopup(googleProvider)
    }

</script>

<section>
    {#if user}
        <Profile {...$user}/>
        <button on:click={()=>auth.signOut()} class="btn btn-danger">Log out</button>
        <hr>
        <Todo uid={$user.uid}/>
    {:else}
         <button on:click={login} class="btn btn-info">
        Signin with Google</button>


    {/if}
</section>