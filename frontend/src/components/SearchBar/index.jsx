import { memo } from 'react';
import styled from 'styled-components';
import weskiLogo from '../../assets/img/weski.svg';

const StyledSearch = styled.section`
	width: 100%;
	padding: 20px 80px;
	color: ${({ theme }) => theme.colors.grey};
	background-color: ${({ theme }) => theme.colors.white};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledSearchFields = styled.div`
	display: flex;
	gap: 15px;
`;

const StyledInput = styled.input`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 10px 16px;
	gap: 10px;
	width: 288.67px;
	height: 44px;
	color: ${({ theme }) => theme.colors.lightGrey};
	border: 1px solid ${({ theme }) => theme.colors.lightGrey};
	border-radius: 8px;
`;

const StyledSearchButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 10px 20px;
	gap: 8px;
	width: 112px;
	height: 44px;
	border: 1px solid ${({ theme }) => theme.colors.blue};
	color: ${({ theme }) => theme.colors.blue};
	background-color: transparent;
	border-radius: 8px;
`;

export const SearchBar = memo(function _SearchBar({ fields, onChange, onSearch }) {
	return (
		<StyledSearch>
			<img src={weskiLogo} alt="weskiLogo" />
			<StyledSearchFields>
				<StyledInput
					type="number"
					name="ski_site"
					placeholder="Ski Site"
					value={fields.ski_site}
					onChange={onChange}
					required
				/>

				<StyledInput
					type="text"
					name="from_date"
					placeholder="Start date"
					value={fields.from_date}
					onChange={onChange}
					required
				/>

				<StyledInput
					type="text"
					name="to_date"
					placeholder="End Date"
					value={fields.to_date}
					onChange={onChange}
					required
				/>

				<StyledInput
					type="number"
					name="group_size"
					placeholder="Group Size"
					value={fields.group_size}
					onChange={onChange}
					required
				/>
				<StyledSearchButton
					onClick={async () => {
						onSearch();
					}}
				>
					Search
				</StyledSearchButton>
			</StyledSearchFields>
		</StyledSearch>
	);
});
