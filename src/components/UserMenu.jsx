export function UserMenu({ loggedUser }) {
	const { name, coins, moves } = loggedUser

	return (
		<>
			<section className='user-menu-container container'>
				{name ? (
					<div className='user-info'>
						<p>{name}</p>
						<p>{coins}</p>
						<p>{moves.length}</p>
					</div>
				) : (
					''
				)}
			</section>
		</>
	)
}
