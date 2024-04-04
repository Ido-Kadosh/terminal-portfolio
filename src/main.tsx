import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import './assets/css/josefin.css';
import Terminal from './cmps/Terminal.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className="bg-main h-screen bg-no-repeat bg-cover bg-center grid place-items-center">
			<Terminal />
		</div>
	</React.StrictMode>
);
