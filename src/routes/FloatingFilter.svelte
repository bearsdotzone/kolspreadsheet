<script lang="ts">
	import { Classes, SkillFields, type SkillFilter, SkillSource } from './SkillType';
	import { all_skills } from './SkillsOut';

	const list_of_tags: Set<string> = new Set(all_skills.flatMap((i) => i.tags).toSorted());
	
	export let formData: SkillFilter;

	function checkAll() {
		let elements = document.getElementsByClassName('checkbox-filter-sources');
		for (let i = 0; i < elements.length; i++) {
			formData.source[elements[i].getAttribute('name') ?? ''] = true;
		}

		elements = document.getElementsByClassName('checkbox-filter-tags');
		for (let i = 0; i < elements.length; i++) {
			formData.tags[elements[i].getAttribute('name') ?? ''] = true;
		}
	}

	function uncheckAll() {
		let elements = document.getElementsByClassName('checkbox-filter-sources');
		for (let i = 0; i < elements.length; i++) {
			formData.source[elements[i].getAttribute('name') ?? ''] = false;
		}

		elements = document.getElementsByClassName('checkbox-filter-tags');
		for (let i = 0; i < elements.length; i++) {
			formData.tags[elements[i].getAttribute('name') ?? ''] = false;
		}
	}

	function setAllGroup(group: SkillFields, value: boolean) {
		if (group === SkillFields.TAGS) {
			list_of_tags.forEach(tag => {
				formData.tags[tag] = value;
			});
			return;
		}
		if (group === SkillFields.CLASS) {
			Object.keys(Classes).forEach(key => {
				formData.class[key] = value;
			});
			return;
		}
		if (group === SkillFields.SOURCE) {
			Object.keys(SkillSource).forEach(key => {
				formData.source[key] = value;
			});
		}
		let x = (formData[group] as { [key: string]: boolean });
		Object.entries(x).forEach(([key]) => {
			x[key] = value;
		});
	}
</script>

<div class="floating-filter">
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
									 bind:checked={formData.source[skillSource[0]]}>
						<label for={skillSource[0]}>{skillSource[0]}</label>
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
									 bind:checked={formData.class[classVal[0]]}>
						<label for={classVal[0]}>{classVal[0]}</label>
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
						<input type="checkbox" name={tag} class="checkbox-filter-tags" bind:checked={formData.tags[tag]}>
						<label for={tag}>{tag}</label>
					</div>
				{/each}
			</div>
		</div>
	</form>
</div>

<style>
    .floating-filter {
        background-color: #ff3e00;
        bottom: 0;
        right: 0;
        height: 100vh;
        position: fixed;
        width: 10%;
    }

    .group-heading {

    }

    .group-member {
        margin-left: 10px;
    }
</style>