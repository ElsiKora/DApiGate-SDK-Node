# ApiListGetResponse

## Example Usage

```typescript
import { ApiListGetResponse } from "dapigate-sdk-node/models/components";

let value: ApiListGetResponse = {
	count: 1,
	currentPage: 1,
	items: [
		{
			createdAt: new Date("2025-01-01T00:00:00.000Z"),
			iconDark: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			iconLight: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			id: "7f61f2bf-aa2b-4a9e-baa5-f323e518a499",
			logoDark: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			logoLight: "data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC",
			name: "raiffeisen",
			updatedAt: new Date("2025-01-01T00:00:00.000Z"),
		},
	],
	totalCount: 1,
	totalPages: 1,
};
```

## Fields

| Field         | Type                                                                                     | Required           | Description                        | Example |
| ------------- | ---------------------------------------------------------------------------------------- | ------------------ | ---------------------------------- | ------- |
| `count`       | _number_                                                                                 | :heavy_minus_sign: | Bank Total number of items on page | 1       |
| `currentPage` | _number_                                                                                 | :heavy_minus_sign: | Bank Current page number           | 1       |
| `items`       | [components.BankGetListResponseDTO](../../models/components/bankgetlistresponsedto.md)[] | :heavy_minus_sign: | Array of Bank                      |         |
| `totalCount`  | _number_                                                                                 | :heavy_minus_sign: | Bank Total number of items         | 1       |
| `totalPages`  | _number_                                                                                 | :heavy_minus_sign: | Bank Total number of pages         | 1       |
