import $ from 'jquery'
import React from 'react'
import './bars.css'

let maxHealth = 500, curHealth = maxHealth

$(".add-damage").click(function ()
{
  if (curHealth === 0)
  {
    $('.message-box').html("Game over?");
  }
  else
  {
    var damage = Math.floor((Math.random() * 100) + 50);
    $(".health-bar-red, .health-bar").stop();
    curHealth = curHealth - damage;
    if (curHealth < 0)
    {
      curHealth = 0;
    }
    else
    {
      $('.message-box').html("You took " + damage + " points of damage!");
    }
    applyChange(curHealth);
  }
})

$(".add-heal").click(function ()
{
  if (curHealth === maxHealth)
  {
    $('.message-box').html("You are already at full health");
  }
  else
  {
    var heal = Math.floor((Math.random() * 100) + 5);
    $(".health-bar-red, .health-bar-blue, .health-bar").stop();
    curHealth = curHealth + heal;
    if (curHealth > maxHealth)
    {
      curHealth = maxHealth;
      $('.message-box').html("You're at full health");
    }
    else if (curHealth === 0)
    {
      $('.message-box').html("Miraculously! You regained your health by " + heal + " points and get back on to your feet!");
    }
    else
    {
      $('.message-box').html("You regained your health by " + heal + " points!");
    }
    applyChange(curHealth);
  }
})

function applyChange(modification)
{
  curHealth = curHealth + modification
  
  if (curHealth < 0)
  {
    curHealth = 0;
  }

  if (curHealth > maxHealth)
  {
    curHealth = maxHealth;
  }

  let a = curHealth * (100 / maxHealth)

  $(".health-bar-text").html(Math.round(a) + "%")
  $(".health-bar-red").animate({
    'width': a + "%"
  }, 700);
  $(".health-bar").animate({
    'width': a + "%"
  }, 500);
  $(".health-bar-blue").animate({
    'width': a + "%"
  }, 300);
  $('.total').html(curHealth + "/" + maxHealth)
}

const Bar = (props) =>
{
  // $('.total').html();
  // $(".health-bar-text").html()
  // $(".health-bar").css()
  let style = { width: "100%" }
  
  return (
    <div className="health-box" style={style} onClick={props.click}>
      <div className="total">{curHealth + "/" + maxHealth}</div>
      <div className="health-bar-red"></div>
      <div className="health-bar-blue"></div>
      <div className="health-bar"></div>
      <div className="health-bar-text">{Math.round(curHealth * (100 / maxHealth)) + "%"}</div>
    </div>
  )
}

export { Bar, applyChange }