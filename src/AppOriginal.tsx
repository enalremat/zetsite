// import './App.css';

// import { useState } from 'react';

// // import logo from '@/assets/logo.svg';

// function App() {
//   // const [count, setCount] = useState(0);
//   const [note, setNote] = useState('');
//   const [customUrl, setCustomUrl] = useState('');

//   const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
//     setNote(e.target.value);
//   }

//   const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
//     setCustomUrl(e.target.value);
//   }

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log('Note submitted: ', note);

//     // Create a Blob from the note
//     const blob = new Blob ([note], {type: 'text/markdown'});
//     // Create a URL from the Blob
//     const url = window.URL.createObjectURL(blob);
//     // Create a link element
//     const link = document.createElement('a')
//     link.href = url
//     link.download = `${customUrl}.md`
//     // Append the link to the body
//     document.body.appendChild(link)
//     link.click()
//     // Clean up
//     document.body.removeChild(link)
//     window.URL.revokeObjectURL(url)
//   }

//   return (
//     <div className="container">
//       <div className="text-container-border">
//         <div className="text-container">
//           <form onSubmit={handleSubmit}>
//             <input
//             className="url-input"
//             type="text"
//             value={customUrl}
//             onChange={handleUrlChange}
//             placeholder="Enter custom URL"
//             />
//             <textarea
//             className="note-textarea"
//             value={note}
//             onChange={handleNoteChange}
//             placeholder="Enter your note here"
//             rows={5}
//             cols={50}
//             />
//             <button type='submit'>Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>Hello Vite + React!</p>
//     <p>
//       <button type="button" onClick={() => setCount((count) => count + 1)}>
//         Count is: {count}
//       </button>
//     </p>
//     <p>
//       Edit <code>App.tsx</code> and save to test HMR updates.
//     </p>
//     <p>
//       <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//         Learn React
//       </a>
//       {' | '}
//       <a
//         className="App-link"
//         href="https://vitejs.dev/guide/features.html"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Vite Docs
//       </a>
//     </p>
//   </header>
// </div>
//

//   );
// }

// export default App;
