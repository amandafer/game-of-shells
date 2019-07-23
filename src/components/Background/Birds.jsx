import React from 'react';

import {
	FirstBird,
	SecondBird,
	Head,
	Body,
	LeftWing,
	RightWing,
	Eye,
	Beak,
	Tail
} from './styles';

const Birds = () => (
	<>
		<FirstBird>
			<div className="bird7">
				<Head>
					<Eye />
					<Beak />
				</Head>
				<RightWing />
				<Body />
				<LeftWing />
				<Tail />
			</div>
		</FirstBird>
		<SecondBird>
			<div className="bird3">
				<Head>
					<Eye />
					<Beak />
				</Head>
				<RightWing />
				<Body />
				<LeftWing />
				<Tail />
			</div>
		</SecondBird>
	</>
);

export default Birds;
