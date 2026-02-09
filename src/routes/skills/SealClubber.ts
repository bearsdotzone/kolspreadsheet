import { Classes, type Skill, SkillSource } from '../SkillType';

export const sealClubberSkills: Skill[] = [
	{
		name: 'Blubber Up',
		notes: '5 moxie / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 3,
		sc: false,
		hc: false,
		tags: ['combat', 'evergreen'],
		year: null
	},
	{
		name: 'Claws of the Walrus',
		notes: '7 weapon damage',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 8,
		sc: false,
		hc: false,
		tags: ['combat', 'evergreen'],
		year: null
	},
	{
		name: 'Double-Fisted Skull Smashing',
		notes: 'Dual wield weapons',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 12,
		sc: true,
		hc: true,
		tags: ['marginal', 'evergreen'],
		year: null
	},
	{
		name: 'Hide of the Walrus',
		notes: '50 damage absorption',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 7,
		sc: true,
		hc: true,
		tags: ['combat', 'evergreen'],
		year: null
	},
	{
		name: 'Lunging Thrust-Smack',
		notes: 'Triple weapon damage plus bonus damage if a Seal Clubber',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 10,
		sc: true,
		hc: false,
		tags: ['combat', 'evergreen'],
		year: null
	},
	{
		name: 'Musk of the Moose',
		notes: '5% combat',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 14,
		sc: true,
		hc: true,
		tags: ['misc', 'evergreen'],
		year: null
	},
	{
		name: 'Northern Explosion',
		notes: 'A smack that is all cold damage',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 13,
		sc: true,
		hc: true,
		tags: ['marginal', 'evergreen'],
		year: null
	},
	{
		name: 'Northern Exposure',
		notes: '2 cold res',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 13,
		sc: true,
		hc: true,
		tags: ['combat', 'misc', 'marginal', 'evergreen'],
		year: null
	},
	{
		name: 'Pride of the Puffin',
		notes: '10 ML / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 15,
		sc: true,
		hc: true,
		tags: ['xp', 'evergreen'],
		year: null
	},
	{
		name: 'Pulverize',
		notes: 'Pulverize things with a meat-tenderizing hammer',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 15,
		sc: true,
		hc: false,
		tags: ['meat', 'evergreen'],
		year: null
	},
	{
		name: 'Rage of the Raindeer',
		notes: '10% muscle and 10 weapon damage / 10 turns',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 11,
		sc: false,
		hc: false,
		tags: ['combat', 'marginal', 'evergreen'],
		year: null
	},
	{
		name: 'Super-Advanced Meatsmithing',
		notes: 'Allows you to smith more stuff',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 5,
		sc: false,
		hc: false,
		tags: ['turns', 'evergreen'],
		year: null
	},
	{
		name: 'Tongue of the Walrus',
		notes: 'Removes beaten up and heals 30-40',
		source: SkillSource.CLASS,
		class: Classes.SEAL_CLUBBER,
		level: 9,
		sc: true,
		hc: true,
		tags: ['combat', 'evergreen'],
		year: null
	}
];
