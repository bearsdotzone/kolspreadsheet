import { Classes, type Skill, SkillSource } from '../SkillType';

export const questSkills: Skill[] = [
	{
		name: 'Deep Dark Visions',
		notes: '+50% Spell damage / 10 turns + language learning',
		source: SkillSource.QUEST,
		class: null,
		level: null,
		sc: true,
		hc: true,
		tags: ['evergreen'],
		year: null
	},
	{
		name: "Donho's Bubbly Ballad",
		notes: 'Makes you a better diver',
		source: SkillSource.QUEST,
		class: Classes.ACCORDION_THIEF,
		level: null,
		sc: true,
		hc: true,
		tags: ['evergreen'],
		year: null
	}
];
