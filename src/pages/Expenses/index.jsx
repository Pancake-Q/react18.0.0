import React, { useCallback, useMemo } from 'react';
import './index.css';
import { useState } from 'react';
import { useEffect } from 'react';
import getDataList from '../../mock/dataList';
import { useRef } from 'react';

const Expenses = () => {
	const inputRef = useRef(null);
	const [scrollDom, setScrollDom] = useState(null);
	const [searchText, setSearchText] = useState('');
	const [total, setTotal] = useState();
	const [dataList, setDataList] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		getDataListApi();
	}, []);
	const getDataListApi = (flog, param) => {
		flog === 1 ? setLoading(false) : setLoading(true);
		getDataList(param)
			.then(res => {
				const { status = 1, list, total } = res;
				console.log(status);
				if (status) {
					setDataList([]);
				} else {
					const beforeData = dataList;
					flog === 1 ? setDataList(beforeData.concat(list)) : setDataList(list);
					setTotal(total);
				}
			})
			.finally(() => {
				setLoading(false);
			});
	};
	const searchTitle = param => {
		setDataList([]);
		getDataListApi(param);
	};
	const enterKeyUp = e => {
		if (e.keyCode !== 13) return;
		setSearchText(inputRef.current.value);
		searchTitle(inputRef.current.value);
	};
	const clickHandler=()=>{
		console.log(inputRef.current.value)
		getDataListApi();
	}
	const handleOnScroll = () => {
		if (scrollDom) {
			const { scrollTop, clientHeight, scrollHeight } = scrollDom;
			// 兼容容错10px
			if (scrollTop + clientHeight >= scrollHeight - 1) {
				// 防止重复加载
				if (loading) return;
				console.log('懒加载');
				getDataListApi(1);
			}
		}
	};
	const Item = props => {
		const { dataList = [] } = props;
		return dataList?.length
			? dataList.map(item => (
					<>
						<div className="search-warp">
							<div className="content-item-title">{item.title}</div>
							<div className="content-item-text">{item.content}</div>
						</div>
					</>
			  ))
			: '无数据';
	};
	return (
		<main style={{ padding: '1rem 0' }}>
			<div className="warp">
				<div className="search">
					<div className="search-input">
						<input
							type="text"
							ref={inputRef}
							// onChange={e => searchTitle(e)}
							onKeyUp={enterKeyUp}
						/>
						<button className="search-btn" onClick={clickHandler}>搜索</button>
					</div>
				</div>
				<div
					className="content"
					ref={dom => {
						setScrollDom(dom);
					}}
					onScrollCapture={() => handleOnScroll()}
				>
					{loading ? 'loading...' : <Item dataList={dataList} />}
				</div>
			</div>
		</main>
	);
};
export default Expenses;
