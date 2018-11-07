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
			description: "Drink one sip from this goblet and it's user will live forever. For a dark price.",
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
			description: "Spells from all ages. The tome gives it's user to control forces of death, but not their own.",
			stocked: false,
			img: require("../img/necro.jpg")
		}
	},

	ring: () =>
	{
		return {
			id: 3,
			name: "Ring of Chaos",
			price: 6227.56,
			cursedScale: 15,
			description: "The wearer of this ring brings chaos to their entire universe. Extremely Dangerous.",
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
			description: "One swing of this blade can cut a mountain in half. They must have a very high willpower to use.",
			stocked: true,
			img: require("../img/sword.jpg")
		}
	},
}
