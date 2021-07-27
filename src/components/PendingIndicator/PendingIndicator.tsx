import { FC } from 'react'
import styled from 'styled-components'

import PendingIcon from '../../assets/vamalaka_loading.svg'

const ImageStyles = styled.img`
	height: auto;
	max-width: ${({ width }) => (width ? width + 'px' : '50%')};
`
export interface IconType {
	alt: string
	size: 'xs' | 's' | 'm' | 'l'
}

function getSize(size: string) {
	switch (size) {
		case 'xs':
			return 20
		case 's':
			return 40
		case 'm':
			return 64
		case 'l':
			return 164
		default:
			return 300
	}
}

const PendingIndicator: FC<IconType> = ({ alt, size }) => {
	return <ImageStyles src={PendingIcon} alt={alt} width={getSize(size)} />
}

export default PendingIndicator
