import React from 'react'

function Card({username}) {
  return (
    <div class="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl" alt="" src="https://tailwindcss.com/_next/static/media/cover.f75d494c.png" />
  </div>
  <div class="flex">
    <span>Class Warfare</span>
    <span>The Anti-Patterns</span>
    <span class="flex">
      <span>{username}</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
  )
}

export default Card