import * as z from "zod";

export function bytesFromBase64(encoded: string): Uint8Array {
	return Uint8Array.from(atob(encoded), (c) => c.charCodeAt(0));
}

export function bytesToBase64(u8array: Uint8Array): string {
	return btoa(String.fromCodePoint(...u8array));
}

export function stringFromBase64(b64string: string): string {
	return stringFromBytes(bytesFromBase64(b64string));
}

export function stringFromBytes(u8array: Uint8Array): string {
	return new TextDecoder().decode(u8array);
}

export function stringToBase64(string_: string): string {
	return bytesToBase64(stringToBytes(string_));
}

export function stringToBytes(string_: string): Uint8Array {
	return new TextEncoder().encode(string_);
}

export const zodOutbound = z.instanceof(Uint8Array).or(z.string().transform(stringToBytes));

export const zodInbound = z.instanceof(Uint8Array).or(z.string().transform(bytesFromBase64));
