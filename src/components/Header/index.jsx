import React from 'react'
import { getRandomColor } from '../../utils/scripts'
export const Header = () => {
  const handleClick = (e) => {
    e.target.style.backgroundColor = getRandomColor();
  }
  return (
    <div className='header'>
      <h2 id="FirstElem" onClick={handleClick}>Шинкаренко</h2>
      <h3 id="SecondElem" onClick={handleClick}>Студентка групи </h3>
      <p><b>Місце народження:</b> 13 листопада, 2003 року, м. Київ</p>
      <p><b>Освіта:</b> Крюківщинський ліцей "ЛІДЕР", Технічний ліцей Національного Технічного університету України «КПІ»,
        Національний технічний університет України
        "Київський політехнічний інститут імені Ігоря Сікорського"</p>
    </div>
  )
}
