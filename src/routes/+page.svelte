<script lang="ts">
	import {
		Classes,
		classFilterMap, type Skill,
		SkillFields,
		type SkillFilter,
		SkillSource
	} from './SkillType';
	import { all_skills } from './SkillsOut';
	import FloatingFilter from './FloatingFilter.svelte';

	let formData: SkillFilter = $state({
		name: '',
		notes: '',
		source: {
			CLASS: true
		},
		class: {
			SEAL_CLUBBER: true,
			TURTLE_TAMER: true,
			PASTAMANCER: true,
			SAUCEROR: true,
			DISCO_BANDIT: true,
			ACCORDION_THIEF: true
		},
		level: [],
		hc_permed: true,
		sc_permed: true,
		last_available: [],
		tags: {
			combat: true,
			evergreen: true,
			tierlist: true,
			turns: true
		},
		sort_field: SkillFields.NAME,
		sort_descending: false
	});

	let working_skills: Skill[] = $derived(all_skills.filter((skill) => {
		if (!skill.tags.some((tag) => {
			return formData.tags[tag];
		}))
			return false;
		// if (skill.tags.every(tag => tag in formData.tags && !formData.tags[tag]))
		// 	return false;
		if (!formData.source[skill.source.toUpperCase().replaceAll(' ', '_')])
			return false;
		if (skill.class != null && !formData.class[skill.class.toUpperCase().replaceAll(' ', '_')])
			return false;
		return true;
	}).sort((a, b) => {
		if (a[formData.sort_field] == null && b[formData.sort_field] == null) {
			return 0;
		} else if (b[formData.sort_field] == null) {
			return formData.sort_descending ? 1 : -1;
		} else if (a[formData.sort_field] == null) {
			return formData.sort_descending ? -1 : 1;
		} else {
			return a[formData.sort_field] < b[formData.sort_field] ? (formData.sort_descending ? 1 : -1) : (formData.sort_descending ? -1 : 1);
		}
	}));

	function setFilterToClass(setClass: string) {
		for (let i in formData.tags) {
			formData.tags[i] = true;
		}

		for (let i in formData.class) {
			formData.class[i] = false;
		}

		for (let i in formData.source) {
			formData.source[i] = false;
		}

		formData.class[setClass] = true;
		formData.source['CLASS'] = true;
	}

	function setFilterToSource(source: string) {
		for (let i in formData.tags) {
			formData.tags[i] = true;
		}

		Object.keys(Classes).forEach(key => {
			formData.class[key] = true;
		});

		for (let i in formData.source) {
			formData.source[i] = false;
		}

		formData.source[source] = true;
	}

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div>
		{#each Object.entries(Classes) as classEntry}
			<!--			<button onclick={() => setFilterToClass(classEntry[0])}>{classEntry[0]}</button>-->
			<button onclick={() => formData = classFilterMap[classEntry[0]]}>{classEntry[0]}</button>
		{/each}
		{#each Object.entries(SkillSource) as source}
			<button onclick={() => setFilterToSource(source[0])}>{source[0]}</button>
		{/each}
	</div>
	<div class="skill-table">
		<table>
			<thead>
			<tr>
				<th>{working_skills.length}</th>
				{#each Object.entries(SkillFields) as field}
					<th onclick={() => {
					if(formData.sort_field === field[1])
						formData.sort_descending = !formData.sort_descending;
					else
						{
							formData.sort_field = field[1];
							formData.sort_descending = false;
						}
				}
				}>{field[1]}</th>
				{/each}
			</tr>
			</thead>
			<tbody>
			{#each working_skills as a, index}
				<tr>
					<th>{index + 1}</th>
					{#each Object.entries(SkillFields) as field}
						{#if field[1] === SkillFields.SC_PERMED || field[1] === SkillFields.HC_PERMED}
							<th><input type="checkbox" disabled checked={a[field[1]]}></th>
						{:else}
							<th>{a[field[1]]}</th>
						{/if}
					{/each}
				</tr>
			{/each}
			</tbody>
		</table>
	</div>
	<FloatingFilter bind:formData={formData} />
</section>

<style>
    table, tr, th {
        border: 1px solid #ddd;
    }

    table {
        width: 100%;
    }

    .skill-table {
        width: 90%;
        left: 0;
    }

    thead {
        background: #4075a6;
        position: sticky;
        top: 0;
    }

    section {
        /*display: flex;*/
        /*flex-direction: column;*/
        /*justify-content: space-between;*/
        /*align-items: center;*/
        /*flex: 0.6;*/
        min-width: 100vw;
        min-height: 100vh;
    }
</style>
