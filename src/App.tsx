// import { createContext, useState } from 'react'
// import Header from './components/Header'
// import Post from './components/Post'

import { useState } from 'react'

// // Create Context
// export const ThemeContext = createContext()

// function App() {
// 	const [isDark, setIsDark] = useState(true)

// 	const value = {
// 		isDark,
// 		setIsDark,
// 	}

// 	return (
// 		<ThemeContext.Provider value={value}>
// 			<Header />
// 			<Post />
// 		</ThemeContext.Provider>
// 	)
// }

// export default App
const App = () => {
	const [count, setCount] = useState(0)

	return (
		<div>
			<h1>hello</h1>
			<button type="button" onClick={() => setCount(count + 1)}>
				Click Me!
			</button>
		</div>
	)
}

export default App
