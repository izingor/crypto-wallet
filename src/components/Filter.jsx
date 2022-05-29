import {useHandleChange} from '../hooks/useHandleChange'

export function Filter(props) {
	
	const handleChange = async ({ target }) => {
		const field = target.name
		const value = target.value
		props.setFilter({ [field]: value })
	}

	return (
		<section className='filter-container'>
			<section>
				<label htmlFor='name'>Name</label>
				<input
					onChange={handleChange}
					type='text'
					id='name'
					name='name'
				/>
				<button>Search</button>
			</section>
		</section>
	)
}
