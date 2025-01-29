# BankGetListResponseDTO

## Example Usage

```typescript
import { BankGetListResponseDTO } from "dapigate-sdk-node/models/components";

let value: BankGetListResponseDTO = {
	createdAt: new Date("2025-01-01T00:00:00.000Z"),
	iconDark: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
	iconLight: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
	id: "7f61f2bf-aa2b-4a9e-baa5-f323e518a499",
	logoDark: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
	logoLight: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
	name: "raiffeisen",
	updatedAt: new Date("2025-01-01T00:00:00.000Z"),
};
```

## Fields

| Field       | Type                                                                                          | Required           | Description                              | Example                                                                                                                                                                                                                    |
| ----------- | --------------------------------------------------------------------------------------------- | ------------------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt` | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign: | Bank creation date                       | 2025-01-01T00:00:00.000Z                                                                                                                                                                                                   |
| `iconDark`  | _string_                                                                                      | :heavy_minus_sign: | Bank base64 encoded dark theme icon      | data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC |
| `iconLight` | _string_                                                                                      | :heavy_minus_sign: | Bank base64 encoded light theme icon     | data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC |
| `id`        | _string_                                                                                      | :heavy_minus_sign: | Bank identifier                          | 7f61f2bf-aa2b-4a9e-baa5-f323e518a499                                                                                                                                                                                       |
| `logoDark`  | _string_                                                                                      | :heavy_minus_sign: | Bank base64 encoded dark theme logotype  | data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC |
| `logoLight` | _string_                                                                                      | :heavy_minus_sign: | Bank base64 encoded light theme logotype | data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC |
| `name`      | _string_                                                                                      | :heavy_minus_sign: | Bank name                                | raiffeisen                                                                                                                                                                                                                 |
| `updatedAt` | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign: | Bank last update date                    | 2025-01-01T00:00:00.000Z                                                                                                                                                                                                   |
