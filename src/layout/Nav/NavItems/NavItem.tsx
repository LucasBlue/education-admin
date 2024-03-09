import { useMemo, useCallback, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	Collapse
} from '@mui/material';
//store
import { switchNav } from '@/store/slicer/menu';
import {
	MenuItemType,
	selectDrawerOpen,
	selectOpenItem
} from '@/store/slicer/menu';

//icon
import { DownOutlined, UpOutlined } from '@ant-design/icons';
//lodash
import _ from 'lodash';

//hooks

export type NavItemsType = {
	item: MenuItemType;
	key?: number | string;
};

function NavItem({ item }: NavItemsType) {
	const theme = useTheme();
	const [foldOpen, setFoldOpen] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const openItem = useAppSelector(selectOpenItem);
	const drawerOpen = useAppSelector(selectDrawerOpen);
	const isSelected = useMemo(
		() => openItem.findIndex((id) => id === item.id) > -1,
		[openItem]
	);

	const Icon = item.icon;
	const itemIcon = item.icon ? (
		<Icon style={{ fontSize: drawerOpen ? '1rem' : '1.25rem' }} />
	) : (
		false
	);

	const itemHandler = useCallback(
		(id: string) => {
			dispatch(switchNav({ openItem: [id], level: item.level }));
			setFoldOpen((prevState) => !prevState);
		},
		[dispatch]
	);

	const textColor = 'text.primary';
	const iconSelectedColor = 'primary.main';
	return (
		<>
			<ListItemButton
				disableRipple
				selected={isSelected}
				onClick={() => itemHandler(item.id)}
				sx={{
					zIndex: 1201,
					pl: drawerOpen ? `${item.level * 28}px` : 1.5,
					py: !drawerOpen && item.level === 1 ? 1.25 : 1,
					...(drawerOpen && {
						'&:hover': {
							bgcolor: 'primary.lighter'
						},
						'&.Mui-selected': {
							bgcolor: 'primary.lighter',
							borderRight: `2px solid ${theme.palette.primary.main}`,
							color: iconSelectedColor,
							'&:hover': {
								color: iconSelectedColor,
								bgcolor: 'primary.lighter'
							}
						},
						mt: '6px'
					}),
					...(!drawerOpen && {
						'&:hover': {
							bgcolor: 'transparent'
						},
						'&.Mui-selected': {
							'&:hover': {
								bgcolor: 'transparent'
							},
							bgcolor: 'transparent'
						}
					})
				}}
			>
				<ListItemIcon
					sx={{
						minWidth: 28,
						color: isSelected ? iconSelectedColor : textColor,
						...(!drawerOpen && {
							borderRadius: 1.5,
							width: 36,
							height: 36,
							alignItems: 'center',
							justifyContent: 'center',
							'&:hover': {
								bgcolor: 'secondary.lighter'
							}
						}),
						...(!drawerOpen &&
							isSelected && {
								bgcolor: 'primary.lighter',
								'&:hover': {
									bgcolor: 'primary.lighter'
								}
							})
					}}
				>
					{itemIcon}
				</ListItemIcon>
				{(drawerOpen || (!drawerOpen && item.level !== 1)) && (
					<ListItemText
						primary={
							<Typography
								variant="h6"
								sx={{ color: isSelected ? iconSelectedColor : textColor }}
							>
								{item.title}
							</Typography>
						}
					/>
				)}
				{item.children &&
					(foldOpen ? (
						<UpOutlined className="text-xs" />
					) : (
						<DownOutlined className="text-xs" />
					))}
			</ListItemButton>
			<Collapse in={item.id === openItem[item.level - 1]}>
				{item.children &&
					_.map(item.children, (item) => <NavItem key={item.id} item={item} />)}
			</Collapse>
		</>
	);
}

export default NavItem;
