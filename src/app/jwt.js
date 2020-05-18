import { html } from 'lit-html'

export default ({ back, token, copyToken, name, deleteToken }) => html`
  <div class="fixed h-48 bg-gray-800" />
  <div class="flex flex-col h-screen justify-between">
  <navigation class="px-6 pt-4 flex flex-row items-center w-screen justify-between">
    <button @click="${back}" href="#">
      <svg viewBox="0 0 20 20" class="w-8 h-8 text-white fill-current">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    </button>
    <h1 class="mx-6 font-bold text-xl text-gray-100">
      ${name}
    </h1>
    <button @click="${() => deleteToken(name)}" href="#">
      <svg fill="currentColor" viewBox="0 0 20 20" class="w-8 h-8 text-red-600 fill-current">
        <path d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" fill-rule="evenodd"></path>
      </svg>
    </button>
  </navigation>
  <p class="bg-gray-100 break-all mx-6 my-2 overflow-y-scroll rounded-lg p-4">
    ${token.error ? token.error : token.AuthenticationResult.IdToken}
  </p>
  <footer class="px-6 py-3">
    <button @click="${() => copyToken(token.AuthenticationResult.IdToken)}" class="bg-blue-500 w-full p-2 rounded-md text-white">Copy JWT</button>
  </footer>
`
