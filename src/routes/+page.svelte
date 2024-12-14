<script lang="ts">
	import { Classes, classFilterMap, type Skill, SkillFields, type SkillFilter, SkillSource } from './SkillType';
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
			return formData.tags[tag];
		}))
			return false;
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
	<title>Bears' KoL Perms Tracker</title>
	<meta content="Bears' KoL Perms Tracker" name="description" />
	<meta content="favicon.png" name="og:image" />
</svelte:head>

<section>
	<div class="content">
		<table>
			<thead>
			<tr>
				<th colspan={Object.entries(SkillFields).length+1}>
					{#each Object.entries(Classes) as classEntry}
						<button onclick={() => formData = classFilterMap[classEntry[0]]}>{classEntry[1]}</button>
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
					<td>{index + 1}</td>
					{#each Object.entries(SkillFields) as field}
						{#if field[1] === SkillFields.SC || field[1] === SkillFields.HC}
							<td>
								{#if a[field[1]]}
									<div class="checked-box">&#x2611;</div>
								{:else}
									<div class="unchecked-box">&#x2610;</div>
								{/if}
							</td>
						{:else if field[1] === SkillFields.TAGS}
							<td title={a[field[1]].toString()} style="overflow: hidden; max-width: 10em">{a[field[1]]}</td>
						{:else}
							<td>{a[field[1]]}</td>
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
