import React from 'react';

const MenuSearch: React.FC = () => {
	return (
		<div className="menu_search">
			<input type="text" placeholder="検索..." />
			<button type="button">検索</button>
		</div>
	);
};

export default MenuSearch;
