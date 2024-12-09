import { Classes, type Skill, SkillSource } from './SkillType';

export const all_skills: Skill[] = [
	{
		name: 'Blubber Up',
		notes: '5 moxie / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 3,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Cannelloni Cocoon',
		notes: 'Heal 1,000 HP',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 12,
		sc_permed: true,
		hc_permed: true,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Pastamastery',
		notes: 'Summons 3 dry noodles',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 5,
		sc_permed: true,
		hc_permed: true,
		tags: ['turns', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Advanced Cocktailcrafting',
		notes: 'Summons 3 AC ingredients',
		source: SkillSource.CLASS,
		class: Classes.DISCO_BANDIT,
		level: 5,
		sc_permed: true,
		hc_permed: true,
		tags: ['turns', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'The Ode to Booze',
		notes: '1 adv/full from booze',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 12,
		sc_permed: true,
		hc_permed: true,
		tags: ['turns', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Smooth Movements',
		notes: '-5% combat',
		source: SkillSource.CLASS,
		class: Classes.DISCO_BANDIT,
		level: 14,
		sc_permed: true,
		hc_permed: true,
		tags: ['misc', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Sonata of Sneakiness',
		notes: '-5% combat',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 13,
		sc_permed: true,
		hc_permed: true,
		tags: ['misc', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Advanced Saucecrafting',
		notes: 'Summons 3 scrumptious reagents',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 5,
		sc_permed: true,
		hc_permed: true,
		tags: ['turns', 'misc', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Saucemaven',
		notes: '3 turns to saucy food, 5 if a mys class',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 11,
		sc_permed: true,
		hc_permed: true,
		tags: ['turns', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'The Way of Sauce',
		notes: 'Summons 2 scrumptious reagents, unlocks recipes',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 15,
		sc_permed: true,
		hc_permed: true,
		tags: ['turns', 'misc', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Bowl Full of Jelly',
		notes: 'Summons a 1-fullness epic food',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['turns', 'tierlist'],
		last_available: 2020
	},
	{
		name: 'Eye and a Twist',
		notes: 'Summons a 1-potency epic booze',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['turns', 'tierlist'],
		last_available: 2020
	},
	{
		name: 'Grab a Cold One',
		notes: 'Summons a 1-potency epic booze',
		source: SkillSource.DREADSYLVANIA,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['turns', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Spaghetti Breakfast',
		notes: 'Summons a 1-fullness epic food',
		source: SkillSource.DREADSYLVANIA,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['turns', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Lock Picking',
		notes: 'Summons a hero key',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc_permed: true,
		hc_permed: true,
		tags: ['misc', 'tierlist'],
		last_available: 2020
	},
	{
		name: 'Mad Looting Skillz',
		notes: '20% item',
		source: SkillSource.CLASS,
		class: Classes.DISCO_BANDIT,
		level: 8,
		sc_permed: true,
		hc_permed: true,
		tags: ['item', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: "Fat Leon's Phat Loot Lyric",
		notes: '20% item',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 7,
		sc_permed: true,
		hc_permed: true,
		tags: ['item', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Amphibian Sympathy',
		notes: '5 familiar weight',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 5,
		sc_permed: true,
		hc_permed: true,
		tags: ['xp', 'item', 'meat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Super-Advanced Meatsmithing',
		notes: 'Allows you to smith more stuff',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 5,
		sc_permed: false,
		hc_permed: false,
		tags: ['turns', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: "Carlweather's Cantata of Confrontation",
		notes: '5% combat',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 14,
		sc_permed: true,
		hc_permed: true,
		tags: ['misc', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Leash of Linguini',
		notes: '5 familiar weight / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 11,
		sc_permed: true,
		hc_permed: true,
		tags: ['xp', 'item', 'meat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Empathy of the Newt',
		notes: '5 familiar weight / 5 turns',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 8,
		sc_permed: true,
		hc_permed: true,
		tags: ['xp', 'item', 'meat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Superhuman Cocktailcrafting',
		notes: "Summons 2 AC ingredients, access to Nash Crosby's still",
		source: SkillSource.CLASS,
		class: Classes.DISCO_BANDIT,
		level: 15,
		sc_permed: true,
		hc_permed: true,
		tags: ['turns', 'misc', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Transcendental Noodlecraft',
		notes: 'Summons 2 dry noodles, unlocks recipes',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 15,
		sc_permed: true,
		hc_permed: true,
		tags: ['turns', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'The Long View',
		notes: '3 rollover adventures',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 12,
		sc_permed: true,
		hc_permed: true,
		tags: ['turns', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Hide of the Walrus',
		notes: '50 damage absorption',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 7,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Brain Games',
		notes: '3 rollover adventures',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['turns', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Torso Awareness',
		notes: 'Wear shirts',
		source: SkillSource.QUEST,
		class: null,
		level: null,
		sc_permed: true,
		hc_permed: true,
		tags: ['xp', 'combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Patient Smile',
		notes: '1 mus substat/combat',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 14,
		sc_permed: false,
		hc_permed: false,
		tags: ['xp', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Wry Smile',
		notes: '1 mys substat/combat',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 13,
		sc_permed: false,
		hc_permed: false,
		tags: ['xp', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Knowing Smile',
		notes: '1 mox substat/combat',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 14,
		sc_permed: false,
		hc_permed: false,
		tags: ['xp', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: "Aloysius' Antiphon of Aptitude",
		notes: '1 all substat/combat / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 11,
		sc_permed: true,
		hc_permed: true,
		tags: ['xp', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Dimples, How Merry!',
		notes: '1 substat/combat',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['xp', 'tierlist'],
		last_available: 2020
	},
	{
		name: "Drescher's Annoying Noise",
		notes: '10 ML / 20 turns',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc_permed: true,
		hc_permed: true,
		tags: ['xp', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Claws of the Walrus',
		notes: '7 weapon damage',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 8,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: "Ur-Kel's Aria of Annoyance",
		notes: 'level*2 ML / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 15,
		sc_permed: false,
		hc_permed: false,
		tags: ['xp', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Ancient Crymbo Lore',
		notes: '3 substat/combat in December',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['xp', 'tierlist'],
		last_available: 2021
	},
	{
		name: 'Powers of Observatiogn',
		notes: '10% item',
		source: SkillSource.QUEST,
		class: null,
		level: null,
		sc_permed: true,
		hc_permed: true,
		tags: ['item', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: '20/20 Vision',
		notes: '10% item',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc_permed: true,
		hc_permed: true,
		tags: ['item', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: "Singer's Faithful Ocelot",
		notes: '10% item / 10 turns',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc_permed: true,
		hc_permed: true,
		tags: ['item', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Thief Among the Honorable',
		notes: '5% item and 10% meat',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 10,
		sc_permed: false,
		hc_permed: false,
		tags: ['item', 'meat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Natural Born Scrabbler',
		notes: '5% item',
		source: SkillSource.HOBOPOLIS,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['item', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Bind Spice Ghost',
		notes: '5% item / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 15,
		sc_permed: false,
		hc_permed: false,
		tags: ['item', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Sensitive Fingers',
		notes: '10% pickpocket',
		source: SkillSource.CLASS,
		class: Classes.DISCO_BANDIT,
		level: 14,
		sc_permed: false,
		hc_permed: false,
		tags: ['item', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Master Accordion Master Thief',
		notes: '10% pickpocket',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 13,
		sc_permed: false,
		hc_permed: false,
		tags: ['item', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Always Never Not Guzzling',
		notes: '25% booze',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['item', 'tierlist'],
		last_available: 2020
	},
	{
		name: 'Curse of Weaksauce',
		notes: 'Delevels 3%/round',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 12,
		sc_permed: true,
		hc_permed: true,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Itchy Curse Finger',
		notes: 'Curses stagger',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 8,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Tao of the Terrapin',
		notes: 'Doubles power of hat and pants',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 15,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'The Moxious Madrigal',
		notes: '10 moxie / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 1,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Saucestorm',
		notes: 'Cold and hot damage spell',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 5,
		sc_permed: true,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Stuffed Mortar Shell',
		notes: 'Random damage spell',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 8,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Skin of the Leatherback',
		notes: 'level/2 damage reduction',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 2,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Tongue of the Walrus',
		notes: 'Removes beaten up and heals 30-40',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 9,
		sc_permed: true,
		hc_permed: true,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Conspiratorial Whispers',
		notes: 'Instant delevel and damage per familiar weight',
		source: SkillSource.DREADSYLVANIA,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Astral Shell',
		notes: '80 damage absorption and 1 all res / 5 turns',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 12,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'misc', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Ghostly Shell',
		notes: '80 damage absorption / 5 turns',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 4,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Elemental Saucesphere',
		notes: '2 all res / 5 turns',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 4,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'misc', 'marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Subtle and Quick to Anger',
		notes: '10% spell damage',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 12,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Master Saucier',
		notes: '10% spell damage',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 10,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Slimy Sinews',
		notes: 'max HP',
		source: SkillSource.THE_SLIME_TUBE,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Spirit of Ravioli',
		notes: '25% max HP',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 9,
		sc_permed: true,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Shadow Noodles',
		notes: 'Stun for 3-5 rounds and delevels',
		source: SkillSource.DREADSYLVANIA,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Lunging Thrust-Smack',
		notes: 'Triple weapon damage plus bonus damage if a Seal Clubber',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 10,
		sc_permed: true,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Entangling Noodles',
		notes: 'Staggers and delevels',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 2,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Hero of the Half-Shell',
		notes: 'Shields reduce damage with muscle rather than moxie',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 14,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Abs of Tin',
		notes: '10% max HP',
		source: SkillSource.HOBOPOLIS,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Cold-Blooded Fearlessness',
		notes: '2 spooky res',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 13,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Rage of the Raindeer',
		notes: '10% muscle and 10 weapon damage / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 11,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Diminished Gag Reflex',
		notes: '2 stench res',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 13,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'misc', 'marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Tolerance of the Kitchen',
		notes: '2 hot res',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 13,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'misc', 'marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Heart of Polyester',
		notes: '2 sleaze res',
		source: SkillSource.CLASS,
		class: Classes.DISCO_BANDIT,
		level: 13,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Shield of the Pastalord',
		notes: 'Reduce physical damage by 10% or 30% if a pastamancer / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 8,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Splashdance',
		notes: 'Instant heal',
		source: SkillSource.DREADSYLVANIA,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Saucy Salve',
		notes: 'Instant heal',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 2,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Power Ballad of the Arrowsmith',
		notes: '10 muscle and 20 HP / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 4,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Jalapeño Saucesphere',
		notes: '3 damage resistance and damage attacker / 5 turns',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 7,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Irrepressible Spunk',
		notes: '5% max HP and MP',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 14,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'mp', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Saucegeyser',
		notes: 'Cold or hot damage',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 11,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Gnomish Hardigness',
		notes: '5% max HP',
		source: SkillSource.QUEST,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Double-Fisted Skull Smashing',
		notes: 'Dual wield weapons',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 12,
		sc_permed: true,
		hc_permed: true,
		tags: ['marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Song of Sauce',
		notes: '50 hot damage, hot spell damage, 100% spell damage / 10 turns',
		source: SkillSource.DREADSYLVANIA,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Song of the North',
		notes: '50 cold damage, 100% weapon damage / 10 turns',
		source: SkillSource.DREADSYLVANIA,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Shell Up',
		notes: 'Blocks and deals 10% of muscle as damage',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 5,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Sauceshell',
		notes: 'Blocks and deals 80 hot damage',
		source: SkillSource.DREADSYLVANIA,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Scarysauce',
		notes: '2 cold and sleaze res and damages attackers / 5 turns',
		source: SkillSource.QUEST,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Club Earth',
		notes: 'Staggering attack',
		source: SkillSource.DREADSYLVANIA,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Disco Fever',
		notes: '10% moxie and 10 ranged damage / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.DISCO_BANDIT,
		level: 13,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Northern Exposure',
		notes: '2 cold res',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 13,
		sc_permed: true,
		hc_permed: true,
		tags: ['combat', 'misc', 'marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: "Brawnee's Anthem of Absorption",
		notes: 'level^1.2 damage reduction / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 8,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Reptilian Fortitude',
		notes: '30 max HP / 5 turns',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 10,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'The Psalm of Pointiness',
		notes: '6 damage and delevels attackers / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 10,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Spiky Shell',
		notes: '4 damage to attackers / 5 turns',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 9,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Stiff Upper Lip',
		notes: '10 DR',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 3,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Northern Explosion',
		notes: 'A smack that is all cold damage',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 13,
		sc_permed: false,
		hc_permed: false,
		tags: ['marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Disco Smirk',
		notes: '10 moxie / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.DISCO_BANDIT,
		level: 8,
		sc_permed: false,
		hc_permed: false,
		tags: ['combat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Visit your Favorite Bird',
		notes: '100% meat, 150% initiative, 50% item, or -11% combat / 20 turns',
		source: SkillSource.IOTM,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['misc', 'tierlist'],
		last_available: 2020
	},
	{
		name: 'Mariachi Memory',
		notes: '1 additional AT song',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 15,
		sc_permed: true,
		hc_permed: true,
		tags: ['misc', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'CLEESH',
		notes: 'Turns the monster into one of various amphibians',
		source: SkillSource.QUEST,
		class: null,
		level: null,
		sc_permed: true,
		hc_permed: false,
		tags: ['misc', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Dead Nostrils',
		notes: '1  stench res, 1 stench spell damage',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['misc', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Flavour of Magic',
		notes: 'Tune pastamancer skills, 10 spell damage',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 14,
		sc_permed: false,
		hc_permed: false,
		tags: ['misc', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Thick-skinned',
		notes: '10 max HP and MP',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['mp', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'The Magical Mojomuscular Melody',
		notes: '10 mysticality, 20 max HP / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 2,
		sc_permed: false,
		hc_permed: false,
		tags: ['mp', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Wisdom of the Elder Tortoises',
		notes: '50% max MP',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 11,
		sc_permed: false,
		hc_permed: false,
		tags: ['mp', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Slimy Synapses',
		notes: 'max MP',
		source: SkillSource.THE_SLIME_TUBE,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['mp', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Marginally Insane',
		notes: '10% max MP',
		source: SkillSource.HOBOPOLIS,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['mp', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Blood Sugar Sauce Magic',
		notes: '10% max MP and -10% max HP or 30% for Saucerors',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 15,
		sc_permed: false,
		hc_permed: false,
		tags: ['mp', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Cosmic Ugnderstanding',
		notes: '5% max MP',
		source: SkillSource.QUEST,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['mp', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'The Polka of Plenty',
		notes: '50% meat / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 5,
		sc_permed: false,
		hc_permed: false,
		tags: ['meat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Nimble Fingers',
		notes: '20% meat',
		source: SkillSource.CLASS,
		class: Classes.DISCO_BANDIT,
		level: 6,
		sc_permed: false,
		hc_permed: false,
		tags: ['meat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Inner Sauce',
		notes: '1 MP/adventure or 3 for saucerors',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 4,
		sc_permed: false,
		hc_permed: false,
		tags: ['meat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Five Finger Discount',
		notes: '5% discount at stores',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 7,
		sc_permed: false,
		hc_permed: false,
		tags: ['meat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Expert Panhandling',
		notes: '10% meat or 15% with a saucepan',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 3,
		sc_permed: false,
		hc_permed: false,
		tags: ['meat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Gnefarious Pickpocketing',
		notes: '10% meat',
		source: SkillSource.QUEST,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['meat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Disco Leer',
		notes: '10% meat / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.DISCO_BANDIT,
		level: 15,
		sc_permed: false,
		hc_permed: false,
		tags: ['meat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Thrift and Grift',
		notes: '10% meat',
		source: SkillSource.HOBOPOLIS,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['meat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Musk of the Moose',
		notes: '5% combat',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 14,
		sc_permed: true,
		hc_permed: true,
		tags: ['misc', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Bind Lasagmbie',
		notes: '10% meat / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 13,
		sc_permed: false,
		hc_permed: false,
		tags: ['meat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Springy Fusili',
		notes: '40% initiative / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 6,
		sc_permed: false,
		hc_permed: false,
		tags: ['init', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Overdeveloped Sense of Self Preservation',
		notes: '20% initiative',
		source: SkillSource.CLASS,
		class: Classes.DISCO_BANDIT,
		level: 2,
		sc_permed: false,
		hc_permed: false,
		tags: ['init', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Slimy Shoulders',
		notes: 'initiative',
		source: SkillSource.THE_SLIME_TUBE,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['init', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: "Cletus's Canticle of Celerity",
		notes: '20% initiative / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 3,
		sc_permed: false,
		hc_permed: false,
		tags: ['init', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Suspicious Gaze',
		notes: '20% initiative / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 8,
		sc_permed: false,
		hc_permed: false,
		tags: ['init', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: "Walberg's Dim Bulb",
		notes: '10% initiative / 10 turns',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['init', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Song of Slowness',
		notes: '50% initiative / 10 turns',
		source: SkillSource.DREADSYLVANIA,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['init', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Bind Angel Hair Wisp',
		notes: '10% initiative / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 7,
		sc_permed: false,
		hc_permed: false,
		tags: ['init', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Blessing of the Storm Tortoise',
		notes: '5% initiative and 10 max MP / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 11,
		sc_permed: false,
		hc_permed: false,
		tags: ['mp', 'init', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Ambidextrous Funkslinging',
		notes: 'Two combat items/round',
		source: SkillSource.CLASS,
		class: Classes.DISCO_BANDIT,
		level: 12,
		sc_permed: true,
		hc_permed: true,
		tags: ['marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Icy Glare',
		notes: '10 cold damage, 10 cold spell damage / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 3,
		sc_permed: false,
		hc_permed: false,
		tags: ['marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Dirge of Dreadfulness',
		notes: '12 spooky damage, 12 spooky spell damage / AT turns',
		source: SkillSource.QUEST,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Snarl of the Timberwolf',
		notes: '10 spooky damage / 10 turns',
		source: SkillSource.QUEST,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Testudinal Teachings',
		notes: '1 familiar xp/6 combats',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 9,
		sc_permed: false,
		hc_permed: false,
		tags: ['marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Disco Nap',
		notes: 'Heals 20 HP and removes debuffs. One free campsite rest/day',
		source: SkillSource.CLASS,
		class: Classes.DISCO_BANDIT,
		level: 3,
		sc_permed: false,
		hc_permed: false,
		tags: ['marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Adventurer of Leisure',
		notes: 'Disco Nap heals 40 HP and 3 free rests',
		source: SkillSource.CLASS,
		class: Classes.DISCO_BANDIT,
		level: 11,
		sc_permed: false,
		hc_permed: false,
		tags: ['marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Splattersmash',
		notes: 'Group damage based on muscle',
		source: SkillSource.DREADSYLVANIA,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Pride of the Puffin',
		notes: '10 ML / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 15,
		sc_permed: true,
		hc_permed: true,
		tags: ['xp', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Song of Bravado',
		notes: '15% all attributes',
		source: SkillSource.DREADSYLVANIA,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: "Stevedave's Shanty of Superiority",
		notes: '10% all attributes / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 10,
		sc_permed: false,
		hc_permed: false,
		tags: ['marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Impetuous Sauciness',
		notes: '5 turns to sauceror buffs',
		source: SkillSource.CLASS,
		class: Classes.SAUCEROR,
		level: 12,
		sc_permed: false,
		hc_permed: false,
		tags: ['marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Pulverize',
		notes: 'Pulverize things with a meat-tenderizing hammer',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 15,
		sc_permed: true,
		hc_permed: false,
		tags: ['meat', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: 'Armorcraftiness',
		notes: 'Allows you to craft more stuff',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 5,
		sc_permed: true,
		hc_permed: false,
		tags: ['marginal', 'tierlist', 'evergreen'],
		last_available: null
	},
	{
		name: "Long Winter's Nap",
		notes: '5 free rests/day',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['marginal', 'tierlist'],
		last_available: 2020
	},
	{
		name: 'Chubby and Plump',
		notes: 'Summons one "Chubby & Plump" bar, 50% max HP and MP / 50 turns',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc_permed: false,
		hc_permed: false,
		tags: ['marginal', 'tierlist'],
		last_available: 2020
	},
	{
		name: 'Pizza Lover',
		notes: 'Ode for pizzas',
		source: SkillSource.CLASS,
		class: Classes.TURTLE_TAMER,
		level: 4,
		sc_permed: true,
		hc_permed: true,
		tags: ['turns', 'evergreen'],
		last_available: null
	},
	{
		name: 'Old-School Cocktailcrafting',
		notes: '3 free cocktailcrafts / day',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc_permed: true,
		hc_permed: true,
		tags: ['marginal'],
		last_available: 2023
	},
	{
		name: 'Elf Guard Cooking',
		notes: '3 free cooks / day',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc_permed: true,
		hc_permed: true,
		tags: ['marginal'],
		last_available: 2023
	}
];