<script lang="ts">
export let href = ''
export let title = ''
export let body = ''

</script>

<ul>
	<li class="link-card">
		<a href={href}>
			<h2>
				{title}
				<span>&rarr;</span>
			</h2>
			<p>
				{body}
			</p>
		</a>
	</li>
</ul>

<style>
</style>
