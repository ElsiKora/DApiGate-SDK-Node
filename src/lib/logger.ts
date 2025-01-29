export interface Logger {
	group(label?: string): void;

	groupEnd(): void;

	log(message: any, ...arguments_: Array<any>): void;
}
