import React from 'react';
import { Sand, Dunes } from './styles';

const EnhancedSand = ({ children }) => (
	<Sand>
		<Dunes />
		{children}
	</Sand>
);

export default EnhancedSand;
