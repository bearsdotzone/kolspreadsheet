import { Classes, type Skill, SkillSource } from '../SkillType';

export const questSkills: Skill[] = [
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
