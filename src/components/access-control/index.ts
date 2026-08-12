import type { ReactNode } from "react";

import { useAccess } from "#src/hooks/use-access";

interface AccessControlProps {
	// Permission type, defaults to code
	type?: "code" | "role"
	// Permission value, can be a string or an array of strings
	codes?: string | string[]
	children?: ReactNode
	// What to display when there's no permission; by default nothing is shown.
	fallback?: ReactNode
}

/**
 * Permission verification component
 *
 * @param AccessControlProps Properties of the permission verification component
 * @returns If the child component exists and the given permission value is valid, returns the child component; otherwise returns null
 */
export function AccessControl({ type = "code", codes, children, fallback }: AccessControlProps) {
	const { hasAccessByCodes, hasAccessByRoles } = useAccess();

	if (!children)
		return null;

	if (!type || type === "code") {
		return hasAccessByCodes(codes) ? children : fallback;
	}

	if (type === "role") {
		return hasAccessByRoles(codes) ? children : fallback;
	}

	return fallback;
}
