import React from 'react'
import { Bar, applyChange } from './HealthBar'

class Player extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state = { data: null }
	}

	render()
	{
		return (
			<div id="player">
				<Health />
				<Image />
				<Special />
			</div>
		)
	}
}

function Health()
{
	return <Bar click={() => applyChange(-18)} />
}

function Image(props)
{
	//let effect = ""

	return <img href="not found.jpg" alt="" />
}

function Special(props)
{
	return <div></div>
}

export default Player