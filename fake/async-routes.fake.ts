import { defineFakeRoute } from "vite-plugin-fake-server/client";
import { about, home, outside, personalCenter, system } from "#/src/router/extra-info";
import { resultSuccess } from "./utils";

const systemManagementRouter = {
	path: "/system",
	handle: {
		icon: "SettingOutlined",
		title: "common.menu.system",
		order: system,
		roles: ["admin"],
	},
	children: [
		{
			path: "/system/user",
			component: "/system/user/index.tsx",
			handle: {
				icon: "UserOutlined",
				title: "common.menu.user",
				roles: ["admin"],
				permissions: [
					"permission:button:add",
					"permission:button:update",
					"permission:button:delete",
				],
			},
		},
		{
			path: "/system/role",
			component: "/system/role/index.tsx",
			handle: {
				icon: "TeamOutlined",
				title: "common.menu.role",
				roles: ["admin"],
				permissions: [
					"permission:button:add",
					"permission:button:update",
					"permission:button:delete",
				],
			},
		},
		{
			path: "/system/menu",
			component: "/system/menu/index.tsx",
			handle: {
				icon: "MenuOutlined",
				title: "common.menu.menu",
				roles: ["admin"],
				permissions: [
					"permission:button:add",
					"permission:button:update",
					"permission:button:delete",
				],
			},
		},
		{
			path: "/system/dept",
			component: "/system/dept/index.tsx",
			handle: {
				keepAlive: false,
				icon: "ApartmentOutlined",
				title: "common.menu.dept",
				roles: ["admin"],
				permissions: [
					"permission:button:add",
					"permission:button:update",
					"permission:button:delete",
				],
			},
		},
	],
};

const homeRouter = {
	path: "/home",
	component: "/home/index.tsx",
	handle: {
		icon: "HomeOutlined",
		title: "common.menu.home",
		order: home,
	},
};

const aboutRouter = {
	path: "/about",
	component: "/about/index.tsx",
	handle: {
		icon: "CopyrightOutlined",
		title: "common.menu.about",
		order: about,
	},
};

const outsideRouter = {
	path: "/outside",
	handle: {
		icon: "OutsidePageIcon",
		title: "common.menu.outside",
		order: outside,
	},
	children: [
		{
			path: "/outside/embedded",
			handle: {
				icon: "EmbeddedIcon",
				title: "common.menu.embedded",
			},
			children: [
				{
					path: "/outside/embedded/ant-design",
					handle: {
						icon: "AntDesignOutlined",
						title: "common.menu.antd",
						iframeLink: "https://ant.design/",
					},
				},
			],
		},
		{
			path: "/outside/external-link",
			handle: {
				icon: "ExternalIcon",
				title: "common.menu.externalLink",
			},
			children: [
				{
					path: "/outside/external-link/react-docs",
					handle: {
						icon: "RiReactjsLine",
						title: "common.menu.reactDocs",
						externalLink: "https://react.dev/",
					},
				},
			],
		},
	],
};

const personalCenterRouter = {
	path: "/personal-center",
	handle: {
		order: personalCenter,
		title: "common.menu.personalCenter",
		icon: "RiAccountCircleLine",
	},
	children: [
		{
			path: "/personal-center/my-profile",
			handle: {
				title: "common.menu.profile",
				icon: "ProfileCardIcon",
			},
		},
		{
			path: "/personal-center/settings",
			handle: {
				title: "common.menu.settings",
				icon: "RiUserSettingsLine",
			},
		},
	],
};

export default defineFakeRoute([
	{
		url: "/get-async-routes",
		timeout: 1000,
		method: "get",
		response: () => {
			return resultSuccess(
				[
					homeRouter,
					aboutRouter,
					systemManagementRouter,
					outsideRouter,
					personalCenterRouter,
				],
			);
		},
	},
]);
