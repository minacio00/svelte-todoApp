<script>
    import { goto } from "$app/navigation";

    let username = '';
    let password = '';
    async function createUser() {
    const response = await fetch('https://127.0.0.1:7021/User', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': 'http://127.0.0.1:5173/user'
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      goto('/')
    } else {
    alert("não foi possível criar um usuário");
    }
  }
</script>

<div class="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 max-w-lg md:content-center mx-5">
    <h2 class="text-2xl font-semibold mb-4">User Registration</h2>
    <form on:submit={createUser}>
      <div class="mb-4">
        <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
        <input type="text" id="username" bind:value={username} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input type="password" id="password" bind:value={password} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div class="flex items-center justify-between">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Register
        </button>
      </div>
    </form>
  </div>