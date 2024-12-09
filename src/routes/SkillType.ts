export enum Classes {
	SEAL_CLUBBER = 'Seal Clubber',
	TURTLE_TAMER = 'Turtle Tamer',
	PASTAMANCER = 'Pastamancer',
	SAUCEROR = 'Sauceror',
	DISCO_BANDIT = 'Disco Bandit',
	ACCORDION_THIEF = 'Accordion Thief'
}

export enum SkillSource {
	CLASS = 'Class',
	QUEST = 'Quest',
	SKILLBOOK = 'Skillbook',
	DREADSYLVANIA = 'Dreadsylvania',
	HOBOPOLIS = 'Hobopolis',
	THE_SLIME_TUBE = 'The Slime Tube',
	IOTM = 'IotM'
}

export enum SkillFields {
	NAME = 'name',
	NOTES = 'notes',
	SOURCE = 'source',
	CLASS = 'class',
	LEVEL = 'level',
	SC_PERMED = 'sc_permed',
	HC_PERMED = 'hc_permed',
	TAGS = 'tags',
	LAST_AVAILABLE = 'last_available'
}

export type Skill = {
	name: string;
	notes: string;
	source: SkillSource;
	class: Classes | null;
	level: number | null;
	sc_permed: boolean;
	hc_permed: boolean;
	tags: string[];
	last_available: number | null;
};

export type SkillFilter = {
	// [key: string]: string | boolean | Array<Classes | number> | { [key: string]: boolean };
	// source: SkillSource[];
	name: string;
	notes: string;
	source: { [key: string]: boolean };
	class: { [key: string]: boolean };
	level: number[];
	sc_permed: boolean;
	hc_permed: boolean;
	tags: { [key: string]: boolean };
	last_available: number[];
	sort_field: SkillFields;
	sort_descending: boolean;
};

export function sortSkillsByField(
	skills: Skill[],
	field: SkillFields,
	descending = false
): Skill[] {
	return skills.sort((a: Skill, b: Skill) => {
		if (descending) {
			if (a[field] == null || b[field] == null) {
				if (a[field] == null && b[field] == null) {
					return 0;
				} else if (a[field] == null) {
					return 1;
				} else {
					return -1;
				}
			} else {
				return a[field] < b[field] ? 1 : -1;
			}
		} else {
			if (a[field] == null || b[field] == null) {
				if (a[field] == null && b[field] == null) {
					return 0;
				} else if (a[field] == null) {
					return -1;
				} else {
					return 1;
				}
			} else {
				return a[field] < b[field] ? -1 : 1;
			}
		}
	});
}

export const filterClassNone: SkillFilter = {
	name: '',
	notes: '',
	source: {
		CLASS: true
	},
	class: {
		SEAL_CLUBBER: true,
		TURTLE_TAMER: false,
		PASTAMANCER: false,
		SAUCEROR: false,
		DISCO_BANDIT: false,
		ACCORDION_THIEF: false
	},
	level: [],
	hc_permed: true,
	sc_permed: true,
	last_available: [],
	tags: {
		combat: true,
		evergreen: true,
		init: true,
		item: true,
		marginal: true,
		meat: true,
		misc: true,
		mp: true,
		tierlist: true,
		turns: true,
		xp: true
	},
	sort_field: SkillFields.NAME,
	sort_descending: false
};

export const filterClassSealClubber: SkillFilter = {
	...filterClassNone,
	class: {
		SEAL_CLUBBER: true
	}
};

export const filterClassTurtleTamer: SkillFilter = {
	...filterClassNone,
	class: {
		TURTLE_TAMER: true
	}
};

export const filterClassPastamancer: SkillFilter = {
	...filterClassNone,
	class: {
		PASTAMANCER: true
	}
};

export const filterClassSauceror: SkillFilter = {
	...filterClassNone,
	class: {
		SAUCEROR: true
	}
};

export const filterClassDiscoBandit: SkillFilter = {
	...filterClassNone,
	class: {
		DISCO_BANDIT: true
	}
};

export const filterClassAccordionThief: SkillFilter = {
	...filterClassNone,
	class: {
		ACCORDION_THIEF: true
	}
};

export const classFilterMap = {
	SEAL_CLUBBER: filterClassSealClubber,
	TURTLE_TAMER: filterClassTurtleTamer,
	PASTAMANCER: filterClassPastamancer,
	SAUCEROR: filterClassSauceror,
	DISCO_BANDIT: filterClassDiscoBandit,
	ACCORDION_THIEF: filterClassAccordionThief
};
