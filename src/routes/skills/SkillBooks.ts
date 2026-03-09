import { type Skill, SkillSource } from '../SkillType';

export const skillBookSkills: Skill[] = [
	{
		name: 'Communism!',
		notes: 'Collect 1,000 Meat',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc: true,
		hc: false,
		tags: ['misc'],
		year: 2015
	},
	{
		name: 'Holiday Burial Knowledge',
		notes: '+25% Stat Gains from Undead Monsters',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc: true,
		hc: false,
		tags: ['xp'],
		year: 2025
	},
	{
		name: `Let's Beat Up This Drunken Sailor`,
		notes: '+2 Muscle Stats Per Fight / 10 turns / 11 mp',
		source: SkillSource.SKILLBOOK,
		class: null,
		level: null,
		sc: true,
		hc: false,
		tags: ['xp'],
		year: 2025
	}
];
