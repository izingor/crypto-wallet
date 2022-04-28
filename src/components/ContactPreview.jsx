import { Link } from 'react-router-dom'
export function ContactPreview({ contact,removeContact }) {
	
	const onRemove = async (id) => {
		removeContact(id)
	}

	const onEdit = (id) => {
	
	}

	const contactStyle = {
		backgroundImage: `url(https://robohash.org/${contact._id}`,
	}


	return (
		<section style={contactStyle} className='contact-preview flex column '>
			<Link to={`/contact/${contact._id}`}>
				<div className='user-info'>
					<p>{contact.name}</p>
				</div>
			</Link>
			<Link to={`/contacts/edit/${contact._id}`}>Edit</Link>
			<button onClick={() => onRemove(contact._id)}>Remove</button>
		</section>
	)
}
