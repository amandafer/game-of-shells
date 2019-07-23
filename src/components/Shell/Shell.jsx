import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

class Shell extends React.Component {
	render() {
		const { id, image, onClickHandler } = this.props;
		const onClick = () => onClickHandler(id);

		return <img src={image} alt="shell" onClick={onClick} width="200px" />;
	}
}

export default Shell;
