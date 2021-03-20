import {
	useCallback,
} from 'react'

import useFieldData from './useFieldData.js'

const useField = ({
	name,
	onBlur,
	onChange,
}) => {
	const {
		errorMessages = [],
		isVisited = false,
		setValue,
		setVisited,
		value = '',
	} = (
		useFieldData({
			name,
		})
	)

	const fieldVisited = (
		useCallback(
			(
				event,
			) => {
				setVisited()

				onBlur?.(
					event
				)
			},
			[
				onBlur,
				setVisited,
			],
		)
	)

	const valueChanged = (
		useCallback(
			(
				event,
			) => {
				if (
					(
						event
						.target
						.type
					)
					=== 'checkbox'
				) {
					setValue(
						event
						.target
						.checked
					)
				}
				else {
					setValue(
						event
						.target
						.value
					)
				}

				onChange?.(
					event
				)
			},
			[
				onChange,
				setValue,
			],
		)
	)

	return {
		errorMessages,
		fieldVisited,
		isVisited: (
			isVisited
			.toString()
		),
		value,
		valueChanged,
	}
}

export default useField
