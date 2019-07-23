import styled from 'styled-components';

export const Container = styled.div`
	 {
		position: relative;
		width: 800px;
		height: 700px;
		background: #b3d1f2;
		// margin: auto;
		overflow: hidden;
	}
`;

export const Sand = styled.div`
	 {
		position: absolute;
		width: 100%;
		height: 301px;
		background: #ddc58b;
		margin: 380px 0px;

		::before {
			content: '';
			position: absolute;
			width: 300px;
			height: 152px;
			border-radius: 300px 300px 0 0;
			background: #ddc58b;
			margin: -21px -112px;
		}

		::after {
			content: '';
			position: absolute;
			width: 300px;
			height: 152px;
			border-radius: 300px 300px 0 0;
			background: #ddc58b;
			margin: -12px -10px;
			z-index: 0;
		}
	}
`;

export const Dunes = styled.div`
	 {
		position: absolute;
		width: 300px;
		height: 152px;
		border-radius: 300px 300px 0 0;
		background: #ddc58b;
		margin: -21px 212px;

		::before {
			content: '';
			position: absolute;
			width: 300px;
			height: 152px;
			border-radius: 300px 300px 0 0;
			background: #ddc58b;
			margin: 9px 152px;
		}
		::after {
			content: '';
			position: absolute;
			width: 300px;
			height: 152px;
			border-radius: 300px 300px 0 0;
			background: #ddc58b;
			margin: 3px 261px;
		}

		.arenas {
			position: absolute;
			width: 300px;
			height: 152px;
			border-radius: 300px 300px 0 0;
			background: #ddc58b;
			margin: 7px 412px;
		}
	}
`;

export const Bird = styled.div`
	 {
		position: absolute;
	}
`;

export const FirstBird = styled(Bird)`
	 {
		margin: -291px -330px;
		animation: volar3 12s linear infinite;

		.bird7 {
			position: absolute;
			transform: scale(0.3);
		}
	}
`;

export const SecondBird = styled(Bird)`
	 {
		margin: -300px -300px;
		animation: volar 12s linear infinite;

		.bird3 {
			position: absolute;
			transform: scale(0.4);
		}
	}
`;

export const Head = styled.div`
	 {
		position: absolute;
		width: 25px;
		height: 25px;
		border-radius: 90px 90px 0;
		background: #ddd;
		transform: rotate(-45deg);
		margin: 102px 291px;
	}
`;

export const Eye = styled.div`
	 {
		position: absolute;
		width: 5px;
		height: 5px;
		border-radius: 100%;
		background: black;
		margin: 12px 14px;
	}
`;

export const Beak = styled.div`
	 {
		position: absolute;
		width: 0;
		height: 0;
		border-top: 5px solid transparent;
		border-left: 7px solid #ffae44;
		border-bottom: 7px solid transparent;
		transform: rotate(45deg);
		margin: 17px 21px;
	}
`;

export const Body = styled.div`
	 {
		position: absolute;
		width: 65px;
		height: 150px;
		border-bottom: 12px solid #ddd;
		border-left: 12px solid transparent;
		border-right: 12px solid transparent;
		border-radius: 90px / 100px;
		margin: -30px 231px;

		::before {
			content: '';
			position: absolute;
			width: 55px;
			height: 30px;
			border-radius: 0 0 70px 70px;
			background: #ddd;
			margin: 150px 0;
		}
	}
`;

export const Wing = styled.div`
	 {
		position: absolute;
		width: 30px;
		height: 50px;
		border-radius: 0px 112px 0px 112px;
		transform-origin: center bottom;
		animation: rotar 3s alternate infinite;
	}
`;

export const LeftWing = styled(Wing)`
	 {
		background: #ddd;
		margin: 80px 251px;
	}
`;

export const RightWing = styled(Wing)`
	 {
		background: #ccc;
		margin: 80px 241px;
	}
`;

export const Tail = styled.div`
	 {
		position: absolute;
		width: 30px;
		height: 30px;
		border-radius: 0px 70px 0px 70px;
		background: #ddd;
		margin: 90px 221px;
		transform: rotate(-12deg);

		::before {
			content: '';
			position: absolute;
			width: 30px;
			height: 30px;
			border-radius: 0px 70px 0px 70px;
			background: #ddd;
			margin: 0px 3px;
			transform: rotate(50deg);
		}
		::after {
			content: '';
			position: absolute;
			width: 30px;
			height: 30px;
			border-radius: 0px 70px 0px 70px;
			background: #ddd;
			margin: 12px -3px;
			transform: rotate(-30deg);
		}
	}
`;
