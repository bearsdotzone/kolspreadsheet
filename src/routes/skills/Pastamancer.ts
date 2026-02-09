import { Classes, type Skill, SkillSource } from '../SkillType';

export const pastamancerSkills: Skill[] = [
	{
		name: 'Bind Angel Hair Wisp',
		notes: '10% initiative / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 7,
		sc: false,
		hc: false,
		tags: ['init', 'evergreen'],
		year: null
	},
	{
		name: 'Bind Lasagmbie',
		notes: '10% meat / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 13,
		sc: false,
		hc: false,
		tags: ['meat', 'evergreen'],
		year: null
	},
	{
		name: 'Bind Spice Ghost',
		notes: '5% item / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 15,
		sc: false,
		hc: false,
		tags: ['item', 'evergreen'],
		year: null
	},
	{
		name: 'Cannelloni Cocoon',
		notes: 'Heal 1,000 HP',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 12,
		sc: true,
		hc: true,
		tags: ['combat', 'evergreen'],
		year: null
	},
	{
		name: 'Entangling Noodles',
		notes: 'Staggers and delevels',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 2,
		sc: false,
		hc: false,
		tags: ['combat', 'evergreen'],
		year: null
	},
	{
		name: 'Flavour of Magic',
		notes: 'Tune pastamancer skills, 10 spell damage',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 14,
		sc: false,
		hc: false,
		tags: ['misc', 'evergreen'],
		year: null
	},
	{
		name: 'Leash of Linguini',
		notes: '5 familiar weight / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 11,
		sc: true,
		hc: true,
		tags: ['xp', 'item', 'meat', 'evergreen'],
		year: null
	},
	{
		name: 'Pastamastery',
		notes: 'Summons 3 dry noodles',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 5,
		sc: true,
		hc: true,
		tags: ['turns', 'evergreen'],
		year: null
	},
	{
		name: 'Shield of the Pastalord',
		notes: 'Reduce physical damage by 10% or 30% if a pastamancer / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 8,
		sc: false,
		hc: false,
		tags: ['combat', 'evergreen'],
		year: null
	},
	{
		name: 'Spirit of Ravioli',
		notes: '25% max HP',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 9,
		sc: true,
		hc: false,
		tags: ['combat', 'evergreen'],
		year: null
	},
	{
		name: 'Springy Fusili',
		notes: '40% initiative / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 6,
		sc: false,
		hc: false,
		tags: ['init', 'evergreen'],
		year: null
	},
	{
		name: 'Stuffed Mortar Shell',
		notes: 'Random damage spell',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 8,
		sc: false,
		hc: false,
		tags: ['combat', 'evergreen'],
		year: null
	},
	{
		name: 'Subtle and Quick to Anger',
		notes: '10% spell damage',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 12,
		sc: false,
		hc: false,
		tags: ['combat', 'evergreen'],
		year: null
	},
	{
		name: 'Tolerance of the Kitchen',
		notes: '2 hot res',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 13,
		sc: false,
		hc: false,
		tags: ['combat', 'misc', 'marginal', 'evergreen'],
		year: null
	},
	{
		name: 'Transcendental Noodlecraft',
		notes: 'Summons 2 dry noodles, unlocks recipes',
		source: SkillSource.CLASS,
		class: Classes.PASTAMANCER,
		level: 15,
		sc: true,
		hc: true,
		tags: ['turns', 'evergreen'],
		year: null
	}
];
