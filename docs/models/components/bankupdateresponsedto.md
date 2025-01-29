# BankUpdateResponseDTO

## Example Usage

```typescript
import { BankUpdateResponseDTO } from "dapigate-sdk-node/models/components";

let value: BankUpdateResponseDTO = {
	createdAt: new Date("2025-01-01T00:00:00.000Z"),
	iconDark: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
	iconLight: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
	id: "594c0356-e582-44f7-938b-7ec99b3cb25b",
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
| `id`        | _string_                                                                                      | :heavy_minus_sign: | Bank identifier                          | 594c0356-e582-44f7-938b-7ec99b3cb25b                                                                                                                                                                                       |
| `logoDark`  | _string_                                                                                      | :heavy_minus_sign: | Bank base64 encoded dark theme logotype  | data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC |
| `logoLight` | _string_                                                                                      | :heavy_minus_sign: | Bank base64 encoded light theme logotype | data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC |
| `name`      | _string_                                                                                      | :heavy_minus_sign: | Bank name                                | raiffeisen                                                                                                                                                                                                                 |
| `updatedAt` | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign: | Bank last update date                    | 2025-01-01T00:00:00.000Z                                                                                                                                                                                                   |
