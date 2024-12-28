<script lang="ts">
	import { Classes, classFilterMap, type Skill, SkillFields, type SkillFilter, SkillSource } from './SkillType';
	import { all_skills } from './SkillsOut';
	import FloatingFilter from './FloatingFilter.svelte';

	let skillFilter: SkillFilter = $state({
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
		hc: true,
		sc: true,
		year: [],
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
	});

	let working_skills: Skill[] = $derived(all_skills.filter((skill) => {
		if (!skill.tags.some((tag) => {
			return skillFilter.tags[tag];
		}))
			return false;
		if (!skillFilter.source[skill.source.toUpperCase().replaceAll(' ', '_')])
			return false;
		if (skill.class != null && !skillFilter.class[skill.class.toUpperCase().replaceAll(' ', '_')])
			return false;
		return true;
	}).sort((a, b) => {
		if (a[skillFilter.sort_field] == null && b[skillFilter.sort_field] == null) {
			return 0;
		} else if (b[skillFilter.sort_field] == null) {
			return skillFilter.sort_descending ? 1 : -1;
		} else if (a[skillFilter.sort_field] == null) {
			return skillFilter.sort_descending ? -1 : 1;
		} else {
			return a[skillFilter.sort_field] < b[skillFilter.sort_field] ? (skillFilter.sort_descending ? 1 : -1) : (skillFilter.sort_descending ? -1 : 1);
		}
	}));

	function setFilterToSource(source: string) {
		for (let i in skillFilter.tags) {
			skillFilter.tags[i] = true;
		}

		Object.keys(Classes).forEach(key => {
			skillFilter.class[key] = true;
		});

		for (let i in skillFilter.source) {
			skillFilter.source[i] = false;
		}

		skillFilter.source[source] = true;
	}

</script>

<svelte:head>
	<title>Bears' KoL Perms Tracker</title>
	<meta content="Bears' KoL Perms Tracker" name="description" />
	<meta content="https://bearsdotzone.github.io/kolspreadsheet/favicon.png" property="og:image" />
	<meta content="Bears' KoL Perms Tracker" property="og:title" />
	<meta content="website" property="og:type" />
	<meta content="A glorified spreadsheet tracking permanent skills for a Kingdom of Loathing account."
				property="og:description" />
</svelte:head>

<section>
	<div class="content">
		<table>
			<thead>
			<tr>
				<th colspan={Object.entries(SkillFields).length+1}>
					{#each Object.entries(Classes) as classEntry}
						<button onclick={() => skillFilter = classFilterMap[classEntry[0]]}>{classEntry[1]}</button>
					{/each}
					{#each Object.entries(SkillSource) as source}
						<button onclick={() => setFilterToSource(source[0])}>{source[1]}</button>
					{/each}
				</th>
			</tr>
			<tr>
				<th>{working_skills.length}</th>
				{#each Object.entries(SkillFields) as field}
					<th onclick={() => {
					if(skillFilter.sort_field === field[1])
						skillFilter.sort_descending = !skillFilter.sort_descending;
					else
						{
							skillFilter.sort_field = field[1];
							skillFilter.sort_descending = false;
						}
				}
				}>{field[1]}</th>
				{/each}
			</tr>
			</thead>
			<tbody>
			{#each working_skills as skill, index}
				<tr>
					<td>{index + 1}</td>
					{#each Object.entries(SkillFields) as field}
						{#if field[1] === SkillFields.SC || field[1] === SkillFields.HC}
							<td>
								{#if skill[field[1]]}
									<div class="checked-box">&#x2611;</div>
								{:else}
									<div class="unchecked-box">&#x2610;</div>
								{/if}
							</td>
						{:else if field[1] === SkillFields.TAGS}
							<td title={skill[field[1]].toString()} style="overflow: hidden; max-width: 10em">{skill[field[1]]}</td>
						{:else}
							<td>{skill[field[1]]}</td>
						{/if}
					{/each}
				</tr>
			{/each}
			</tbody>
		</table>
	</div>
	<FloatingFilter bind:skillFilter={skillFilter} />
</section>

<style>
    .content {
        display: flex;
        flex-grow: 1;
        min-height: 100%;
        overflow: scroll;
        padding: var(--spacing);
    }

    table {
        border-spacing: 0;
        height: fit-content;
        width: calc(100% + var(--spacing) * 2);
    }

    td, th, tr {
        border-bottom: 1px solid var(--color-overlay0);
        border-right: 1px solid var(--color-overlay0);
        padding: calc(var(--spacing) / 2);
    }

    tr:first-child th {
        border-top: 1px solid var(--color-overlay0);
    }

    tbody tr td:first-child {
        text-align: center;
        width: 2em;
    }

    tbody tr:nth-child(even) {
        background-color: var(--color-mantle);
    }

    table th:first-child,
    table td:first-child {
        /* Apply a left border on the first <td> or <th> in a row */
        border-left: 1px solid var(--color-overlay0);
    }

    section {
        display: flex;
        min-height: 100%;
        width: 100%;
    }

    thead {
        background-color: var(--color-crust);
        position: sticky;
        top: 0;
    }

    .checked-box {
        color: var(--color-green);
    }

    .unchecked-box {
        color: var(--color-red);
    }
</style>
