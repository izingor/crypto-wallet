import { Component } from 'react'

export class Filter extends Component {
	state = {
		name: '',
	}

	handleChange = async ({ target }) => {
		console.log('handling change', target.value)
		const field = target.name
		const value = target.value
		await this.setState({ [field]: value })
            this.props.setFilter(this.state)

	}

	render() {
		const { name } = this.state
		return (
			<section className='filter-container'>
				<section>
					<label htmlFor='name'>Name</label>
					<input
						onChange={this.handleChange}
						type='text'
						id='name'
						name='name'
						value={name}
					/>
					<button>Search</button>
				</section>
			</section>
		)
	}
}
