declare const __brand: unique symbol;
export type ClosedEnum<T> = T[keyof T];

export type OpenEnum<T> = Prettify<T[keyof T]> | Unrecognized<T[keyof T] extends number ? number : string>;

export type Unrecognized<T> = { [__brand]: "unrecognized" } & T;
type Prettify<T> = { [K in keyof T]: T[K] } & {};

export function catchUnrecognizedEnum<T>(value: T): Unrecognized<T> {
	return value as Unrecognized<T>;
}
