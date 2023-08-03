<script setup lang="ts">
	import {
		MenubarRoot,
		MenubarMenu,
		MenubarTrigger,
		MenubarPortal,
		MenubarContent,
		MenubarSeparator,
		MenubarSubTrigger,
		MenubarSub,
		MenubarItem,
	} from 'radix-vue'
	const { signOut, data } = useAuth()
</script>

<template>
	<MenubarRoot>
		<MenubarMenu>
			<MenubarTrigger
				class="gap-1 font-semibold outline-none select-none data-[highlighted]:drop-shadow-md duration-100"
			>
				<UiAvatar
					:src="data?.user?.image ?? ''"
					:alt="'Avatar de ' + data?.user?.name"
				/>
			</MenubarTrigger>
			<MenubarPortal>
				<MenubarContent
					class="min-w-[220px] bg-background z-0 rounded-md font-inter p-[5px] gap-3 animate-in duration-100"
					align="start"
					:side-offset="5"
					:align-offset="-3"
				>
					<MenubarItem
						class="group text-[13px] leading-none font-semibold rounded flex space-x-1 items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-secondary/10 data-[highlighted]:bg-secondary data-[disabled]:pointer-events-none"
					>
						<Icon name="material-symbols:account-circle" class="w-4 h-4" />
						<span> {{ data?.user?.name }}</span>
					</MenubarItem>
					<MenubarSeparator class="h-[1px] bg-gray-100 m-[3px]" />
					<MenubarSub>
						<MenubarSubTrigger
							class="group text-[13px] leading-none rounded flex hover:cursor-pointer items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-secondary data-[disabled]:pointer-events-none"
						>
							<NuxtLink to="/home" class="flex flex-row items-center space-x-1 ">
								<Icon name="material-symbols:arrow-back" class="w-4 h-4" />
								<span>Return to home</span>
							</NuxtLink>
						</MenubarSubTrigger>
						<MenubarSubTrigger
							class="group text-[13px] leading-none rounded flex hover:cursor-pointer items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-secondary data-[disabled]:pointer-events-none"
						>
							<NuxtLink
								to="/home/project/create"
								class="flex flex-row items-center space-x-1"
							>
								<Icon name="material-symbols:assignment-add" class="w-4 h-4" />
								<span>New proyect</span>
							</NuxtLink>
						</MenubarSubTrigger>
						<MenubarSubTrigger
							class="group text-[13px] leading-none rounded flex hover:cursor-pointer items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-secondary data-[disabled]:pointer-events-none"
						>
							<NuxtLink
								to="/home/project/historial"
								class="flex flex-row items-center space-x-1"
							>
								<Icon name="material-symbols:list-alt" class="w-4 h-4" />
								<span>View historial</span>
							</NuxtLink>
						</MenubarSubTrigger>

						<MenubarSubTrigger
							class="group text-[13px] leading-none rounded flex flex-row space-x-1 hover:cursor-pointer items-center h-[25px] px-[10px] relative select-none outline-none data-[highlighted]:bg-secondary data-[disabled]:pointer-events-none"
							@click="signOut({ callbackUrl: '/' })"
						>
							<Icon name="material-symbols:logout" class="w-4 h-4" />
							<span>Sign out</span>
						</MenubarSubTrigger>
					</MenubarSub>
				</MenubarContent>
			</MenubarPortal>
		</MenubarMenu>
	</MenubarRoot>
</template>
