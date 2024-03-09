//hooks & type
import { useState, useCallback, MouseEvent } from 'react';

interface ProfileMenuType {
	open: boolean;
	handleClose: () => void;
	anchorEl: HTMLButtonElement | null;
	handleToggle: (event: MouseEvent<HTMLButtonElement>) => void;
}

const useMenu = (): ProfileMenuType => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const open = Boolean(anchorEl);
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleToggle = useCallback(
		(event: MouseEvent<HTMLButtonElement>) => {
			setAnchorEl(event.currentTarget);
		},
		[setAnchorEl]
	);
	return { open, handleClose, anchorEl, handleToggle };
};

export default useMenu;
