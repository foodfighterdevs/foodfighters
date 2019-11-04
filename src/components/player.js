import React from 'react'

class Player extends React.Component
{
	constructor(props)
	{
		super(props)
		this.takeDamage = this.takeDamage.bind(this)
		this.state = { currentHealth: 100 }
	}

	takeDamage(currentHealth)
	{
		this.setState(currentHealth)
	}

	render()
	{
		return (
			<div id="player">
				<Health current={this.state.currentHealth} damage={10} click={this.takeDamage}/>
				<Image />
				<Special />
			</div>
		)
	}
}

function Health(props)
{
	let current = 100

	return (
		<div class="health-box" onClick={() => props.click(Math.round(props.current * (100 / props.damage)))}>
			<div class="health-bar-red"></div>
			<div class="health-bar-blue"></div>
			<div class="health-bar"></div>
			<div class="health-bar-text"></div>
		</div>
	)
}

function Image(props)
{
	let effect = ''

	return (
		<img href="not found.jpg" alt="Your Dish!" />
	)
}

function Special(props)
{
	return (
		<div>
			SPECIAL
		</div>
	)
}

export default Player