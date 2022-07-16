export {};
declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: 'development' | 'production';
		readonly VITE_DEV_SERVER_HOST: string;
		readonly VITE_DEV_SERVER_PORT: string;
	}
}
declare module '*.json' {
	const value: any;
	export default value;
}
declare global {
	interface Window {
		ipcRenderer: any;
	}
}