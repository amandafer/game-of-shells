import styled from 'styled-components';

export const Title = styled.img`
	 {
		width: 300px;
		position: absolute;
		right: 15%;
	}
`;

export const ActionsContainer = styled.div`
	 {
		position: absolute;
		right: 40%;
		top: 38%;
		z-index: 1000;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	h2 {
		color: white;
		text-shadow: 1px 1px #5d5b5bd6;
	}

	button {
		background-color: #4caf50; /* Green */
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		width: 150px;
	}

	button:disabled {
		background-color: #d8d5d5;
		color: #666666ab;
	}
`;
