# BankControllerApiControllerUpdateRequest

## Example Usage

```typescript
import { BankControllerApiControllerUpdateRequest } from "dapigate-sdk-node/models/operations";

let value: BankControllerApiControllerUpdateRequest = {
	id: "d39021e6-4587-454e-b303-53eb2f18341a",
	bankUpdateBodyDTO: {
		iconDark: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
		iconLight: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
		logoDark: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
		logoLight: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
		name: "raiffeisen",
	},
};
```

## Fields

| Field               | Type                                                                         | Required           | Description     | Example                              |
| ------------------- | ---------------------------------------------------------------------------- | ------------------ | --------------- | ------------------------------------ |
| `id`                | _string_                                                                     | :heavy_check_mark: | Bank identifier | d39021e6-4587-454e-b303-53eb2f18341a |
| `bankUpdateBodyDTO` | [components.BankUpdateBodyDTO](../../models/components/bankupdatebodydto.md) | :heavy_check_mark: | N/A             |                                      |
