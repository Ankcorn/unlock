export default class JWTView {
  constructor() {
    const body = document.querySelector('body')
    body.innerHTML = `
    <div class="fixed h-48 bg-gray-800" />
    <div class="flex flex-col h-screen justify-between">
    <navigation class="px-6 pt-2 flex flex-row items-center w-screen">
      <button href="#">
        <svg viewBox="0 0 20 20" class="w-8 h-8 text-white fill-current">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
      </button>
      <h1 class="mx-6 font-bold text-xl text-gray-100">
        Google @ NearSt
      </h1>
    </navigation>
    <main class="bg-gray-100 h-full mx-6 my-2 rounded-lg p-4">
    </main>
    <footer class="px-6 py-3">
      <button class="bg-blue-500 w-full p-2 rounded-md text-white">Copy JWT</button>
    </footer>`
  }
}
