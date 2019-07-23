import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Image } from './style';

class Shell extends React.Component {
	render() {
		const { id, image, onClickHandler } = this.props;
		const onClick = () => onClickHandler(id);

		return <Image src={image} alt="shell" onClick={onClick} />;
	}
}

export default Shell;
