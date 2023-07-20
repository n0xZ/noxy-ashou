<script setup lang="ts">
	import {
		Menu,
		MenuItem,
		MenuPositioner,
		MenuTrigger,
		MenuContent,
	} from '@ark-ui/vue'
	const { signOut } = useAuth()
	const { data } = useAuth()
</script>

<template>
	<header class="p-5">
		<nav
			class="flex flex-row items-center justify-between container mx-auto max-w-2xl"
		>
			<NuxtLink to="/">Ashou</NuxtLink>
			<ul class="flex flex-row items-center space-x-2">
				<Menu>
					<MenuTrigger class="hover:cursor-pointer">
						<UiAvatar :src="data?.user?.email" :alt="'Imagen de Noxy'" />
					</MenuTrigger>
					<Teleport to="body">
						<MenuPositioner>
							<MenuContent
								class="w-48 h-64 rounded-md shadow-lg overflow-hidden outline-none animate-in fade-in p-3 duration-300 font-inter"
								><MenuItem id="signOut" class="w-full h-8"
									><button
										class="font-medium w-full h-full hover:opacity-70 rounded-md"
										@click="signOut({ callbackUrl: '/' })"
									>
										Cerrar sesión
									</button></MenuItem
								></MenuContent
							>
						</MenuPositioner>
					</Teleport>
				</Menu>
			</ul>
		</nav>
	</header>
	<NuxtPage />
</template>
