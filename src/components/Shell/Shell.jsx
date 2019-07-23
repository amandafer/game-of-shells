import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

class Shell extends React.Component {
	render() {
		const { id, image, onClickHandler } = this.props;

		return (
			<img
				src={image}
				alt="shell"
				onClick={() => onClickHandler(id)}
				width="200px"
			/>
		);
	}
}

export default Shell;
