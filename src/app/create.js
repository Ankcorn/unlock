import { html } from 'lit-html'

export default ({ back }) => html`
  <div class="flex flex-col h-screen justify-between bg-gray-800">
  <navigation class="px-6 pt-2 flex flex-row items-center w-screen">
    <button @click="${back}" href="#">
      <svg viewBox="0 0 20 20" class="w-8 h-8 text-white fill-current">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    </button>
  </navigation>
  <form class="flex-1">
	<select>
		<option></option>
	</select>
  </form>
  <footer class="px-6 py-3">
    <button @click="" class="bg-blue-500 w-full p-2 rounded-md text-white">Copy JWT</button>
  </footer>
`
