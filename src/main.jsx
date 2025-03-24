import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { StrictMode } from 'react'

// import '@fontsource/roboto/300.css'
// import '@fontsource/roboto/400.css'
// import '@fontsource/roboto/500.css'
// import '@fontsource/roboto/700.css'

const root = createRoot(document.getElementById('root'))
root.render(
	<StrictMode>
		<App />
	</StrictMode>
)
