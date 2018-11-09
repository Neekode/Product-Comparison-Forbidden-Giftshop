// My products: Artifacts from the Forbidden Giftshop
export const theProducts = 
{
	chalice: () =>
	{
		return {
			id: 1,
			name: "Chalice of Immortality",
			price: 435.56,
			cursedScale: 8,
			description: "Forbidden Cup",
			stocked: true,
			img: require("../img/chalice.jpg")
		}
	},

	necro: () =>
	{
		return {
			id: 2,
			name: "The Necronomicon",
			price: 1285.42,
			cursedScale: 9,
			description: "Very Evil Book",
			stocked: false,
			img: require("../img/necro.jpg")
		}
	},

	ring: () =>
	{
		return {
			id: 3,
			name: "The Ring of Chaos",
			price: 6227.56,
			cursedScale: 15,
			description: "Do Not Wear",
			stocked: true,
			img: require("../img/ring.jpg")
		}
	},

	sword: () =>
	{
		return {
			id: 4,
			name: "Sword of Destruction",
			price: 847.22,
			cursedScale: 4,
			description: "Warning: Sharp",
			stocked: true,
			img: require("../img/sword.jpg")
		}
	},
}
