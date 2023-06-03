function App() {
  return (
    <div className="text-gray-600">
      <div>
        <nav>
          <div>
            <h1>
              <a href="/">Food Ninja</a>
            </h1>
          </div>
          <ul>
            <li className="text-primary font-bold text-9xl">
              <a href="#">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main className="px-16 py-16">
        <div>
          <a href="#">Log in</a>
          <a href="#">Sign up</a>
        </div>

        <header>
          <h2 className="text-blue-400 text-3xl font-semibold border-b border-red-900">Recipes</h2>
          <h3 className="text-xl font-semibold">For Ninjas</h3>
        </header>

        <div>
          <h4 className="font-bold text-5xl uppercase">Latest Recipes</h4>

          <div>
            <div className="my-20 mx-10">
              <img src="img/stew.jpg" alt="stew" />
              <div>
                <span>5 Bean Chili Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4>Most Popular</h4>

          <div></div>
        </div>

        <div>
          <div className="bg-secondary-100">Load more</div>
        </div>
      </main>
    </div>
  )
}

export default App
