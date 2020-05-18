import { html } from 'lit-html'


const textInput = ({ name, placeholder, type }) => html`
  <div class="flex flex-col">
    <label class="text-gray-100 block text-sm font-bold mb-2" html-for="${name}">${name}</label>
    <input
      class="shadow-inner shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="${name}"
      name="${name}"
      type="${type ? type : "text"}"
      placeholder="${placeholder}"
    />
  </div>
`;

export default ({ back, submit }) => html`
  <div class="flex flex-col h-screen bg-gray-800">
  <navigation class="px-6 pt-4 flex flex-row items-center w-screen">
    <button @click="${back}" href="#">
      <svg viewBox="0 0 20 20" class="w-8 h-8 text-white fill-current">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    </button>
  </navigation>
  <form @submit="${submit}" class="flex-1 flex flex-col px-6 space-y-4">
    ${textInput({ name: 'Name', placeholder: 'Bobs Best Tokens' })}
    ${textInput({ name: 'User Pool ID', placeholder: 'eu-west-1_abdef' })}
    ${textInput({ name: 'App Client ID', placeholder: 'zxcvbvbnmasd' })}
    ${textInput({ name: 'Refresh Token', type: 'password', placeholder: 'shhhh' })}
    <button type="submit" class="bg-blue-500 w-full p-2 rounded-md text-white">Add Auth Config</button>
  </form>
`
