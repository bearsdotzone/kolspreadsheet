<script lang="ts">
	import { Classes, SkillFields, type SkillFilter, SkillSource } from './SkillType';
	import { all_skills } from './SkillsOut';

	const list_of_tags: Set<string> = new Set(all_skills.flatMap((i) => i.tags).toSorted());

	export let skillFilter: SkillFilter;

	let hideContent = false;

	function checkAll() {
		let elements = document.getElementsByClassName('checkbox-filter-sources');
		for (let i = 0; i < elements.length; i++) {
			skillFilter.source[elements[i].getAttribute('name') ?? ''] = true;
		}

		elements = document.getElementsByClassName('checkbox-filter-tags');
		for (let i = 0; i < elements.length; i++) {
			skillFilter.tags[elements[i].getAttribute('name') ?? ''] = true;
		}

		elements = document.getElementsByClassName('checkbox-filter-classes');
		for (let i = 0; i < elements.length; i++) {
			skillFilter.class[elements[i].getAttribute('name') ?? ''] = true;
		}
	}

	function uncheckAll() {
		let elements = document.getElementsByClassName('checkbox-filter-sources');
		for (let i = 0; i < elements.length; i++) {
			skillFilter.source[elements[i].getAttribute('name') ?? ''] = false;
		}

		elements = document.getElementsByClassName('checkbox-filter-tags');
		for (let i = 0; i < elements.length; i++) {
			skillFilter.tags[elements[i].getAttribute('name') ?? ''] = false;
		}

		elements = document.getElementsByClassName('checkbox-filter-classes');
		for (let i = 0; i < elements.length; i++) {
			skillFilter.class[elements[i].getAttribute('name') ?? ''] = false;
		}
	}

	function setAllGroup(group: SkillFields, value: boolean) {
		if (group === SkillFields.TAGS) {
			list_of_tags.forEach(tag => {
				skillFilter.tags[tag] = value;
			});
			return;
		}
		if (group === SkillFields.CLASS) {
			Object.keys(Classes).forEach(key => {
				skillFilter.class[key] = value;
			});
			return;
		}
		if (group === SkillFields.SOURCE) {
			Object.keys(SkillSource).forEach(key => {
				skillFilter.source[key] = value;
			});
		}
		let x = (skillFilter[group] as { [key: string]: boolean });
		Object.entries(x).forEach(([key]) => {
			x[key] = value;
		});
	}
</script>

<div class="floating-filter">
	<div class="expand">
		<button on:click={() => {hideContent = !hideContent}}>
			{#if hideContent}⫷{:else }⫸{/if}
		</button>
	</div>
	{#if !hideContent}
		<div class="content">
			<div>
				<button on:click={() => {
			checkAll()
		}}>
					All
				</button>
				<button on:click={() => {
			uncheckAll()
		}}>
					None
				</button>
			</div>
			<form>
				<div>
					<div class="group-heading">
						<input type="checkbox" name="group-sources" class="checkbox-filter-sources"
									 on:change={(x) => {
								 setAllGroup(SkillFields.SOURCE, x.currentTarget.checked);
							 }}>
						<label for="group-sources">Sources</label>
					</div>
					<div class="group-member">
						{#each Object.entries(SkillSource) as skillSource}
							<div>
								<input type="checkbox" name={skillSource[0]} class="checkbox-filter-sources"
											 bind:checked={skillFilter.source[skillSource[0]]}>
								<label for={skillSource[0]}>{skillSource[1]}</label>
							</div>
						{/each}
					</div>
				</div>
				<div>
					<div class="group-heading">
						<input type="checkbox" name="group-classes" class="checkbox-filter-classes"
									 on:change={(x) => {
								 setAllGroup(SkillFields.CLASS, x.currentTarget.checked);
							 }}>
						<label for="group-sources">Classes</label>
					</div>
					<div class="group-member">
						{#each Object.entries(Classes) as classVal}
							<div>
								<input type="checkbox" name={classVal[0]} class="checkbox-filter-classes"
											 bind:checked={skillFilter.class[classVal[0]]}>
								<label for={classVal[0]}>{classVal[1]}</label>
							</div>
						{/each}
					</div>
				</div>
				<div>
					<div class="group-heading">
						<input type="checkbox" name="group-tags" class="checkbox-filter-tags"
									 on:change={(x) => {
								 setAllGroup(SkillFields.TAGS, x.currentTarget.checked);
							 }}>
						<label for="group-sources">Tags</label>
					</div>
					<div class="group-member">
						{#each list_of_tags as tag}
							<div>
								<input type="checkbox" name={tag} class="checkbox-filter-tags" bind:checked={skillFilter.tags[tag]}>
								<label for={tag}>{tag}</label>
								<button on:click={() => {
							setAllGroup(SkillFields.TAGS, false);
						skillFilter.tags[tag] = true;
						}}>[only]
								</button>
							</div>
						{/each}
					</div>
				</div>
			</form>
		</div>
	{/if}
</div>

<style>
    .floating-filter {
        background-color: var(--color-overlay0);
        display: flex;
        height: calc(100vh - var(--spacing) * 2);
        padding: calc(var(--spacing));
        position: sticky;
        top: 0;
    }

    .content {
        display: flex;
        flex-direction: column;
        overflow: scroll;
    }

    .group-member {
        margin-left: 10px;
    }

    .group-member button {
        background-color: transparent;
        border: none;
        font-style: italic;
        font-weight: normal;
        text-decoration-line: underline;
    }

    button {
        margin: 0;
    }

    .expand {
        display: flex;
        flex-direction: column;
        height: calc(100vh - var(--spacing) * 2);
        justify-content: center;
    }
</style>
