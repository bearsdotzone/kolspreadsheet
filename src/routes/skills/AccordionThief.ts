import { Classes, type Skill, SkillSource } from '../SkillType';

export const accordionThiefSkills: Skill[] = [
	{
		name: 'Advanced Cocktailcrafting',
		notes: 'Summons 3 AC ingredients',
		source: SkillSource.CLASS,
		class: Classes.DISCO_BANDIT,
		level: 5,
		sc: true,
		hc: true,
		tags: ['turns', 'evergreen'],
		year: null
	},
	{
		name: "Aloysius' Antiphon of Aptitude",
		notes: '1 all substat/combat / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 11,
		sc: true,
		hc: true,
		tags: ['xp', 'evergreen'],
		year: null
	},
	{
		name: "Brawnee's Anthem of Absorption",
		notes: 'level^1.2 damage reduction / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 8,
		sc: false,
		hc: false,
		tags: ['combat', 'evergreen'],
		year: null
	},
	{
		name: "Carlweather's Cantata of Confrontation",
		notes: '5% combat',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 14,
		sc: true,
		hc: true,
		tags: ['misc', 'evergreen'],
		year: null
	},
	{
		name: "Cletus's Canticle of Celerity",
		notes: '20% initiative / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 3,
		sc: false,
		hc: false,
		tags: ['init', 'evergreen'],
		year: null
	},
	{
		name: "Fat Leon's Phat Loot Lyric",
		notes: '20% item',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 7,
		sc: true,
		hc: true,
		tags: ['item', 'evergreen'],
		year: null
	},
	{
		name: 'Five Finger Discount',
		notes: '5% discount at stores',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 7,
		sc: false,
		hc: false,
		tags: ['meat', 'evergreen'],
		year: null
	},
	{
		name: 'Knowing Smile',
		notes: '1 mox substat/combat',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 14,
		sc: false,
		hc: false,
		tags: ['xp', 'evergreen'],
		year: null
	},
	{
		name: 'Mariachi Memory',
		notes: '1 additional AT song',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 15,
		sc: true,
		hc: true,
		tags: ['misc', 'evergreen'],
		year: null
	},
	{
		name: 'Master Accordion Master Thief',
		notes: '10% pickpocket',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 13,
		sc: false,
		hc: false,
		tags: ['item', 'evergreen'],
		year: null
	},
	{
		name: 'Power Ballad of the Arrowsmith',
		notes: '10 muscle and 20 HP / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 4,
		sc: false,
		hc: false,
		tags: ['combat', 'evergreen'],
		year: null
	},
	{
		name: "Stevedave's Shanty of Superiority",
		notes: '10% all attributes / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 10,
		sc: false,
		hc: false,
		tags: ['marginal', 'evergreen'],
		year: null
	},
	{
		name: 'Suspicious Gaze',
		notes: '20% initiative / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 8,
		sc: false,
		hc: false,
		tags: ['init', 'evergreen'],
		year: null
	},
	{
		name: 'The Magical Mojomuscular Melody',
		notes: '10 mysticality, 20 max HP / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 2,
		sc: false,
		hc: false,
		tags: ['mp', 'evergreen'],
		year: null
	},
	{
		name: 'The Moxious Madrigal',
		notes: '10 moxie / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 1,
		sc: false,
		hc: false,
		tags: ['combat', 'evergreen'],
		year: null
	},
	{
		name: 'The Ode to Booze',
		notes: '1 adv/full from booze',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 12,
		sc: true,
		hc: true,
		tags: ['turns', 'evergreen'],
		year: null
	},
	{
		name: 'The Polka of Plenty',
		notes: '50% meat / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 5,
		sc: true,
		hc: true,
		tags: ['meat', 'evergreen'],
		year: null
	},
	{
		name: 'The Psalm of Pointiness',
		notes: '6 damage and delevels attackers / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 10,
		sc: false,
		hc: false,
		tags: ['combat', 'marginal', 'evergreen'],
		year: null
	},
	{
		name: 'The Sonata of Sneakiness',
		notes: '-5% combat',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 13,
		sc: true,
		hc: true,
		tags: ['misc', 'evergreen'],
		year: null
	},
	{
		name: 'Thief Among the Honorable',
		notes: '5% item and 10% meat',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 10,
		sc: false,
		hc: false,
		tags: ['item', 'meat', 'evergreen'],
		year: null
	},
	{
		name: "Ur-Kel's Aria of Annoyance",
		notes: 'level*2 ML / AT turns',
		source: SkillSource.CLASS,
		class: Classes.ACCORDION_THIEF,
		level: 15,
		sc: true,
		hc: true,
		tags: ['xp', 'evergreen'],
		year: null
	}
];
