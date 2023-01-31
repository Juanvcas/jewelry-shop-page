import { useEffect, useState } from 'react';

export const useLocalStorage = () => {
	const [bookmarks, setBookmarks] = useState();
	const [newBookmark, setNewBookmark] = useState();
	const [deleteBookmark, setDeleteBookmark] = useState();

	const localStorage = global.localStorage;

	const localItem = 'JewelryShopStorage_v1';
	const storage = localStorage?.getItem(localItem);

	const defautData = {
		bookmarks: {
			products: [],
		},
	};

	useEffect(() => {
		if (storage) {
			const data = JSON.parse(storage);
			setBookmarks(data.bookmarks);
		} else {
			const data = JSON.stringify(defautData);
			localStorage.setItem(localItem, data);
			setBookmarks(defautData.bookmarks);
		}

		const saveBookmarks = (newBm) => {
			const local = JSON.parse(storage);
			local.bookmarks.products.push(newBm);
			localStorage.setItem(localItem, JSON.stringify(local));
			setBookmarks(local.bookmarks);
			setNewBookmark(false);
		};

		const removeBokkmark = (Bm) => {
			const local = JSON.parse(storage);
			const index = local.bookmarks.products.findIndex(
				(item) => item.id === Bm.id
			);
			local.bookmarks.products.splice(index, 1);
			localStorage.setItem(localItem, JSON.stringify(local));
			setBookmarks(local.bookmarks);
			setDeleteBookmark(false);
		};

		newBookmark && saveBookmarks(newBookmark);
		deleteBookmark && removeBokkmark(deleteBookmark);
	}, [newBookmark, deleteBookmark]);

	return { bookmarks, setNewBookmark, setDeleteBookmark };
};
