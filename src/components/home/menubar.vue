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
	<MenubarRoot class="font-inter">
		<MenubarMenu value="avatar">
			<MenubarTrigger
				class="gap-1 font-semibold outline-none select-none data-[highlighted]:drop-shadow-md duration-100 data-[state=open]:bg-green4"
			>
				<UiAvatar :src="data?.user?.image ?? ''" :alt="'Imagen de noxy'" />
			</MenubarTrigger>
			<MenubarPortal>
				<MenubarContent
					class="min-w-[220px] bg-background rounded-md p-[5px] gap-3 animate-in duration-100 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
					align="start"
					:side-offset="5"
					:align-offset="-3"
				>
					<MenubarItem
						class="group text-[13px] leading-none font-semibold rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-sky-100 data-[highlighted]:to-sky-300 duration-200 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
					>
						{{ data?.user?.name }}
					</MenubarItem>
					<MenubarSeparator class="h-[1px] bg-gray-100 m-[3px]" />
					<MenubarSub>
						<MenubarSubTrigger
							class="group text-[13px] leading-none text-grass11 rounded flex items-center h-[25px] px-[10px] relative select-none outline-none data-[state=open]:bg-green4 data-[state=open]:text-grass11 data-[highlighted]:bg-gradient-to-br data-[highlighted]:from-green9 data-[highlighted]:to-green10 data-[highlighted]:text-green1 data-[highlighted]:data-[state=open]:text-green1 data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none"
						>
							<button @click="signOut({ callbackUrl: '/' })">Cerrar sesión</button>
						</MenubarSubTrigger>
					</MenubarSub>
				</MenubarContent>
			</MenubarPortal>
		</MenubarMenu>
	</MenubarRoot>
</template>
