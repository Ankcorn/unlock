import { html } from 'lit-html'


const textInput = ({ name }) => html`
  <div class="flex flex-col">
    <label class="text-gray-100 block text-sm font-bold mb-2">${name}</label>
    <input type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
  </div>
`;

export default ({ back }) => html`
  <div class="flex flex-col h-screen justify-between bg-gray-800">
  <navigation class="px-6 pt-2 flex flex-row items-center w-screen">
    <button class="py-2" @click="${back}" href="#">
      <svg viewBox="0 0 20 20" class="w-8 h-8 text-white fill-current">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    </button>
    <div class="bg-gray-200 rounded-lg shadow p-2">
      <h2 class="text-gray-800">Add authentication details</h2>
    </div>
  </navigation>
  <form class="flex-1 flex flex-col px-6 py-8 space-y-4">
    ${textInput({ name: 'Client ID'})}
    ${textInput({ name: 'User Pool ID'})}
    ${textInput({ name: 'Refresh Token'})}
  <footer class="px-6 py-3">
    <button @click="" class="bg-blue-500 w-full p-2 rounded-md text-white">Add Auth Config</button>
  </footer>
  </form>
`
