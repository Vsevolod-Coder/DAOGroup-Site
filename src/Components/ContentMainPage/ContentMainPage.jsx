import React from 'react'
import "./ContentMainPage.css"
import { Link } from 'react-router'

const ContentMainPage = () => {
  return (
    <section className='content'>
      <div className='content-section'>
        <div className='content-container'>
            <div className='content-left-block'>
              <div className='system-integration-block'>
                <Link className='system-integration'><p>Системная интеграция</p></Link>
              </div>
              <div className='techsupport-services-block'>
                <Link className='techsupport-services'><p>Поддержка и обслуживание</p></Link>
              </div>
            </div>
            <div className='content-right-block'>
              <div className='templates-system-management-block'>
                <Link className='templates-system-management'><p>Управление системами и процессами</p></Link>
              </div>
              <div className='development-modernization-block'>
                <Link className='development-modernization'><p>Разработка и модернизация</p></Link>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContentMainPage